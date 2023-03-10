const products = [
  { code: "A", name: "Air Mineral", price: 3000 },
  { code: "B", name: "Pillow", price: 12000 },
  { code: "C", name: "Pop Mie", price: 7000 },
  { code: "D", name: "Pocari Sweat", price: 8000 },
];

function showProducts() {
  let productList = "Products:\n";
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    productList += `${product.code} - ${product.name} (Rp. ${product.price})\n`;
  }
  window.alert(productList);
}

function addToCart(code, qty, cart) {
  let product = products.find((p) => p.code === code.toUpperCase());
  if (!product) {
    window.alert("Invalid product code!");
    return;
  }
  cart.push({ product, qty });
  window.alert(`${product.name} added to cart (${qty} pcs).`);
}

function showCart(cart) {
  let cartList = "Cart:\n";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let subtotal = item.product.price * item.qty;
    total += subtotal;
    cartList += `${item.product.name} (${item.qty} pcs) - $${subtotal}\n`;
  }
  cartList += `Total: $${total}\n`;
  window.alert(cartList);
}

function pay(cart) {
  let amount = window.prompt("Enter amount:");
  if (!amount) {
    window.alert("Payment cancelled.");
    return;
  }
  let total = cart.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  let change = amount - total;

  if (change < 0) {
    window.alert("Not enough payment!");
    return;
  }
  window.alert(`Payment success! Change: Rp. ${change}`);
  cart = [];
}

function runApp() {
  const cart = [];
  showProducts();
  while (true) {
    let input = window.prompt(
      "Enter product code and quantity (separated by space), or type 'pay' to checkout:"
    );
    if (!input) {
      break;
    }
    if (input.toLowerCase() === "pay") {
      pay(cart);
      break;
    }
    let [code, qty] = input.split(" ");
    addToCart(code, qty, cart);
    showCart(cart);
  }
  window.alert("Thank you for shopping!");
}

const buttonElement = document.getElementById("run");
buttonElement.addEventListener("click", () => runApp());
