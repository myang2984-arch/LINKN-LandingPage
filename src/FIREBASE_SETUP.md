# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `linkn-landing` (or your choice)
4. Disable Google Analytics (optional for this project)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In Firebase Console, go to **Build > Firestore Database**
2. Click "Create database"
3. Choose **"Start in production mode"**
4. Select a location (choose closest to your users)
5. Click "Enable"

## Step 3: Get Firebase Config

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the **Web icon** `</>`
4. Register app with nickname: `linkn-web`
5. Copy the `firebaseConfig` object
6. Open `/lib/firebase.ts` and replace the config

Example:
```typescript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "linkn-landing.firebaseapp.com",
  projectId: "linkn-landing",
  storageBucket: "linkn-landing.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefghijk"
};
```

## Step 4: Deploy Firestore Rules

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init
```
   - Select **Firestore** and **Hosting**
   - Use existing project: select your project
   - Firestore rules: `firestore.rules` (already created)
   - Firestore indexes: `firestore.indexes.json` (press Enter)
   - Hosting directory: `dist` (already configured)
   - Single-page app: **Yes**
   - GitHub deploys: No

4. Deploy Firestore rules:
```bash
firebase deploy --only firestore:rules
```

## Step 5: Build and Deploy

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Firebase Hosting:
```bash
firebase deploy --only hosting
```

4. Your site will be live at:
```
https://YOUR_PROJECT_ID.web.app
```

## Step 6: View Submitted Data

1. Go to Firebase Console
2. Navigate to **Firestore Database**
3. You'll see a collection called `beta_signups`
4. Click it to view all submissions with:
   - email
   - deviceType
   - interestedFeatures
   - createdAt (timestamp)

## Export Data

To export data as CSV:
1. In Firestore Console, click the three dots menu
2. Select "Export collection"
3. Or use Firebase Admin SDK to export programmatically

## Security Notes

- The Firestore rules only allow **creating** new signups
- No one can read/update/delete data (except via Firebase Console)
- Only you (project owner) can access the dashboard
- Make sure to keep your Firebase config public (it's safe - protected by Firestore rules)

## Troubleshooting

**Error: "Failed to submit"**
- Check Firebase config in `/lib/firebase.ts`
- Make sure Firestore is enabled
- Verify Firestore rules are deployed

**Can't see data in Firestore**
- Wait a few seconds and refresh
- Check browser console for errors
- Verify the collection name is `beta_signups`
