// importing functions
import { createUser, signInWithGoogle, signInUser, signOutUser, onLoadAuth, userObj } from "./authentication.js"
import { createBlog, blogsInDb } from "./database.js"
import { onValue, } from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js'




// document.addEventListener('DOMContentLoaded', function () {
//     console.log('fdf', document.readyState)
//     document.addEventListener('readystatechange', function () {
//         console.log('dzcfsffbs', document.readyState)
//     })
// })



// if(document.readyState === 'loading' || document.readyState === 'interactive') {
//     console.log('loading')
//     document.addEventListener('DOMContentLoaded', function (e) {
//         e.preventDefault()
//         initializeApp()
//     })
// }


// this onLoadAuth function will be called when the page loads
// this is an immediately invoked function we are using async await to wait for the user to be loaded

document.addEventListener('DOMContentLoaded', async function () {
    (async () => {
        await onLoadAuth();
    })();

    // Login Page Scripts


    const googleBTN = document.getElementById('google-login')
    const loginEMAIL = document.getElementById('login-email')
    const loginPASSWORD = document.getElementById('login-password')
    const loginBTN = document.getElementById('login-btn')


    googleBTN && googleBTN.addEventListener('click', (e) => {
        e.preventDefault()
        signInWithGoogle()
    })


    loginBTN && loginBTN.addEventListener('click', (e) => {
        e.preventDefault()
        if (loginEMAIL.value && loginPASSWORD.value) {
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
    const blogContainer = document.getElementById('blog-container')
    const blogTitle = document.getElementById('blog-title')
    const blogDescription = document.getElementById('blog-description')
    const blogOwner = document.getElementById('post-owner')
    const blogDate = document.getElementById('date')


    let postArr = []

    onValue(blogsInDb, (snapshot) => {
        postArr = Object.values(snapshot.val())
        postArr.map((post) => (
            blogContainer.innerHTML += `
            <div
            class="w-2/3 h-[200px] flex justify-center gap-8 p-5 bg-slate-200 text-gray-800 rounded-lg"
          >
            <div class="content w-[70%] flex justify-between flex-col">
              <h1 id="post-title" class="font-semibold text-lg">
                ${post.title}
              </h1>
              <p id="post-description" class="text-justify text-sm">
                ${post.description}
              </p>
              <div class="flex justify-between items-center">
                <p id="post-owner"><i class="ri-user-fill mr-2"></i>${post.username}</p>
                <p id="date">${post.createdAt}</p>
              </div>
            </div>
            <div class="image w-[30%] h-full bg-white rounded-lg"></div>
          </div>
            `
        ))
    })


    homeSignOutBTN && homeSignOutBTN.addEventListener('click', (e) => {
        e.preventDefault()
        signOutUser()
    })


    // Create Post Page Scripts

    const createSignOutBTN = document.getElementById('create-logout-btn')
    const cancelBTN = document.getElementById('cancel')
    const title = document.getElementById('title')
    const description = document.getElementById('description')
    const saveBTN = document.getElementById('save')
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    createSignOutBTN && createSignOutBTN.addEventListener('click', (e) => {
        e.preventDefault()
        signOutUser()
    })

    cancelBTN && cancelBTN.addEventListener('click', (e) => {
        e.preventDefault()
        window.location.href = "index.html"
        title.value = ""
        description.value = ""
    })



    saveBTN && saveBTN.addEventListener('click', async (e) => {
        e.preventDefault()
        if (title.value && description.value) {
            createBlog(Date.now(), title.value, description.value, userObj.displayName, `${day}/${month + 1}/${year}`)
            title.value = ""
            description.value = ""
            window.location.href = "index.html"
        }
    })





})