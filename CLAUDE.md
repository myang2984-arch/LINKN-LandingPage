# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **linkn** - an iOS app that saves links from anywhere and automatically syncs them to Notion. Built with React, TypeScript, Vite, and Tailwind CSS 4, with Firebase Firestore for beta signup collection.

## Development Commands

**Setup:**
```bash
npm install              # Install dependencies
```

**Development:**
```bash
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production (output: dist/)
```

**Deployment:**
```bash
# Firebase Hosting
firebase login
firebase deploy

# Vercel
vercel
```

## Architecture

**Simple Component-Based Structure**: Single-page app with client-side view routing in App.tsx.

```
src/
├── App.tsx                    # Main app with view routing (home/privacy/terms/support)
├── main.tsx                   # Entry point
├── components/
│   ├── header.tsx            # Navigation header
│   ├── hero.tsx              # Hero section
│   ├── features.tsx          # Features showcase
│   ├── pricing.tsx           # Pricing section
│   ├── beta-signup.tsx       # Beta signup form (Firebase integration)
│   ├── footer.tsx            # Footer with navigation
│   ├── privacy-policy.tsx    # Privacy policy page
│   ├── terms-of-use.tsx      # Terms page
│   ├── support.tsx           # Support page
│   └── ui/                   # shadcn/ui components (48 components)
├── lib/
│   └── firebase.ts           # Firebase config and Firestore setup
└── assets/                   # Images and static assets
```

**Key Patterns:**
- **View Routing**: App.tsx uses `useState` to switch between views ('home' | 'privacy' | 'terms' | 'support')
- **Component Composition**: Landing page sections are composed in App.tsx
- **UI Components**: shadcn/ui components in `components/ui/` with `cn()` utility for className merging
- **Firebase Integration**: Firestore used for `beta_signups` and `featureLikes` collections

## Firebase Setup

Firebase configuration is in [src/lib/firebase.ts](src/lib/firebase.ts). The project uses:
- **Firestore Database** for storing beta signups and feature likes
- **Firebase Hosting** for deployment (configured in [src/firebase.json](src/firebase.json))
- **Security Rules** in [src/firestore.rules](src/firestore.rules):
  - `beta_signups`: create-only (public form submissions)
  - `featureLikes`: read/create/update allowed (voting feature)

See [src/FIREBASE_SETUP.md](src/FIREBASE_SETUP.md) for detailed Firebase setup instructions.

## Key Dependencies

- **UI Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6 (port 3000, auto-opens browser)
- **Styling**: Tailwind CSS 4 + class-variance-authority + tailwind-merge
- **UI Components**: 48 shadcn/ui components (@radix-ui/react-*)
- **Backend**: Firebase (firestore)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Management**: react-hook-form

## Path Aliases

Configured in [vite.config.ts](vite.config.ts:51):
- `@/*` → `src/*` (e.g., `import { cn } from '@/components/ui/utils'`)

## Styling Approach

- **Tailwind CSS 4** with `@tailwindcss/vite` plugin
- **Utility Classes**: Extensive use of Tailwind utilities
- **Component Variants**: `class-variance-authority` for variant-based styling
- **CN Helper**: `cn()` function in `components/ui/utils.ts` merges Tailwind classes
- **Gradient Background**: Purple-tinted gradient defined in App.tsx

## Firebase Firestore Collections

**beta_signups:**
- email: string
- deviceType: 'ios' | 'android' | 'both'
- interestedFeatures: string[]
- createdAt: timestamp

**featureLikes:**
- featureId: string
- likes: number

View submissions in Firebase Console > Firestore Database.
