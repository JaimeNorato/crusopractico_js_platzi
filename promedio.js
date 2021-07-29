
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

function calcularModa(lista = []){
    let moda;
    let mayor=0;
    const listaCount = {}
    lista.map(function(elemnt){
        if(listaCount[elemnt]) listaCount[elemnt] += 1;
        else listaCount[elemnt] = 1;
    });

    for(const index in listaCount){
        if(listaCount[index] > mayor){
            moda = index;
            mayor = listaCount[index];
        }
    }

    return moda;
}