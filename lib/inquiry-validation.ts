export type Inquiry = { name: string; email: string; businessName: string; website: string; challenge: string };
type Result = { ok: true; value: Inquiry } | { ok: false; error: string };

/** Shared by both forms and handlers so an accepted request has a usable reply path. */
export function validateInquiry(input: unknown, websiteRequired: boolean): Result {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return { ok: false, error: 'Please complete the required fields.' };
  const record = input as Record<string, unknown>;
  const value = {} as Inquiry;
  for (const key of ['name', 'email', 'businessName', 'website', 'challenge'] as const) {
    const field = record[key];
    if (typeof field !== 'string') return { ok: false, error: 'Please complete the required fields.' };
    value[key] = field.trim();
  }
  if (!value.name || !value.email || !value.businessName || !value.challenge || (websiteRequired && !value.website)) {
    return { ok: false, error: websiteRequired ? 'All fields are required.' : 'Name, email, business name and your message are required.' };
  }
  if (value.name.length > 120 || value.businessName.length > 200 || value.email.length > 254 || value.website.length > 2048 || value.challenge.length > 5000) {
    return { ok: false, error: 'Please shorten the details. Your message can be up to 5,000 characters.' };
  }
  if (!/^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]+$/.test(value.email)) return { ok: false, error: 'Please enter a valid reply email address.' };
  if (/[\r\n]/.test(value.name + value.businessName)) return { ok: false, error: 'Please use one line for your name and business name.' };
  if (value.website) {
    try {
      const normalized = /^[a-z][a-z0-9+.-]*:/i.test(value.website) ? value.website : `https://${value.website}`;
      const url = new URL(normalized);
      if (!['https:', 'http:'].includes(url.protocol) || !url.hostname.includes('.') || url.username || url.password) throw new Error('Invalid website');
      value.website = url.toString();
    } catch { return { ok: false, error: 'Please enter a valid http or https website (e.g. yourbusiness.com).' }; }
  }
  return { ok: true, value };
}
