const MAX_LEN = {
  name: 100,
  company: 100,
  email: 200,
  budget: 40,
  message: 2000
};

const BUDGET_LABELS = {
  starter: 'Starter — $600',
  professional: 'Professional — $900',
  premium: 'Premium — $1200'
};

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const clean = (v, key) => {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, MAX_LEN[key] ?? 500);
};

export function validate(body) {
  const name = clean(body?.name, 'name');
  const company = clean(body?.company, 'company');
  const email = clean(body?.email, 'email');
  const budget = clean(body?.budget, 'budget');
  const message = clean(body?.message, 'message');

  if (!name) return { error: 'Name is required.' };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'A valid email is required.' };
  }
  if (budget && !BUDGET_LABELS[budget]) {
    return { error: 'Invalid budget option.' };
  }
  return { value: { name, company, email, budget, message } };
}

export function buildMessage(v) {
  const lines = [
    '<b>New portfolio enquiry</b>',
    `<b>Name:</b> ${escapeHtml(v.name)}`,
    v.company ? `<b>Company:</b> ${escapeHtml(v.company)}` : null,
    `<b>Email:</b> ${escapeHtml(v.email)}`,
    v.budget ? `<b>Budget:</b> ${escapeHtml(BUDGET_LABELS[v.budget])}` : null,
    v.message ? `\n${escapeHtml(v.message)}` : null
  ].filter(Boolean);
  return lines.join('\n');
}

export async function sendToTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    throw new Error('Server is missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.');
  }
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML', disable_web_page_preview: true })
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Telegram API error ${res.status}: ${detail.slice(0, 200)}`);
  }
}
