import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBC7ivbo9fl0oCKU7zntfwhodrMHCw-8jc",
    authDomain: "reading-list-22784.firebaseapp.com",
    projectId: "reading-list-22784",
    storageBucket: "reading-list-22784.appspot.com",
    messagingSenderId: "853488986986",
    appId: "1:853488986986:web:fe3b2a2623922e00d0d313"
  };

  // init firebase

initializeApp(firebaseConfig)

  // init firestore


const db = getFirestore()

  // init auth

  const auth = getAuth()

export { db, auth }