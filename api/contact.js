import { validate, buildMessage, sendToTelegram } from './_telegram.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }
  const { value, error } = validate(req.body ?? {});
  if (error) return res.status(400).json({ ok: false, error });

  try {
    await sendToTelegram(buildMessage(value));
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('[api/contact] send failed:', err);
    return res.status(502).json({ ok: false, error: 'Failed to deliver message.' });
  }
}
