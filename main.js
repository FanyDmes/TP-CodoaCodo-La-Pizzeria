// CONTADORES //


const color_fondo = document.getElementById('color_fondo')
const numero = document.getElementById('numero')
let cantidad = 0

let tiempo = setInterval(() => {
    cantidad += 50
    color_fondo.style.height = `${cantidad}%`
    numero.textContent = cantidad
    if (cantidad === 12000) {
        clearInterval(tiempo)
    }
}, 33);

const fondo_color = document.getElementById('fondo_color')
const number = document.getElementById('number')
let cant = 0

let time = setInterval(() => {
    cant += 10
    fondo_color.style.height = `${cant}%`
    number.textContent = cant
    if (cant === 1000) {
        clearInterval(time)
    }
}, 80);




















