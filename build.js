const fs = require('fs');
const path = require('path');

const environmentProd = `
export const environment = {
  production: true,
  firebase: {
    apiKey: "${process.env.FIREBASE_API_KEY || 'demo-api-key'}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN || 'demo-project.firebaseapp.com'}",
    projectId: "${process.env.FIREBASE_PROJECT_ID || 'demo-project'}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET || 'demo-project.appspot.com'}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || '123456789'}",
    appId: "${process.env.FIREBASE_APP_ID || '1:123456789:web:demo-app-id'}"
  }
};
`;

const environmentDev = `
export const environment = {
  production: false,
  firebase: {
    apiKey: "${process.env.FIREBASE_API_KEY || 'demo-api-key'}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN || 'demo-project.firebaseapp.com'}",
    projectId: "${process.env.FIREBASE_PROJECT_ID || 'demo-project'}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET || 'demo-project.appspot.com'}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || '123456789'}",
    appId: "${process.env.FIREBASE_APP_ID || '1:123456789:web:demo-app-id'}"
  }
};
`;

const envDir = path.join(__dirname, 'src', 'environments');
if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

fs.writeFileSync(path.join(envDir, 'environment.prod.ts'), environmentProd);
fs.writeFileSync(path.join(envDir, 'environment.ts'), environmentDev);

console.log('Environment files generated successfully!');