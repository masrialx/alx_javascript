// Check if Session Storage is supported
if (typeof(Storage) === "undefined" || typeof(sessionStorage) === "undefined") {
  alert("Sorry, your browser does not support Session storage. Try again with a better one.");
} else {
  // Define available items
  const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

  // Create a function to add an item to the cart in Session Storage
  function addItemToCart(item) {
      sessionStorage.setItem(item, "true");
      displayCart();
  }

  // Create a function to build the store and display available items
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

  // Create a function to display the cart contents
  function displayCart() {
      const cartItems = Object.keys(sessionStorage);
      if (cartItems.length > 0) {
          const message = `You previously had ${cartItems.length} items in your cart.`;
          const p = document.createElement("p");
          p.textContent = message;
          document.body.appendChild(p);
      }
  }

  // Initialize the application by creating the store and displaying the cart
  createStore();
  displayCart();
}
