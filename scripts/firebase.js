import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgC6MAwIUak4Wv2No3hP6gzZzaY7p1RrU",
    authDomain: "blog-app-48bc9.firebaseapp.com",
    databaseURL: "https://blog-app-48bc9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "blog-app-48bc9",
    storageBucket: "blog-app-48bc9.appspot.com",
    messagingSenderId: "1039110393703",
    appId: "1:1039110393703:web:7a725014593dc6beb5e9c2",
    measurementId: "G-42DTHTS4KL"
};

export const app = initializeApp(firebaseConfig);