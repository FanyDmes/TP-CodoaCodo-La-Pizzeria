for(let elemento of data) {
cad=`<div class="card_pizzas">
<div class="inner">
    <img src=${elemento.imagen} class="img_pizzas"
        alt="Especial I - Salsa, muzza, rúcula, jamón crudo, tomates deshidratados, parmesano">
</div>
<div class="card_body">
    <h1 class="">${elemento.titulo}</h1>
    <p class="card_desciption">${elemento.ingredientes}</p>
    <h3 class="">${elemento.precio}</h3>
    <a href="#" id="btnmenu">${elemento.boton}</a>
</div>
</div>`
document.write(cad)

}