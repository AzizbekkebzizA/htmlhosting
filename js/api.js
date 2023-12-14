let tBody = document.querySelector(".tbody");
let tGody = document.querySelector(".tgody");
async function getData(){
    let url = "https://jsonplaceholder.typicode.com/users"

    let response = await fetch(url);
    let data = await response.json()


data.forEach(item => {
    tBody.innerHTML +=`
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.username}</td>
    <td>${item.email}</td>
    <td>Street:${item.address.street}<br>
            Suite:${item.address.suite}<br>
            City:${item.address.city}</td>
            <td>${item.phone}</td>
            <td>${item.website}</td>
            <td>${item.company.name}</td>
    `
});  
}
async function getBata(){
    let url = "https://jsonplaceholder.typicode.com/todos"

    let response = await fetch(url);
    let data = await response.json()

    data.forEach(item => {
        tGody.innerHTML +=`
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.completed}</td>
        `
    });
}
getData()

getBata()