// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDboP-VOB-pbJzhLAyMiLkV7bFqqS59lyA",
  authDomain: "chat-canvas-client.firebaseapp.com",
  projectId: "chat-canvas-client",
  storageBucket: "chat-canvas-client.appspot.com",
  messagingSenderId: "789104979566",
  appId: "1:789104979566:web:e0c3b589aaffc954e6c07f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;