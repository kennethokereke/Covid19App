// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyA-azC-QQ1jbZ5jziEBsaAt-YvM-v0z8X0",
    authDomain: "covid19-database-31070.firebaseapp.com",
    projectId: "covid19-database-31070",
    storageBucket: "covid19-database-31070.appspot.com",
    messagingSenderId: "996358581626",
    appId: "1:996358581626:web:14b77d2b7d039566947ac3",
    measurementId: "G-DDBCP12JHJ"
  };

  let app;

  if( firebase.apps.length === 0 ) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
      app = firebase.app()
  }


  const db = app.firestore();

  const auth = firebase.auth();


  export {db, auth}
  


  