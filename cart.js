// get cart data
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// select main container
let main = document.querySelector(".main");

// function to display cart
function displayCart() {

    // empty main
    main.innerHTML = "";

    // cart empty check
    if (cart.length === 0) {

        main.innerHTML = `
        <div class="cart-box">
            <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png">
            <h2>Your cart is empty!</h2>
            <p>Add items to it now.</p>
            <button><a href="./index.html">Shop now</a></button>
        </div>
        `;

        return;
    }

    // create container
    let container = document.createElement("div");
    container.classList.add("cart-container");

    // loop products
    cart.forEach((product, index) => {

        let card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
    <img src="${product.img}" width="150">
    <h3>${product.name}</h3>
    <p>${product.price}</p>

    <button onclick="buyNow(${index})" class="buy-btn">
        Buy Now
    </button>

    <button onclick="removeItem(${index})" class="remove-btn">
        Remove
    </button>
`;

        container.appendChild(card);

    });

    main.appendChild(container);
}

// remove function
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function buyNow(index){

    let product = cart[index];

    alert(product.name + " order placed successfully!");

    // optional: remove from cart after buy
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// call function
displayCart();
