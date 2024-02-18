import { app } from "./firebase.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
const database = getDatabase(app);

export const createBlog = (id, title, description) => {
    set(ref(database, 'post/' + id), {
        title,
        description
    })
    .catch((error) => {
        console.log(error)
    });
}

