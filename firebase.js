// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDwlMdf6nVKz9znAeoPYvg6TNDAERA4U3A",
//   authDomain: "signal-clone-85a32.firebaseapp.com",
//   projectId: "signal-clone-85a32",
//   storageBucket: "signal-clone-85a32.appspot.com",
//   messagingSenderId: "56472316180",
//   appId: "1:56472316180:web:6b32106507a5aeb9f4ba01",
//   measurementId: "G-MPL29MHM1Z",
// };

// initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const db = getFirestore();

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwlMdf6nVKz9znAeoPYvg6TNDAERA4U3A",
  authDomain: "signal-clone-85a32.firebaseapp.com",
  projectId: "signal-clone-85a32",
  storageBucket: "signal-clone-85a32.appspot.com",
  messagingSenderId: "56472316180",
  appId: "1:56472316180:web:6b32106507a5aeb9f4ba01",
  measurementId: "G-MPL29MHM1Z",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
