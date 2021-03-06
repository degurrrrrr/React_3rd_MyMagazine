import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAiD4ZXKj10cXntiJlSMBlWd2CSe2u0rJE",
  authDomain: "mymagazine-48d82.firebaseapp.com",
  projectId: "mymagazine-48d82",
  storageBucket: "mymagazine-48d82.appspot.com",
  messagingSenderId: "524067594584",
  appId: "1:524067594584:web:709a36e610743c1c0f852d",
  measurementId: "G-83DSG8RHPD"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export {auth, apiKey, firestore, storage};