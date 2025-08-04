# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Framework**: Astro 5.12.8 + TypeScript
- **Styling**: TailwindCSS v4
- **Deployment**: Cloudflare Workers

## Commands

- `npm run dev` - Development server (localhost:4321)
- `npm run build` - Production build
- `npm run preview` - Preview build

## Structure

- `src/pages/index.astro` - Landing page
- `src/styles/global.css` - Styles
- `astro.config.mjs` - Config
- `wrangler.jsonc` - CF Workers config