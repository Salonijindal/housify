import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDsSytIXFT1RJMSMupSMPoH_u9fb3C5bRs",
  authDomain: "housify-36e34.firebaseapp.com",
  projectId: "housify-36e34",
  storageBucket: "housify-36e34.appspot.com",
  messagingSenderId: "357020859315",
  appId: "1:357020859315:web:97aaac33427e0eb8e6a9c6",
});
export const db = getFirestore(app);

export const auth = app.auth();
export default app;
