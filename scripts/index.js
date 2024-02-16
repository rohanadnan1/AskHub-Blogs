// importing functions
import { createUser, signInWithGoogle, signInUser, signOutUser, onLoadAuth } from "./authentication.js"


// this onLoadAuth function will be called when the page loads

onLoadAuth()

// Login Page Scripts


const googleBTN = document.getElementById('google-login')
const loginEMAIL = document.getElementById('login-email')
const loginPASSWORD = document.getElementById('login-password')
const loginBTN = document.getElementById('login-btn')

googleBTN && googleBTN.addEventListener('click', (e) => {
    e.preventDefault()
    signInWithGoogle()
})

loginBTN && loginBTN.addEventListener('click', (e)=>{
    e.preventDefault()
    if(loginEMAIL.value && loginPASSWORD.value){
        signInUser(loginEMAIL.value, loginPASSWORD.value)
    }
})


// Register Page Scripts




const registerEMAIL = document.getElementById('register-email')
const registerUSERNAME = document.getElementById('register-username')
const registerPASSWORD = document.getElementById('register-password')
const registerBTN = document.getElementById('register-button')

registerBTN && registerBTN.addEventListener('click', (e) => {
    e.preventDefault()
    if (registerEMAIL.value && registerUSERNAME.value && registerPASSWORD.value) {
        console.log(registerEMAIL.value, registerUSERNAME.value, registerPASSWORD.value)
        createUser(registerEMAIL.value, registerPASSWORD.value)
    }
})

// Home Page Scripts

const homeSignOutBTN = document.getElementById('home-logout-btn')
homeSignOutBTN && homeSignOutBTN.addEventListener('click', (e) => {
    e.preventDefault()
    signOutUser()
})


// Create Post Page Scripts

const createSignOutBTN = document.getElementById('create-logout-btn')
createSignOutBTN && createSignOutBTN.addEventListener('click', (e) => {
    e.preventDefault()
    signOutUser()
})