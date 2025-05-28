// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpJGvYusUFqe_04Cywtsrj4uQVSby1_0I',
  authDomain: 'example-425a1.firebaseapp.com',
  projectId: 'example-425a1',
  storageBucket: 'example-425a1.firebasestorage.app',
  messagingSenderId: '515024394867',
  appId: '1:515024394867:web:75f9fd0902a1c71310a806',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore();

export {auth};
