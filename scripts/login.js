import { appSettings } from './index.js';
import { blogRef, database, app } from './index.js';
import { push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';


const loginButton = document.getElementById('login-button');
const email = document.getElementById('email');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('blogref', blogRef);
    console.log('Login button clicked');
    console.log(`email: ${email.value} is pushed to the database `);
    console.log(database)
});