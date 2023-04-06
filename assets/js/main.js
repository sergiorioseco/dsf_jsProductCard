const PRICE = 800000;
const btn = document.querySelector('#btn');
const total = document.querySelector('#total');
const cantidad = document.querySelector('#cantidad');
const colordot = document.querySelector('#colordot');


btn.addEventListener('click',() => {
    const inputCantidad = document.querySelector('#inputCantidad');
    const inputColor = document.querySelector('#inputColor');
    console.log("cantidad: " + inputCantidad.value);
    console.log("color: " + inputColor.value);
    total.innerHTML = Number(inputCantidad.value) * PRICE;
    cantidad.innerHTML = inputCantidad.value;
    colordot.style.backgroundColor = inputColor.value;
});