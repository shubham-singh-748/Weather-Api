// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvtILrWEYj7VEevgNwv3kX8sAaFa0pHbI",
  authDomain: "vite-contact-app-ee912.firebaseapp.com",
  projectId: "vite-contact-app-ee912",
  storageBucket: "vite-contact-app-ee912.appspot.com",
  messagingSenderId: "442506644451",
  appId: "1:442506644451:web:8630e2cd9fbc4d7ea82ed6",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
