import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKCm29qYHXIP1XKSBGS-zSCYHQ8PVJFp8",
  authDomain: "sistema-bancario-c970c.firebaseapp.com",
  projectId: "sistema-bancario-c970c",
  storageBucket: "sistema-bancario-c970c.firebasestorage.app",
  messagingSenderId: "202872452823",
  appId: "1:202872452823:web:5933c7fc3e10b79db8a292",
  measurementId: "G-Y0EFV0RQ7L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

const analytics = getAnalytics(app);