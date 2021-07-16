import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/firestore"
import "firebase/analytics"

const firebaseConfig =firebase.initializeApp({
  apiKey: "AIzaSyDw98f-wNkvf2McarckNEm7nyXEYKq5xRo",
  authDomain: "rental-app-c8057.firebaseapp.com",
  databaseURL: "https://rental-app-c8057-default-rtdb.firebaseio.com",
  projectId: "rental-app-c8057",
  storageBucket: "rental-app-c8057.appspot.com",
  messagingSenderId: "282507206834",
  appId: "1:282507206834:web:a6744160a87018b6b629ab",
  measurementId: "G-TDWV9JC7KT"
});

export const auth = firebaseConfig.auth();
export const storage = firebaseConfig.storage();
export const firestore = firebaseConfig.firestore();
//export const timestamp = firebaseConfig.firestore.FieldValue.serverTimestamp;
export default firebaseConfig;