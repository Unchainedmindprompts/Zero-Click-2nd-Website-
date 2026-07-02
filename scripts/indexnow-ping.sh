#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# IndexNow ping — the fastest recrawl signal for Bing/Yandex (and therefore for
# Copilot / ChatGPT's Bing-backed index).
#
# Pings the FULL current URL set, pulled live from the sitemap — because the
# site-wide JSON-LD @graph (e.g. areaServed) changes affect every page, so the
# accurate signal is "recrawl everything." IndexNow accepts up to 10,000 URLs
# per POST, so this is one cheap request.
#
# RUN THIS ONLY AFTER THE CHANGES ARE LIVE ON PRODUCTION. Firing before deploy
# makes the engines recrawl stale content, and the key file 404s until then:
#   https://www.kodecite.ai/98bef865f189b4ec29ce7c0d32c5d8a2.txt
#
# Usage:  bash scripts/indexnow-ping.sh
# ─────────────────────────────────────────────────────────────────────────────
set -euo pipefail

HOST="www.kodecite.ai"
KEY="98bef865f189b4ec29ce7c0d32c5d8a2"
SITEMAP="https://${HOST}/sitemap.xml"

# Pull every <loc> from the live sitemap, quote each, join with commas. Portable
# (no jq / bash-4 needed) so it runs on a stock macOS shell too.
URLLIST=$(curl -sS "$SITEMAP" \
  | grep -oE '<loc>[^<]+</loc>' \
  | sed -E 's#</?loc>##g' \
  | sed 's/.*/"&"/' \
  | paste -sd, -)

if [ -z "$URLLIST" ]; then
  echo "No URLs found in $SITEMAP — is the site deployed and the sitemap live?" >&2
  exit 1
fi

COUNT=$(printf '%s' "$URLLIST" | tr ',' '\n' | wc -l | tr -d ' ')
echo "Pinging IndexNow with ${COUNT} URLs from ${SITEMAP} ..."

curl -sS -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"${HOST}\",\"key\":\"${KEY}\",\"keyLocation\":\"https://${HOST}/${KEY}.txt\",\"urlList\":[${URLLIST}]}" \
  -w "\nHTTP %{http_code}\n"

# 200 or 202 = accepted (IndexNow returns no body).
