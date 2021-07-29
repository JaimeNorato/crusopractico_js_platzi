
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    return sumaLista / lista.length
}

function calcularMediana(lista=[]){
    const mitadLista = parseInt(lista.length / 2);

    lista.sort(function(a,b){ return a - b; })
     
    if(!esPar(lista.length)){
        return lista[mitadLista]
    }

    return calcularMediaAritmetica([lista[mitadLista - 1], lista[mitadLista]]);
}

function esPar(numero){
    if((numero % 2) == 0) return true;
    return false;
}