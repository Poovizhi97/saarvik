import firebase, { Component} from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDNsaeAtd4N9S41xoTiuqfycjHldZbW3Ww",
    authDomain: "saarvik-bc5e6.firebaseapp.com",
    databaseURL: "https://saarvik-bc5e6.firebaseio.com",
    projectId: "saarvik-bc5e6",
    storageBucket: "saarvik-bc5e6.appspot.com",
    messagingSenderId: "1762438783",
    appId: "1:1762438783:web:f8ed0fe71234a15e72994a",
    measurementId: "G-R2MH4FKZY5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;