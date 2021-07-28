function codigoDescuento(codigo){
    const listDescuentos={
        'balon':12,
        'piña':20,
        'descuento21':21,
        'regalo':10,
        'promo':50,
        'ganador':40,
        'ganadora':60,
    };
    if(listDescuentos[codigo]) return listDescuentos[codigo]
    return 0;
}
function calcularPorcentagePrecioConDescuento(descuento){
    return 100 - descuento;
}

function calcularPrecioConDescuento(precio,descuento){
    return (precio * calcularPorcentagePrecioConDescuento(descuento))/100
}

function imprimirResultado(precio){
    const resultPrice=document.getElementById("ResultPrice");
    resultPrice.innerText = "El precio con descuento es $"+precio;
}

function btnPriceDiscount(){
    const priceValue=document.getElementById("InputPrice").value;
    const discountValue=document.getElementById("InputDiscount").value;
    const discount=codigoDescuento(discountValue);
    const precioConDescuento =calcularPrecioConDescuento(priceValue,discount);
    imprimirResultado(precioConDescuento);
}