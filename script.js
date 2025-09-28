let cart = [];


function addToCart(product, pricePerKg, kilos) {
kilos = parseFloat(kilos);
let total = pricePerKg * kilos;
cart.push({product, kilos, total});
displayCart();
}


function removeFromCart(index) {
cart.splice(index, 1); // elimina el producto según su posición en el array
displayCart();
}


function displayCart() {
let cartDiv = document.getElementById('cart');
if(cart.length === 0){
cartDiv.innerHTML = '<h3>Tu carrito está vacío</h3>';
return;
}


let html = '<ul>';
let totalFinal = 0;
cart.forEach((item, index) => {
html += `<li>${item.product} - ${item.kilos} kg - $${item.total}
<button class="delete" onclick="removeFromCart(${index})">🗑️</button></li>`;
totalFinal += item.total;
});
html += '</ul>';
html += `<h3>Total: $${totalFinal}</h3>`;
cartDiv.innerHTML = html;
}