
const products = [
    { id: 1, name: "Producto 1", price: 10.00, stock: 20, img: "img/producto 1.webp" },
    { id: 2, name: "Producto 2", price: 20.00, stock: 15, img: "img/producto 1.webp" },
    { id: 3, name: "Producto 3", price: 30.00, stock: 10, img: "img/producto 1.webp" },
    { id: 4, name: "Producto 4", price: 40.00, stock: 5, img: "img/producto 1.webp" },
    { id: 5, name: "Producto 5", price: 50.00, stock: 25, img: "img/producto 1.webp" },
    { id: 6, name: "Producto 6", price: 60.00, stock: 30, img: "img/producto 1.webp" },
    { id: 7, name: "Producto 7", price: 70.00, stock: 35, img: "img/producto 1.webp" },
    { id: 8, name: "Producto 8", price: 80.00, stock: 40, img: "img/producto 1.webp" },
    { id: 9, name: "Producto 9", price: 90.00, stock: 45, img: "img/producto 1.webp" },
    { id: 10, name: "Producto 10", price: 100.00, stock: 50, img: "img/producto 1.webp" },
    { id: 11, name: "Producto 11", price: 120.00, stock: 38, img: "img/producto 1.webp" },
    { id: 11, name: "Producto 12", price: 150.00, stock: 10, img: "img/producto 1.webp" },
];

const categoryMap = {
    elect1: "Componentes",
    elect2: "Dispositivos",
    elect3: "Accesorios",
    herr1: "Manuales",
    herr2: "Eléctricas",
    herr3: "Accesorios",
    mat1: "Construcción",
    mat2: "Industriales",
    mat3: "Otros",
    seg1: "Ropa",
    seg2: "Equipos",
    seg3: "Accesorios"
};

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const categoryText = categoryMap[category] || 'Desconocido';

document.getElementById('category-breadcrumb').innerText = "Categorías";
document.getElementById('subcategory-breadcrumb').innerText = categoryText;

const productList = document.getElementById('product-list');

products.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 col-sm-12 product-card';
    col.innerHTML = `
        <div class="card" data-id="${product.id}">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">Precio: $${product.price.toFixed(2)}</p>
                <p class="card-text">Stock: ${product.stock}</p>
                <a href="#" class="btn btn-primary carrito-button">Carrito</a>
            </div>
        </div>
    `;
    productList.appendChild(col);
});

productList.addEventListener('click', function(event) {
    const card = event.target.closest('.card');
    if (!card) return;
    const productId = card.getAttribute('data-id');
    if (event.target.classList.contains('carrito-button')) {
        alert(`Producto ${productId} agregado al carrito`);
    } else {
        window.location.href = `producto.html?id=${productId}`;
    }
});