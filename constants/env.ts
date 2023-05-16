export const GITHUB_OAUTH_CLIENT_ID =
  process.env.NEXT_GITHUB_OAUTH_CLIENT_ID || ''
export const GITHUB_OAUTH_CLIENT_SECRET_ID =
  process.env.NEXT_GITHUB_OAUTH_CLIENT_SECRET_ID || ''

export const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_PROJECT || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_STORAGE_BUCKET || '',
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MESSAGING_APP_ID || '',
}
