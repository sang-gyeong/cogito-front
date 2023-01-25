import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBFIuelg9CP4P2BCsDauLr0HNNWqjJPLoI',
  authDomain: 'cogito-cde5b.firebaseapp.com',
  projectId: 'cogito-cde5b',
  storageBucket: 'cogito-cde5b.appspot.com',
  messagingSenderId: '179904954165',
  appId: '1:179904954165:web:f182a9e0fccf24f708167c',
  measurementId: 'G-KZZNVQ4H2C',
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASEURL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

  //   REACT_APP_FIREBASE_API_KEY= ...
  // REACT_APP_FIREBASE_AUTH_DOMAIN= ...
  // REACT_APP_FIREBASE_PROJECT_ID= ...
  // REACT_APP_FIREBASE_STORAGE_BUCKET= ...
  // REACT_APP_FIREBASE_MESSAGING_SENDER_ID= ...
  // REACT_APP_FIREBASE_APP_ID= ...
  // REACT_APP_FIREBASE_MEASUREMENT_ID= ...
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
