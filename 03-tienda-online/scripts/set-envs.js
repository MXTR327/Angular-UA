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
const firebaseDbUrl = process.env['FIREBASE_DB_URL'];
const firebaseMsgSender = process.env['FIREBASE_MSG_SENDER'];
const firebaseProjectId = process.env['FIREBASE_PROJECT_ID'];
const firebaseStorageBucket = process.env['FIREBASE_STORAGE_BUCKET'];

if (!firebaseApiKey) throw new Error('FIREBASE_API_KEY is not set');
if (!firebaseAppId) throw new Error('FIREBASE_APP_ID is not set');
if (!firebaseAuthDomain) throw new Error('FIREBASE_AUTH_DOMAIN is not set');
if (!firebaseDbUrl) throw new Error('FIREBASE_DB_URL is not set');
if (!firebaseMsgSender) throw new Error('FIREBASE_MSG_SENDER is not set');
if (!firebaseProjectId) throw new Error('FIREBASE_PROJECT_ID is not set');
if (!firebaseStorageBucket)
  throw new Error('FIREBASE_STORAGE_BUCKET is not set');

const envFileContent = `
export const environment = {
  firebaseConfig: {
    apiKey: "${process.env['FIREBASE_API_KEY']}",
    appId: "${process.env['FIREBASE_APP_ID']}",
    authDomain: "${process.env['FIREBASE_AUTH_DOMAIN']}",
    databaseURL: "${process.env['FIREBASE_DB_URL']}",
    messagingSenderId: "${process.env['FIREBASE_MSG_SENDER']}",
    projectId: "${process.env['FIREBASE_PROJECT_ID']}",
    storageBucket: "${process.env['FIREBASE_STORAGE_BUCKET']}"
  }
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);
