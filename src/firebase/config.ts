import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyAGhntWZH7Elj-89rsOzgJw_9xlOqk4Oeg',
  authDomain: 'fakeairline-463a9.firebaseapp.com',
  projectId: "fakeairline-463a9",
  storageBucket: "fakeairline-463a9.appspot.com",
  messagingSenderId: "1079473666053",
  appId: '1:1079473666053:web:3921232e725fac8620c46c',
  measurementId: "G-C92G7T1QSY"
};

// Initialize Firebase
export const appFirestore: FirebaseApp = initializeApp(firebaseConfig);