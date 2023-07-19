// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHHva3kCx_eZdZDU9iWSsFoTM7qOMCljs",
  authDomain: "nuxt3fullstack-bea2a.firebaseapp.com",
  projectId: "nuxt3fullstack-bea2a",
  storageBucket: "nuxt3fullstack-bea2a.appspot.com",
  messagingSenderId: "86504575435",
  appId: "1:86504575435:web:fbcc88856b7332d135a64e",
};

export default function useFirebase() {
  if (getApps().length == 0) {
    const app = initializeApp(firebaseConfig);
    return { app };
  }
}
