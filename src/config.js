import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// const firebaseConfig = firebase.initializeApp({
//   // apiKey: " process.env.REACT_APP_FIREBASE_API_KEY",
//   // authDomain: " process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
//   // databaseURL: "process.env.REACT_APP_FIREBASE_DATABASE_URL",
//   // projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
//   // storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
//   // messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
//   // appId: " process.env.REACT_APP_FIREBASE_APP_ID",
//   apiKey: "AIzaSyDtwL0i2jJOlZlrypT0o9KyU6YzzCbIdgA",
//   authDomain: "expense-tracker-a89e5.firebaseapp.com",
//   projectId: "expense-tracker-a89e5",
//   storageBucket: "expense-tracker-a89e5.appspot.com",
//   messagingSenderId: "880774547182",
//   appId: "1:880774547182:web:47542590afdfba348c55ff",
//   measurementId: "G-8P92Y4EFL0",
// });

// export const auth = app.auth();
// export default app;

const firebaseconfig = {
  apiKey: "AIzaSyDtwL0i2jJOlZlrypT0o9KyU6YzzCbIdgA",
  authDomain: "expense-tracker-a89e5.firebaseapp.com",
  projectId: "expense-tracker-a89e5",
  storageBucket: "expense-tracker-a89e5.appspot.com",
  messagingSenderId: "880774547182",
  appId: "1:880774547182:web:47542590afdfba348c55ff",
  measurementId: "G-8P92Y4EFL0",
};

export default firebase.initializeApp(firebaseconfig);
