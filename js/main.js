let container = document.querySelector(".container");
let openCart = document.querySelector(".open-cart");
let closeCart = document.querySelector(".close-cart");
let modalC = document.querySelector(".modal-container");

openCart.addEventListener("click", () => {
    modalC.classList.add("active");
})
closeCart.addEventListener('click', () => {
    modalC.classList.remove("active");
})

modalC.addEventListener("click", () => {
    if (e.target == modalC) {
        modalC.classList.remove("active");
    }
})
productData.forEach((element) => {
    container.innerHTML += `
    <div class="card">
    <div class="card-img">
        <img src="${element.img}" alt="">
    </div>
    <div class="card-body">
        <h4>${element.brand}</h4>
        <h3>${element.name}</h3>
    </div>
    <div class="card-footer">
        <div>
            <p>$${element.price}</p>
            <del>$${element.oldPrice}</del>
        </div>
        <div>
            <button>add to cart</button>
        </div>
    </div>
</div>
`;
});