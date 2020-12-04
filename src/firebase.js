import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIHJGzu2DJ9JDbeqjkAua95QvPOQutN8A",
  authDomain: "slack-clone-70b25.firebaseapp.com",
  databaseURL: "https://slack-clone-70b25-default-rtdb.firebaseio.com",
  projectId: "slack-clone-70b25",
  storageBucket: "slack-clone-70b25.appspot.com",
  messagingSenderId: "178493360005",
  appId: "1:178493360005:web:9fe0bb6379cd03a7bd66ec",
  measurementId: "G-4L825E3NEP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
