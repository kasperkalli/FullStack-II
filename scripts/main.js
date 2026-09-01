// 1. Arreglo de productos (Requisito de la evaluación)
const productosDelivery = [
    { id: 1, nombre: "Hamburguesa Doble Queso", categoria: "Comida Rápida", precio: 6500, imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80" },
    { id: 2, nombre: "Pizza Pepperoni Familiar", categoria: "Pizzas", precio: 12000, imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80" },
    { id: 3, nombre: "Sushi Roll Avocado (10 cortes)", categoria: "Sushi", precio: 5500, imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80" },
    { id: 4, nombre: "Ensalada César con Pollo", categoria: "Saludable", precio: 4500, imagen: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80" }
];

// 2. Carrito de compras inicializado desde LocalStorage (si existe)
let carrito = JSON.parse(localStorage.getItem("carritoDelivery")) || [];

// 3. Función para mostrar productos en el HTML
function renderizarProductos() {
    const contenedor = document.getElementById("product-container");
    
    // Limpiamos el contenedor por si acaso
    contenedor.innerHTML = "";

    // Recorremos el arreglo y creamos el HTML
    productosDelivery.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card-producto");

        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p style="color: #747d8c; margin-bottom: 10px;">${producto.categoria}</p>
            <p class="precio">$${producto.precio}</p>
            <button class="btn-add" onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
        `;

        contenedor.appendChild(tarjeta);
    });
}

// 4. Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Buscamos el producto en nuestro arreglo base
    const productoSeleccionado = productosDelivery.find(p => p.id === idProducto);
    
    // Lo agregamos al arreglo del carrito
    carrito.push(productoSeleccionado);
    
    // Guardamos en LocalStorage (Requisito de la evaluación)
    localStorage.setItem("carritoDelivery", JSON.stringify(carrito));
    
    // Actualizamos el contador visual
    actualizarContadorCarrito();
    
    alert(`¡${productoSeleccionado.nombre} añadido al carrito!`);
}

// 5. Función para actualizar el número del carrito en el menú superior
function actualizarContadorCarrito() {
    const spanContador = document.getElementById("cart-count");
    if(spanContador) {
        spanContador.textContent = carrito.length;
    }
}

// 6. Al cargar la página, ejecutamos las funciones principales
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    actualizarContadorCarrito();
});