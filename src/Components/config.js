import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDP1SOuAuSXA_NJzEhPTZjCAdrBXiIrQHU",
  authDomain: "byhtkpro-71d71.firebaseapp.com",
  databaseURL: "https://byhtkpro-71d71.firebaseio.com",
  projectId: "byhtkpro-71d71",
  storageBucket: "byhtkpro-71d71.appspot.com",
  messagingSenderId: "580180598115",
  appId: "1:580180598115:web:10813536b562534783c756",
  measurementId: "G-NMZVRR8HM8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export { firebase, provider };
