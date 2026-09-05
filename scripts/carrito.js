document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('carrito-container');
    const totalElem = document.getElementById('total-precio');
    let carrito = JSON.parse(localStorage.getItem('carritoDelivery')) || [];
    
    if (carrito.length === 0) {
        contenedor.innerHTML = '<p class="text-center text-muted">Tu carrito está vacío.</p>';
        return;
    }
    let total = 0;
    contenedor.innerHTML = '';
    carrito.forEach((prod, index) => {
        total += prod.precio;
        contenedor.innerHTML += `
            <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                <span class="fw-bold">${prod.nombre}</span>
                <span>$${prod.precio}</span>
                <button class="btn btn-sm btn-outline-danger" onclick="eliminar(${index})">X</button>
            </div>`;
    });
    totalElem.textContent = total;
});

function eliminar(index) {
    let carrito = JSON.parse(localStorage.getItem('carritoDelivery')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carritoDelivery', JSON.stringify(carrito));
    location.reload();
}