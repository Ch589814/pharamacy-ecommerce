// Load cart from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - RWF${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalElement.textContent = total;
}

// Add item to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} added to cart!`);
    loadCart();
}

// Handle checkout
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    alert(`Thank you, ${name}! Your order has been placed.\nAddress: ${address}\nPhone: ${phone}`);
    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]));
    loadCart();
});

// Load cart on page load
window.onload = loadCart;