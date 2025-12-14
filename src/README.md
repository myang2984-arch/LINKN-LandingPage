# linkn Landing Page

A landing page for linkn - an iOS app that saves links from anywhere and syncs them to Notion automatically.

## Features

- Beta signup form with Firebase Firestore integration
- Responsive design with Tailwind CSS
- React + TypeScript + Vite

## Firebase Setup

See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) for detailed setup instructions.

**Quick Start:**

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore Database
3. Copy your Firebase config to `/lib/firebase.ts`
4. Deploy: `firebase deploy`

## Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Build and deploy:
```bash
npm install
npm run build
firebase deploy
```

## Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push this code to a GitHub repository:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

### Option 3: Deploy via Vercel Dashboard

1. Create a zip file of this project
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Choose "Upload" and select your zip file
5. Click "Deploy"

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Lucide Icons