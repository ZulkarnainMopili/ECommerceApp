// app.js

document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productsContainer = document.getElementById('products-container');
    const cartCount = document.getElementById('cart-count');

    // Function to render products
    const renderProducts = () => {
        const products = [
            { id: 1, name: 'Product 1', price: 9.99, image: 'product1.jpg' },
            { id: 2, name: 'Product 2', price: 19.99, image: 'product2.jpg' },
            { id: 3, name: 'Product 3', price: 29.99, image: 'product3.jpg' },
            // Add more products as needed
        ];

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('col-md-4');
            productCard.innerHTML = `
                <div class="card mb-4 shadow-sm">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <p class="card-text">${product.name}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary view-product" data-id="${product.id}">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary add-to-cart" data-id="${product.id}">Add to Cart</button>
                            </div>
                            <small class="text-muted">$${product.price}</small>
                        </div>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    };

    // Function to add item to cart
    const addToCart = (event) => {
        const productId = event.target.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    // Function to update cart count
    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    };

    // Initial render
    renderProducts();
    updateCartCount();
});

