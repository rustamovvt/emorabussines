# EMORA 2.0

EMORA — personal website/experience generator:
- BASIC: ready-made templates
- AI: AI-assisted generation and editing
- PRO AI: build a site from zero through conversational AI
- Telegram payment/login flow
- Custom domains
- Admin/template marketplace foundation

This package is a production-oriented starter architecture. Connect your real Telegram bot,
payment provider, database, AI provider and deployment credentials before production use.

## Suggested stack
Next.js + TypeScript + Tailwind CSS
PostgreSQL + Prisma
Telegram Bot API
AI provider API
Cloudflare/R2 or S3 for images
Railway/Vercel for deployment

## Main routes
/                 landing
/create            choose BASIC / AI / PRO
/templates         template marketplace
/editor/[id]       visual + AI editor
/sites              user's sites
/preview/[slug]    public website
/pricing            plans
/admin              admin area
