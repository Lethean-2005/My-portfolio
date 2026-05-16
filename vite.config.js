import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { validate, buildMessage, sendToTelegram } from './api/_telegram.js';

function contactApiDevPlugin(env) {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Allow', 'POST');
          res.setHeader('content-type', 'application/json');
          return res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
        }
        let raw = '';
        for await (const chunk of req) raw += chunk;
        let body = {};
        try {
          body = raw ? JSON.parse(raw) : {};
        } catch {
          res.statusCode = 400;
          res.setHeader('content-type', 'application/json');
          return res.end(JSON.stringify({ ok: false, error: 'Invalid JSON' }));
        }
        const { value, error } = validate(body);
        if (error) {
          res.statusCode = 400;
          res.setHeader('content-type', 'application/json');
          return res.end(JSON.stringify({ ok: false, error }));
        }
        if (env.TELEGRAM_BOT_TOKEN) process.env.TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN;
        if (env.TELEGRAM_CHAT_ID) process.env.TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID;
        try {
          await sendToTelegram(buildMessage(value));
          res.statusCode = 200;
          res.setHeader('content-type', 'application/json');
          res.end(JSON.stringify({ ok: true }));
        } catch (err) {
          console.error('[dev /api/contact]', err);
          res.statusCode = 502;
          res.setHeader('content-type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: 'Failed to deliver message.' }));
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), contactApiDevPlugin(env)],
    server: {
      port: 5173,
      open: true
    }
  };
});
