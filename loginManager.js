import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}


export const createUserWithEmailandPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const newUserInfo = userCredential.user;
            newUserInfo.error = '';
            newUserInfo.success = "Successfully Registered!";
            updateUserName(name)
            return newUserInfo;

        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = '';
            return newUserInfo;
        });
};

export const handleGoogleSignIn = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(gProvider)
        .then(res => {
            const user = res.user;
            const { displayName, photoURL, email } = user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photoURL: photoURL,
                success: 'Signed In Successfully'
            }
            setUserToken();
            return signedInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
};


export const sendVerificationEmail = () => {
    return firebase.auth().currentUser.sendEmailVerification()
        .then(res => {
            message = "Please Check your mail, for verification!";
            return message;
        });
};


export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var userInfo = userCredential.user;
            const newUserInfo = { ...userInfo };
            newUserInfo.error = '';
            newUserInfo.success = "Log In Successful!";
            return newUserInfo;
        })
        .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = {};
            newUserInfo.error = errorMessage;
            newUserInfo.success = '';
            return newUserInfo;
        });
};

export const handleLogOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photoURL: '',
                success: 'Logged Out'
            }
            return signedOutUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
};

const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    }).then(() => {
        console.log("Username updated");
    }).catch(error => {
        console.log(error);
    });
};