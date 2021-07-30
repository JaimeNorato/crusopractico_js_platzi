function getSalaries(lista){
    const salarios = lista.map(function(persona){
        return persona.salary
    });
    
    return salarios.sort(function(salaryA, SalaryB){
        return salaryA - SalaryB;
    });
}


function esPar(numero){
    return (numero % 2) === 0;
}

function medianaSalarios(lista){
    const mitadLista = parseInt(lista.length / 2);     
    if(!esPar(lista.length)) return lista[mitadLista];
    return calcularMediaAritmetica([lista[mitadLista - 1], lista[mitadLista]]);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    return sumaLista / lista.length
}

//mediana del top 10%
function medianaTop10(lista=[]){
    const spliceStart = (lista.length * 90) / 100;
    const spliceEnd = lista.length - spliceStart;

    return medianaSalarios(lista.splice(spliceStart, spliceEnd));
}

console.log("Calculando Salarios..."); 
const salaries = getSalaries(colombia);
const medianaGeneral = medianaSalarios(salaries);
const top10 = medianaTop10(salaries);
console.log({
    medianaGeneral,
    top10
});