let cart = [];

function addToCart(id, name, price) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      quantity: 1
    });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty">Your cart is empty.</p>';
  }

  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const div = document.createElement("div");

    div.className = "cart-item";

    div.innerHTML = `
      <div class="cart-info">
        <h3>${item.name}</h3>
        <p>₹${item.price} × ${item.quantity}</p>
      </div>

      <div class="quantity">
        <button onclick="decreaseQuantity(${item.id})">−</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity(${item.id})">+</button>
      </div>

      <strong>₹${item.price * item.quantity}</strong>

      <button class="remove" onclick="removeItem(${item.id})">
        Remove
      </button>
    `;

    cartItems.appendChild(div);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total.toLocaleString("en-IN");
}

function increaseQuantity(id) {
  const item = cart.find(item => item.id === id);

  if (item) {
    item.quantity++;
  }

  updateCart();
}

function decreaseQuantity(id) {
  const item = cart.find(item => item.id === id);

  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(item => item.id !== id);
    }
  }

  updateCart();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);

  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("🎉 Order placed successfully!");

  cart = [];
  updateCart();
}
