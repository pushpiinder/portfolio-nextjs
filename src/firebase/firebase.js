import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUPyE5lRRs_KBg-yVrCMFO3uuF6BEfgeg",
  authDomain: "cv-app-2bb13.firebaseapp.com",
  projectId: "cv-app-2bb13",
  storageBucket: "cv-app-2bb13.appspot.com",
  messagingSenderId: "1051519828265",
  appId: "1:1051519828265:web:7bc6ce13048f119574f738",
  measurementId: "G-V3HTLD6C3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);