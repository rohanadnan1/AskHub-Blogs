import { app } from "./firebase.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
const database = getDatabase(app);
export const blogsInDb = ref(database, 'blogs');
export let postArr = []

export const createBlog = (id, title, description, username, createdAt) => {
    push(blogsInDb, {
        id,
        title,
        description,
        username,
        createdAt
    })
}

export const getBlogs = () => {
    onValue(blogsInDb, (snapshot) => {
        postArr = Object.values(snapshot.val())
    })
}

