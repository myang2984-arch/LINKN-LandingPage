# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A landing page for **linkn** - an iOS app that saves links from anywhere and syncs them to Notion automatically. Built with React, TypeScript, Vite, and Firebase Firestore for beta signup collection.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6 with SWC
- **Styling**: Tailwind CSS 4 (custom variables in globals.css)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Backend**: Firebase Firestore for beta signups
- **Deployment**: Firebase Hosting or Vercel

## Development Commands

**Setup:**
```bash
npm install              # Install dependencies
```

**Development:**
```bash
npm run dev              # Start dev server on http://localhost:3000
```

**Build:**
```bash
npm run build            # Build for production (outputs to /build directory)
```

**Firebase Deployment:**
```bash
# From src/ directory where firebase.json is located
firebase login
firebase deploy --only firestore:rules    # Deploy Firestore security rules
firebase deploy --only hosting            # Deploy site
```

**Vercel Deployment:**
```bash
vercel                   # Deploy to Vercel
```

## Project Structure

```
LandingPage/
├── index.html                  # Entry HTML
├── package.json                # Dependencies (root)
├── vite.config.ts              # Vite configuration with path aliases
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Main app component (page sections)
│   ├── styles/
│   │   └── globals.css        # Tailwind + CSS variables
│   ├── components/
│   │   ├── header.tsx         # Navigation header
│   │   ├── hero.tsx           # Hero section
│   │   ├── how-it-works.tsx   # How it works section
│   │   ├── features.tsx       # Features showcase
│   │   ├── pricing.tsx        # Pricing tiers
│   │   ├── beta-signup.tsx    # Beta signup form (Firebase)
│   │   ├── footer.tsx         # Footer
│   │   └── ui/                # shadcn/ui components (50+ files)
│   ├── lib/
│   │   └── firebase.ts        # Firebase configuration
│   ├── firebase.json          # Firebase hosting config
│   ├── firestore.rules        # Firestore security rules
│   └── tsconfig.json          # TypeScript config
```

## Architecture

**Single-Page Application**: All sections rendered in [App.tsx](src/App.tsx), which composes page sections as a single scrollable landing page.

**Component Organization**:
- **Page sections** (`src/components/*.tsx`): Main landing page sections imported into App.tsx
- **UI primitives** (`src/components/ui/*.tsx`): shadcn/ui components based on Radix UI
- **Utility components** (`src/components/figma/*.tsx`): Custom utilities like ImageWithFallback

**Styling Pattern**: Tailwind CSS with CSS custom properties for theming. Uses `@custom-variant dark` for dark mode support.

**State Management**: Component-level React hooks (useState) - no global state library needed for this simple landing page.

## Firebase Integration

**Firestore Collection**: `beta_signups`
- Schema: `{ email, deviceType, interestedFeatures[], createdAt }`
- Security: Write-only (users can create but not read/update/delete)
- Implementation: [beta-signup.tsx](src/components/beta-signup.tsx)

**Important**: The [firebase.ts](src/lib/firebase.ts) file initializes Firebase app and analytics but **does not export the Firestore `db` instance**. The beta-signup component imports `db` from this file, so you'll need to add:
```typescript
import { getFirestore } from 'firebase/firestore';
export const db = getFirestore(app);
```

**Configuration Files**:
- `src/firebase.json`: Hosting configuration (serves from `/dist` with SPA rewrites)
- `src/firestore.rules`: Security rules (allow create on beta_signups only)
- `src/firestore.indexes.json`: Firestore indexes (if needed)

## Vite Configuration

**Build Output**: `build/` directory (not the default `dist/`)
- Note: Firebase hosting config expects `dist/`, so either update vite.config.ts `outDir` or firebase.json `public` field

**Path Aliases**:
- `@/*` → `./src/*`
- Extensive package version aliases for dependency resolution

**Dev Server**: Port 3000 with auto-open browser

## Common Tasks

**Adding a new landing page section**:
1. Create component in `src/components/section-name.tsx`
2. Import and add to [App.tsx](src/App.tsx) in desired order
3. Use existing sections as reference for styling patterns

**Adding UI components**:
- UI primitives are from shadcn/ui (already installed)
- Import from `@/components/ui/component-name`
- See [shadcn/ui docs](https://ui.shadcn.com) for component API

**Modifying Firebase rules**:
1. Edit `src/firestore.rules`
2. Deploy: `cd src && firebase deploy --only firestore:rules`

**Environment-specific Firebase config**:
- Firebase config is currently hardcoded in [firebase.ts](src/lib/firebase.ts)
- For multiple environments, consider using Vite environment variables

## Important Notes

- **Build/Deploy mismatch**: Vite outputs to `build/` but Firebase expects `dist/`. Reconcile before deploying.
- **Missing Firestore export**: [firebase.ts](src/lib/firebase.ts) needs `export const db = getFirestore(app)` for beta-signup to work.
- **Chinese text in config**: Project name in package.json is in Chinese ("创建Landing Page")
- **Firebase config is public**: API keys in firebase.ts are safe to commit (protected by Firestore rules)
