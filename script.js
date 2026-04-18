const products = [
  {
    name: "عباية عملية بتصميم عصري",
    price: "149 ر.س",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=640&q=80"
  },
  {
    name: "طقم رجالي كاجوال",
    price: "179 ر.س",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=640&q=80"
  },
  {
    name: "حقيبة يومية أنيقة",
    price: "89 ر.س",
    image:
      "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=640&q=80"
  },
  {
    name: "طقم منزلي قطن ناعم",
    price: "129 ر.س",
    image:
      "https://images.unsplash.com/photo-1616627455208-4c0f5ad9fd3f?auto=format&fit=crop&w=640&q=80"
  }
];

const grid = document.querySelector("#productsGrid");
const year = document.querySelector("#year");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <img loading="lazy" src="${product.image}" alt="${product.name}" />
    <div class="product-body">
      <h3>${product.name}</h3>
      <div class="product-meta">
        <span class="price">${product.price}</span>
        <a href="#" class="btn btn-ghost">أضف للسلة</a>
      </div>
    </div>
  `;

  grid.append(card);
});

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("show");
});
