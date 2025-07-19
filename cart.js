// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (e) => {
    const product = {
      id: e.target.dataset.id,
      name: e.target.dataset.name,
      price: parseFloat(e.target.dataset.price),
      quantity: 1
    };
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(product);
    }
    
    updateCartDisplay();
    localStorage.setItem('cart', JSON.stringify(cart));
  });
});

// Update cart display
function updateCartDisplay() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector('.cart-icon').textContent = `Cart (${cartCount})`;
}

// Initialize cart display on page load
updateCartDisplay();

// Place Order functionality
async function placeOrder() {
  try {
    const response = await fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString()
      }),
    });

    if (response.ok) {
      localStorage.removeItem('cart');
      cart = [];
      updateCartDisplay();
      alert('Order placed successfully!');
    }
  } catch (error) {
    console.error('Error placing order:', error);
  }
}

// Add event listener for checkout button (add a checkout button to your HTML)
document.querySelector('.checkout-btn')?.addEventListener('click', placeOrder);