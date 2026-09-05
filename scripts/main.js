const productosDelivery = [
    { id: 1, nombre: "Hamburguesa Doble Queso", categoria: "Comida Rápida", precio: 6500, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 2, nombre: "Pizza Pepperoni", categoria: "Pizzas", precio: 12000, imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500" },
    { id: 3, nombre: "Sushi Roll Avocado", categoria: "Sushi", precio: 5500, imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500" },
    { id: 4, nombre: "Ensalada César", categoria: "Saludable", precio: 4500, imagen: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500" }
];

let carrito = JSON.parse(localStorage.getItem("carritoDelivery")) || [];

function renderizarProductos() {
    const contenedor = document.getElementById("product-container");
    if(!contenedor) return;
    contenedor.innerHTML = "";
    productosDelivery.forEach(producto => {
        contenedor.innerHTML += `
            <div class="col-md-3">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 150px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${producto.nombre}</h5>
                        <p class="text-muted small mb-2">${producto.categoria}</p>
                        <h6 class="text-success fw-bold mb-3">$${producto.precio}</h6>
                        <button class="btn btn-danger mt-auto" onclick="agregarAlCarrito(${producto.id})">Añadir</button>
                    </div>
                </div>
            </div>`;
    });
}

function agregarAlCarrito(id) {
    const prod = productosDelivery.find(p => p.id === id);
    carrito.push(prod);
    localStorage.setItem("carritoDelivery", JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert(`¡${prod.nombre} añadido al carrito!`);
}

function actualizarContadorCarrito() {
    const spans = document.querySelectorAll("#cart-count");
    spans.forEach(span => span.textContent = carrito.length);
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    actualizarContadorCarrito();
});