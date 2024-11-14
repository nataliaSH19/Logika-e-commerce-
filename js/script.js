async function getProducts() {
  // Виконуємо запит до файлу "store_db.json" та очікуємо на відповідь
  let response = await fetch("store_db.json");
  // Очікуємо на отримання та розпакування JSON-даних з відповіді
  let products = await response.json();

  // Повертаємо отримані продукти
  return products;
}

// Генеруємо HTML-код для карточки товару
function getCardHTML(product) {
  return `
        <div class="card" style="width: 18rem;">
        <img src="images/${product.image}">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text"> ${product.price}</p>
            <a href="#" class="btn btn-primary">Buy</a>
        </div>
        </div>
         
          
      `;
}

getProducts().then(function (products) {
  let productsList = document.querySelector(".products-list");
  if (productsList) {
    products.forEach(function (product) {
      // Відображаємо товари на сторінці
      productsList.innerHTML += getCardHTML(product);
    });
  }
});
