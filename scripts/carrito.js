document.addEventListener("DOMContentLoaded", () => {
    const contenedorCarrito = document.getElementById('carrito-container');
    const totalPrecioElem = document.getElementById('total-precio');
    
    // Recuperar carrito de localStorage
    let carrito = JSON.parse(localStorage.getItem('carritoDelivery')) || [];
    
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    let total = 0;
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        total += producto.precio;
        
        const div = document.createElement('div');
        div.style.borderBottom = '1px solid #ccc';
        div.style.padding = '10px 0';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        
        div.innerHTML = `
            <span>${producto.nombre}</span>
            <strong>$${producto.precio}</strong>
            <button onclick="eliminarDelCarrito(${index})" style="background: red; color: white; border: none; padding: 5px; cursor: pointer;">X</button>
        `;
        contenedorCarrito.appendChild(div);
    });

    totalPrecioElem.textContent = total;
});

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carritoDelivery')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carritoDelivery', JSON.stringify(carrito));
    location.reload(); // Recarga para actualizar la vista
}