import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBB8Wyt-iMyMsPI5oKswVigeE-4CG70fNs",
    authDomain: "messenger-clone-68d99.firebaseapp.com",
    databaseURL: "https://messenger-clone-68d99.firebaseio.com",
    projectId: "messenger-clone-68d99",
    storageBucket: "messenger-clone-68d99.appspot.com",
    messagingSenderId: "996381479482",
    appId: "1:996381479482:web:1bea53a2c146dde6275b03",
    measurementId: "G-MTS0JWJPBZ"
});

const db = firebaseApp.firestore();

export default db;