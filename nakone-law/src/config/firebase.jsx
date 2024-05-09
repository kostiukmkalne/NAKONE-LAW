import { initializeApp } from "firebase/app";
import { gerFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHwhdcT1gpTqka0EP0ot5ztNFHKHPYTNU",
  authDomain: "nakone-law-project.firebaseapp.com",
  projectId: "nakone-law-project",
  storageBucket: "nakone-law-project.appspot.com",
  messagingSenderId: "394349982005",
  appId: "1:394349982005:web:1f2b533e181bd77c3b1c7c",
  measurementId: "G-Q2NM58WPYK",
};

const app = initializeApp(firebaseConfig);

export const db = gerFirestore(app);
