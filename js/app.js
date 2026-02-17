import { PRODUCTS } from "./products.js";

function getCategory() {
  const params = new URLSearchParams(window.location.search);
  return params.get("cat");
}

function renderProducts(list) {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "<p>No products found.</p>";
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="productCard">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <strong>${p.price} ${p.currency}</strong>
    </div>
  `).join("");
}

const category = getCategory();

if (category) {
  const filtered = PRODUCTS.filter(p => p.category === category);
  renderProducts(filtered);
}
