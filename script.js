document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    imageContainers.forEach(container => {
        container.addEventListener("click", function () {
            const item = this.querySelector('img').alt;
            const priceContainer = document.getElementById('priceListContainer');
            const cartButton = document.createElement('button');
            
            // Add the item and its price to the cart
            const itemPrice = getItemPrice(item);
            const cartItem = `${item} - ${itemPrice}`;
            priceContainer.innerHTML += `<p>${cartItem}</p>`;
            
            // Add cart button
            cartButton.textContent = 'Add to Cart';
            cartButton.className = 'cart-button';
            container.appendChild(cartButton);

            // Remove the button after a delay
            setTimeout(() => {
                cartButton.remove();
            }, 2000);
        });
    });

    // Function to get the price of the item
    function getItemPrice(item) {
        switch (item) {
            case 'Legend cricket Bat':
                return '$500 - $3000';
            case 'Balls':
                return '$20 - $200';
            case 'Cricket Accessories':
                return '$50 - $2000';
            case 'Clothes':
                return '$50 - $200';
            case 'Cricket Shoes':
                return '$100 - $650';
            default:
                return 'Price not available';
        }
    }
});
