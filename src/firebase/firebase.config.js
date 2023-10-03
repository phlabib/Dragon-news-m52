
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDV4Lc20P9V-I7L5MExAnJrHUhPKYst51s",
  authDomain: "dragon-news-m52.firebaseapp.com",
  projectId: "dragon-news-m52",
  storageBucket: "dragon-news-m52.appspot.com",
  messagingSenderId: "89650332174",
  appId: "1:89650332174:web:a6bee8666868b42d91325f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;