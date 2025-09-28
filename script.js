let cart = [];

function addToCart(product, price, quantity) {
  quantity = parseFloat(quantity);
  if (quantity <= 0) return;

  cart.push({ product, price, quantity });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  let cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<h3>Tu carrito está vacío</h3>";
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    cartDiv.innerHTML += `
      <div>
        ${item.quantity} kg de ${item.product} - $${subtotal.toLocaleString()}
        <button class="delete" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    `;
  });

  cartDiv.innerHTML += `<h3>Total: $${total.toLocaleString()}</h3>`;
}
function renderCart() {
  let cartDiv = document.getElementById("cart");
  let buyButton = document.getElementById("buyButton");
  cartDiv.innerHTML = "";

  if (cart.length === 0) {
    cartDiv.innerHTML = "<h3>Tu carrito está vacío</h3>";
    buyButton.style.display = "none"; // Ocultar botón
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    let subtotal = item.price * item.quantity;
    total += subtotal;

    cartDiv.innerHTML += `
      <div>
        ${item.quantity} kg de ${item.product} - $${subtotal.toLocaleString()}
        <button class="delete" onclick="removeFromCart(${index})">🗑️</button>
      </div>
    `;
  });

  cartDiv.innerHTML += `<h3>Total: $${total.toLocaleString()}</h3>`;
  buyButton.style.display = "inline-block"; // Mostrar botón
}

function buyNow() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`¡Gracias por tu compra en EcoFruver! 🛒\nTotal: $${total.toLocaleString()}`);
  cart = []; // Vaciar carrito
  renderCart();
}