if (typeof(Storage) === "undefined" || typeof(sessionStorage) === "undefined") {
  alert("Sorry, your browser does not support Session storage. Try again with a better one.");
} else {
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

  function addItemToCart(item) {
      sessionStorage.setItem(item, "true");
      displayCart();
  }

  function createStore() {
      const ul = document.createElement("ul");
      for (const item of availableItems) {
          const li = document.createElement("li");
          li.textContent = item;
          li.addEventListener("click", function () {
              addItemToCart(item);
          });
          ul.appendChild(li);
      }
      document.body.appendChild(ul);
  }

  function displayCart() {
      const cartItems = Object.keys(sessionStorage);
      if (cartItems.length > 0) {
          const message = `You previously had ${cartItems.length} items in your cart.`;
          const p = document.createElement("p");
          p.textContent = message;
          document.body.appendChild(p);
      }
  }

  createStore();
  displayCart();
}
