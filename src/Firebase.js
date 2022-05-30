// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBoc7U4GVuf7ql42f_XgHfambno2Cm36qo",
    authDomain: "marketgame-app.firebaseapp.com",
    projectId: "marketgame-app",
    storageBucket: "marketgame-app.appspot.com",
    messagingSenderId: "970915528346",
    appId: "1:970915528346:web:43958659a8b1cfb2d96923",
}

export const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
