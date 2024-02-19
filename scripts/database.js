import { app } from "./firebase.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
const database = getDatabase(app);
const blogsInDb = ref(database, 'blogs');

export const createBlog = (id, title, description, username) => {
    push(blogsInDb, {
        id,
        title,
        description,
        username
    })
    .then(() => {
        console.log('Blog created successfully')
    })
}

