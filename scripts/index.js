// importing functions
import { createUser } from "./authentication.js"
import { signInWithGoogle } from "./authentication.js"


// Login Page Scripts


const googleBTN = document.getElementById('google-login')
googleBTN && googleBTN.addEventListener('click', (e) => {
    e.preventDefault()
    signInWithGoogle()
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


// Create Post Page Scripts
