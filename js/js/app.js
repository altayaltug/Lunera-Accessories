// js/app.js
import { PRODUCTS, CATEGORIES } from "./products.js";

const CART_KEY = "lunera_cart_v1";

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function formatPrice(v){ return "₺" + Number(v).toLocaleString("tr-TR"); }

function getParam(n){
  return new URLSearchParams(window.location.search).get(n);
}

function readCart(){
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}
function writeCart(c){
  localStorage.setItem(CART_KEY, JSON.stringify(c));
  updateCartCount();
}
function updateCartCount(){
  const c = readCart().reduce((a,b)=>a+b.qty,0);
  const el = $("#cartCount");
  if(el) el.textContent = c;
}

function addToCart(id){
  const cart = readCart();
  const it = cart.find(x=>x.id===id);
  if(it) it.qty++;
  else cart.push({id, qty:1});
  writeCart(cart);
}

function productCard(p){
  return `
  <article class="card">
    <a class="cardMedia" href="product.html?id=${p.id}">
      <img src="${p.image}" alt="${p.name}">
      ${p.badge?`<span class="badge">${p.badge}</span>`:""}
    </a>
    <div class="cardBody">
      <h3 class="cardTitle">${p.name}</h3>
      <div class="price">${formatPrice(p.price)}</div>
      <div class="cardActions">
        <a class="btn btnGhost" href="product.html?id=${p.id}">View</a>
        <button class="btn" data-add="${p.id}">Add to cart</button>
      </div>
    </div>
  </article>`;
}

/* HOME */
function initHome(){
  const catGrid = $("#categoryGrid");
  const feat = $("#featuredGrid");

  if(catGrid){
    catGrid.innerHTML = CATEGORIES.map(c=>`
      <a class="categoryCard" href="category.html?cat=${c.id}">
        <div class="categoryName">${c.name}</div>
        <div class="categoryTag">${c.tagline}</div>
        <div class="categoryCta">Shop ${c.name} →</div>
      </a>`).join("");
  }

  if(feat){
    feat.innerHTML = PRODUCTS.slice(0,6).map(productCard).join("");
    wireAdd();
  }
}

/* CATEGORY */
function initCategory(){
  const id = getParam("cat");
  const grid = $("#productsGrid");
  const list = PRODUCTS.filter(p=>p.category===id);
  if(grid){
    grid.innerHTML = list.map(productCard).join("");
    wireAdd();
  }
}

/* PRODUCT */
function initProduct(){
  const id = getParam("id");
  const p = PRODUCTS.find(x=>x.id===id);
  const w = $("#productWrap");
  if(!p||!w) return;

  w.innerHTML = `
  <div class="product">
    <div class="productMedia"><img src="${p.image}"></div>
    <div class="productInfo">
      <h1>${p.name}</h1>
      <div class="productPrice">${formatPrice(p.price)}</div>
      <p>${p.description}</p>
      <button class="btn" id="addBtn">Add to cart</button>
    </div>
  </div>`;
  $("#addBtn").onclick=()=>addToCart(p.id);
}

/* CART */
function initCart(){
  const area = $("#cartArea");
  if(!area) return;
  const cart = readCart();
  if(cart.length===0){
    area.innerHTML="<p>Your cart is empty.</p>";
    return;
  }
  area.innerHTML = cart.map(it=>{
    const p = PRODUCTS.find(x=>x.id===it.id);
    return `<div>${p.name} x ${it.qty} – ${formatPrice(p.price*it.qty)}</div>`;
  }).join("");
}

/* HELPERS */
function wireAdd(){
  $$("[data-add]").forEach(b=>{
    b.onclick=()=>addToCart(b.dataset.add);
  });
}

/* BOOT */
document.addEventListener("DOMContentLoaded", ()=>{
  updateCartCount();
  const page = document.body.dataset.page;
  if(page==="home") initHome();
  if(page==="category") initCategory();
  if(page==="product") initProduct();
  if(page==="cart") initCart();
});
