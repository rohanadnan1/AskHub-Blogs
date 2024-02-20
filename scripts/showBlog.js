const main = document.getElementById('main')


export const showBlog = (post, id) => {
    if (post.id === id) {
        main.innerHTML = `
        <div
class="w-2/3 h-[auto] flex justify-center items-center flex-col gap-8 p-5 bg-slate-200 text-gray-800 rounded-lg">
<div class="content w-[70%] flex flex-col">
<h1 class="font-extrabold text-3xl ">${post.title}</h1>
<p class="text-justify text-sm mt-5">${post.description}</p>
<div class="image w-[100%] h-[250px] bg-white rounded-lg my-5"></div>
<div class="flex justify-between items-center">
<p><i class="ri-user-fill mr-2"></i>${post.username}</p>
<p>${post.createdAt}</p>
</div>

<hr class="h-px bg-gray-200 border-0 dark:bg-gray-400">


<!-- comments -->
<div class="mt-10">
<h1 class="font-bold text-xl mb-2">Add your Thought</h1>
<textarea name="" id="" rows="5" class="w-full bg-white mb-2 rounded-md"></textarea>
<button class="btn btn-outline btn-primary">Submit</button>
</div>


<!-- prev comments -->
<div class="mt-10">
<h1 class="font-bold text-xl mb-2">Previous Comments</h1>
<div class="flex mb-2">
    <div class="w-20 h-20 rounded-full bg-white"></div>
    <div class="flex flex-col gap-0">
        <p class="font-semibold text-md">Umar Haqqui</p>
        <p class="font-normal text-sm">1 min ago</p>
    </div>
</div>
<div class="my-2">
    <p>Lorem ipsum dolor sit amet</p>
</div>
<div>
    <i class="ri-thumb-up-fill mr-2"></i>
</div>
</div>
</div>
</div>
        `
    }
}