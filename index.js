// select all add to cart buttons
let buttons = document.querySelectorAll(".product-card button, .product-card3 button");

buttons.forEach((button) => {

    button.addEventListener("click", function () {

        // parent product card select
        let card = this.parentElement;

        // product details get
        let img = card.querySelector("img").src;
        let name = card.querySelector("h3").innerText;
        let price = card.querySelector("p").innerText;

        // create product object
        let product = {
            img: img,
            name: name,
            price: price
        };

        // get existing cart data
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // add new product
        cart.push(product);

        // store back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart");
    });

});
