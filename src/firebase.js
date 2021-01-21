import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyA7PoB5Huha9jYzCC72xfPfXpwiuhFCHGY",
    authDomain: "telemed-300210.firebaseapp.com",
    projectId: "telemed-300210",
    storageBucket: "telemed-300210.appspot.com",
    messagingSenderId: "574925208539",
    appId: "1:574925208539:web:7519ec26326e948de245fe"
})

export const auth = app.auth()
export default app
