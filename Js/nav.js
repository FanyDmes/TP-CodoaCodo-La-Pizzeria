//BOTON NAV//

addEventListener('DOMContentLoaded', () => {
    const btn_barra = document.querySelector('.btn_barra')
    if (btn_barra) {
        btn_barra.addEventListener('click',() => {
            const barra_items = document.querySelector('.barra_items')
            barra_items.classList.toggle('show')
        })
    }
})

