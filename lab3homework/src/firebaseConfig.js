// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, get} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDouUHIAJqSQG3ysEM0v2vJqjtgJdnfjGQ",

  authDomain: "piwo-31b97.firebaseapp.com",

  projectId: "piwo-31b97",

  storageBucket: "piwo-31b97.appspot.com",
  databaseURL: "https://piwo-31b97-default-rtdb.europe-west1.firebasedatabase.app/",

  messagingSenderId: "187332936760",

  appId: "1:187332936760:web:e6295d06163bc4f1eb92cd",

  measurementId: "G-MRQ1J05P2Q"

};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, database, get, ref};