// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZUUde7C1H4fVzrAfHHfXAFmLPBnORKOQ",
  authDomain: "lizzy-bfb21.firebaseapp.com",
  projectId: "lizzy-bfb21",
  storageBucket: "lizzy-bfb21.appspot.com",
  messagingSenderId: "547214032505",
  appId: "1:547214032505:web:f5d360a7b9df922d129ea8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
export const auth = getAuth(app);


export default app;