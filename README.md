# sematryx-multi-agent-website

Landing site for [Sematryx Multi-Agent](https://github.com/anthropics/sematryx-multi-agent).
Built with Next.js (App Router), TypeScript, and Tailwind v4. Deliberately
isolated from the Python package repo — no shared toolchain, no shared CI.

## Develop

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Type-check

```bash
npm run typecheck
```

## Deploy

The site is a self-contained Next.js app — point Vercel at this repo with the
default project settings (Framework: Next.js, Root Directory: `./`).
