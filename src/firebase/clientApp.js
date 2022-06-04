import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

// const clientCredentials = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyBy4CrDk37cBMnNWpeKM3C8n8oWMBR36zM",
    authDomain: "test-boda-pm.firebaseapp.com",
    projectId: "test-boda-pm",
    storageBucket: "test-boda-pm.appspot.com",
    messagingSenderId: "1070730751619",
    appId: "1:1070730751619:web:4d4718c7579539fb4335b6"
  };

if (!getApps().length) {
  //....
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

export { db, auth };