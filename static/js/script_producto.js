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

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

const product = products.find(p => p.id === productId);

if (product) {
    document.getElementById('product-breadcrumb').innerText = product.name;

    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
        <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.name}" style="max-height: 400px; object-fit: cover;">
            <div class="card-body">
                <h2 class="card-title">${product.name}</h2>
                <p class="card-text">Precio: $${product.price.toFixed(2)}</p>
                <p class="card-text">Stock: ${product.stock}</p>
                <a href="#" class="btn btn-primary add-to-cart">Agregar al Carrito</a>
                <a href="#" class="btn btn-success buy-now">Comprar</a>
            </div>
        </div>
    `;
} else {
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `<p>Producto no encontrado.</p>`;
}

document.getElementById('product-detail').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        alert('Producto agregado al carrito');
    } else if (event.target.classList.contains('buy-now')) {
        alert('Compra realizada');
    }
});