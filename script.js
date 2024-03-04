const allPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    const post = data.posts;
    // console.log(post);
    displayData(post);
}

const displayData = (everyPosts) => {
    const discussSection = document.getElementById('discuss-card');
    // console.log(everyPosts);
    everyPosts.forEach(everyPost => {
        console.log(everyPost);
        const discussCard = document.createElement('div');
        discussCard.classList = `left-side lg:w-[772px] lg:h-[220px] bg-[#F3F3F5] rounded-xl grid grid-cols-1 lg:flex gap-6 p-8 lg:p-6`;
        discussCard.innerHTML = `
        <div class="flex">
        <img class="w-[50px] h-[50px] rounded-xl" src="${everyPost.image}" alt="">
        <div class="bg-[#10B981] w-3 h-3 mr-10 rounded-full"></div>
        </div>
    <div class="space-y-3">
        <div class="flex font-medium gap-5">
            <p>#${everyPost.category}</p>
            <p>Author : ${everyPost.author.name}</p>
        </div>
        <div class="space-y-2">
            <p class="font-bold text-xl">
                ${everyPost.title}
            </p>
            <p class="text-gray-400">
                ${everyPost.description}
            </p>
        </div>
        <hr>
        <div class="flex gap-6">
            <div class="flex justify-center gap-2 items-center">
                <img class="w-5 h-4" src="icon/download (8).png" alt="">
                <p>${everyPost.comment_count}</p>
            </div>
            <div class="flex justify-center gap-2 items-center">
                <img class="w-5 h-4" src="icon/download (7).png" alt="">
                <p>${everyPost.view_count}</p>
            </div>
            <div class="flex justify-between gap-2 items-center">
                <img class="w-5 h-4" src="icon/download (9).png" alt="">
                <p>${everyPost.posted_time} min</p>
                <div>
                    <img onclick='message("${everyPost.title}", "${everyPost.view_count}")' id="message" src="icon/download (10).png" alt="">
                </div>
            </div>
        </div>
    </div>
        `
        discussSection.appendChild(discussCard);
    });

}


let count = 0;
const message = (title,view_count) => {
    console.log('clicked');
    const container = document.getElementById('add-text');
    if (container) {
        let markCount = count;
        count += 1;
        document.getElementById('mark-as-read-count').innerText = count;
    }

    const newContainer = document.createElement('div');
    newContainer.classList = `
    flex justify-between bg-white rounded-lg mx-5 p-3 items-center
    `;
    newContainer.innerHTML = `
    <p class="text-base font-medium">${title}</p>  
    <div class="flex justify-between gap-2">
        <img class="w-6 h-6 " src="icon/download (7).png" alt="">
        <p>${view_count}</p>
    </div>
    `
    container.appendChild(newContainer);
}


allPosts();


































// const searchBtn = async (searchText) => {
//     // console.log('I am clicked');
//     const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/postshttps://openapi.programming-hero.com/api/retro-forum/posts?category=${category.name}`);
//     const category = await response.json();
//     const post = category.posts;
//     const inputField = document.getElementById('input-text');
//     const search = inputField.value;
//     console.log(search, post);
// }
// // seachBtn(search);

const latestPosts = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await response.json();
    const post = data;
    console.log(post);
}

// const displayData2 = () => {
//     const discussSection = document.getElementById('discuss-card');
//     // console.log(everyPosts);
//     .forEach() => {
//         console.log(everyPost);
// }

// const displayData2 = async () => {
//     const 
// }

latestPosts();



