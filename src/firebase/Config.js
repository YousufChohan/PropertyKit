// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9O7dZpL3vvG5Yx0E6EifqWET2CZXWKVc",
  authDomain: "propertykit-f1660.firebaseapp.com",
  projectId: "propertykit-f1660",
  storageBucket: "propertykit-f1660.appspot.com",
  messagingSenderId: "190759292164",
  appId: "1:190759292164:web:b79cef4fdd30cf0e979451",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
