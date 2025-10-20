import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: 'wedding-f8001.firebaseapp.com',
  projectId: 'wedding-f8001',
  storageBucket: 'wedding-f8001.firebasestorage.app',
  messagingSenderId: '858439959517',
  appId: '1:858439959517:web:629dc3486abc47bd91ac34',
  measurementId: 'G-EWLBK9LM6B',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
