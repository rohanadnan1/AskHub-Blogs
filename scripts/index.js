import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

export const appSettings = {
    databaseUrl: 'https://blog-app-48bc9-default-rtdb.asia-southeast1.firebasedatabase.app/',
    projectId: 'blog-app-48bc'
}

export const app = initializeApp(appSettings);
export const database = getDatabase(app);
export const blogRef = ref(database, 'blogs');


