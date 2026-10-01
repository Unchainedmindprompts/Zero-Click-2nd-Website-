import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3000';
const routes = [];
function visit(dir) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { const file = path.join(dir, entry.name); if (entry.isDirectory()) visit(file); else if (entry.name === 'page.tsx') routes.push('/' + path.relative('app', dir).split(path.sep).filter(Boolean).join('/')); } }
visit('app'); routes.push('/ready');
const pages = new Map();
for (const route of routes) {
 const response = await fetch(origin + route);
 assert.equal(response.status, 200, `${route} returned ${response.status}`);
 const html = await response.text(); pages.set(route, html);
 assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route} must have one H1`);
 const expected = 'https://www.kodecite.ai' + (route === '/' ? '/' : route);
 const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
 assert.ok(canonical, `${route} needs a canonical`);
 assert.equal(new URL(canonical).href, new URL(expected).href, `${route} canonical`);
 const schema = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
 assert.ok(schema.length > 0, `${route} must contain JSON-LD`);
 for (const [, json] of schema) JSON.parse(json);
 if (route !== '/ready') assert.doesNotMatch(html, /<meta[^>]*name="robots"[^>]*content="[^"]*noindex/, `${route} unexpectedly noindex`);
 console.log(`PASS ${route}: 200, H1, canonical, ${schema.length} JSON-LD blocks`);
}
for (const [route, html] of pages) {
 for (const match of html.matchAll(/href="(\/(?!\/)[^"?]*)"/g)) {
   const [targetPath, hash] = match[1].split('#');
   if (!pages.has(targetPath)) continue;
   if (hash) assert.ok(pages.get(targetPath).includes(`id="${hash}"`), `${route} has missing anchor ${match[1]}`);
 }
}
for (const endpoint of ['/api/machine-read', '/api/contact']) {
 const bad = await fetch(origin + endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ name: 'Test without email' }) });
 assert.equal(bad.status, 400, `${endpoint} rejects missing required fields`);
 const malformed = await fetch(origin + endpoint, { method: 'POST', headers: {'Content-Type':'application/json'}, body: '{' });
 assert.equal(malformed.status, 400, `${endpoint} rejects malformed JSON`);
}
const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
for (const route of routes.filter(route => route !== '/ready')) assert.ok(sitemap.includes('https://www.kodecite.ai' + (route === '/' ? '' : route) + '</loc>'), `${route} is missing from the sitemap`);
for (const file of ['/agent.json','/agents.json']) { const data = await (await fetch(origin + file)).json(); assert.equal(data.agent_interaction.autonomous_submission, false); }
const image = await fetch(origin + '/api/og'); assert.equal(image.status, 200); assert.match(image.headers.get('content-type'), /image/);
const notFound = await fetch(origin + '/this-page-is-not-present'); assert.equal(notFound.status, 404);
console.log(`PASS: ${routes.length} pages; canonicals, headings, JSON-LD, linked anchors, sitemap, discovery files, social image, 404, and non-sending form rejection checks`);
