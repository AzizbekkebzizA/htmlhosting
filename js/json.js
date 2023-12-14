let container = document.querySelector(".container");
let first = document.querySelector(".first");
let second = document.querySelector(".second");

// first.addEventListener("click", ()=>{
//     fetch("https://reqres.in/api/users?page=1")
//     .then(res => res.json())
//     .then(result => {
//         container.innerHTML = "";
//         result.data.forEach(item => {
//             container.innerHTML += `
//             <div class="card">
//                 <div class="card-img">
//                     <img src="${item.avatar}" alt="">
//                 </div>
//                 <div class="card-body">
//                     <h3>${item.first_name} ${item.last_name}</h3>
//                     <h4>${item.email}</h4>
//                 </div>
//             </div>`
//         });
//     })
// })
// second.addEventListener("click", ()=>{
//     fetch("https://reqres.in/api/users?page=2")
//     .then(res => res.json())
//     .then(result => {
//         container.innerHTML = "";
//         result.data.forEach(item => {
//             container.innerHTML += `
//             <div class="card">
//                 <div class="card-img">
//                     <img src="${item.avatar}" alt="">
//                 </div>
//                 <div class="card-body">
//                     <h3>${item.first_name} ${item.last_name}</h3>
//                     <h4>${item.email}</h4>
//                 </div>
//             </div>`
//         });
//     })
// })

function displayUsers(page) {
    fetch(`https://reqres.in/api/users?page=${page}`)
        .then(res => res.json())
        .then(result => {
            container.innerHTML = "";
            result.data.forEach(item => {
                container.innerHTML +=`
                <div class="card">
                    <div class="card-img">
                        <img src="${item.avatar}" alt="">
                    </div>
                    <div class="card-body">
                        <h3>${item.first_name} ${item.last_name}</h3>
                        <h4>${item.email}</h4>
                    </div>
                </div>`
            });  
        })
}

displayUsers(1);

first.addEventListener("click", () => {
    displayUsers(1);
});

second.addEventListener("click", () => {
    displayUsers(2);
});