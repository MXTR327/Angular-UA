/* eslint-disable perfectionist/sort-objects */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const firebaseApiKey = process.env['FIREBASE_API_KEY'];
const firebaseAppId = process.env['FIREBASE_APP_ID'];
const firebaseAuthDomain = process.env['FIREBASE_AUTH_DOMAIN'];
const firebaseMsgSenderId = process.env['FIREBASE_MSG_SENDER_ID'];
const firebaseProjectId = process.env['FIREBASE_PROJECT_ID'];
const firebaseStorageBucket = process.env['FIREBASE_STORAGE_BUCKET'];

if (!firebaseApiKey) throw new Error('FIREBASE_API_KEY is not set');
if (!firebaseAppId) throw new Error('FIREBASE_APP_ID is not set');
if (!firebaseAuthDomain) throw new Error('FIREBASE_AUTH_DOMAIN is not set');
if (!firebaseMsgSenderId) throw new Error('FIREBASE_MSG_SENDER_ID is not set');
if (!firebaseProjectId) throw new Error('FIREBASE_PROJECT_ID is not set');
if (!firebaseStorageBucket)
  throw new Error('FIREBASE_STORAGE_BUCKET is not set');

const envFileContent = `
export const environment = {
  firebaseConfig: {
    apiKey: "${process.env['FIREBASE_API_KEY']}",
    appId: "${process.env['FIREBASE_APP_ID']}",
    authDomain: "${process.env['FIREBASE_AUTH_DOMAIN']}",
    messagingSenderId: "${process.env['FIREBASE_MSG_SENDER_ID']}",
    projectId: "${process.env['FIREBASE_PROJECT_ID']}",
    storageBucket: "${process.env['FIREBASE_STORAGE_BUCKET']}"
  }
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);
