import firebase from "firebase/app";
import firebaseConfig from "../firebaseConfig";


export const initializeFirebase = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

