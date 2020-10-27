// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8VY9Tj0I9IpIAYPyJxPduPFQPEA-sEQo",
    authDomain: "farmmartlk.firebaseapp.com",
    databaseURL: "https://farmmartlk.firebaseio.com",
    projectId: "farmmartlk",
    storageBucket: "farmmartlk.appspot.com",
    messagingSenderId: "253159788629",
    appId: "1:253159788629:web:d418b2d7987545d891c4dc",
    measurementId: "G-72Q66L28BM"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;