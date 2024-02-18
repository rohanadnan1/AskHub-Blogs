import { app } from "./firebase.js";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const currentPageName = window.location.pathname.split("/").pop();

// this is the function to sign in with google

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if (currentPageName === "login.html") {
            window.location.href = "index.html"
        }

    } catch (error) {
        console.log(error)
    }
}

// this is the function to create a new user

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // if user is created we redirect them to the login page

            if (user) {
                window.location.href = 'login.html'
            }

            // if !user this means that user is already registered in that case we consider it as a login

            if (!user) {
                window.location.href = "index.html"
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

// this is the function to sign in a user

export const signInUser = (email, password) => {

    // email and password value will be passed in the index.js file

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                window.location.href = "index.html"
            }

            if (!user) {
                window.location.href = "register.html"
            }
        })
        .catch((error) => {
            console.log(error)
        });
}

// this function will be called when the page loads to check if the user is logged in or not if not we redirect them to the login page else we let them stay on the page

export const onLoadAuth = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // If the user is authenticated and on the login page, redirect them to the index page
            if (currentPageName === "login.html") {
                window.location.href = 'index.html';
            }
        } else {
            // If the user is not authenticated and not already on the login page, redirect them to the login page
            if (currentPageName !== "login.html") {
                window.location.href = "login.html";
            }
        }
    });
}

// this function is called when the user clicks on the sign out button

export const signOutUser = () => {
    signOut(auth)
        .then(() => {
            window.location.href = "login.html"
        })
        .catch((error) => {
            console.log(error)
        });
}