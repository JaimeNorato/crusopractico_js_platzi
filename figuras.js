//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("los Lados del cuadrado miden: "+ladoCuadrado+" cm");

function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("El perímetro del cuadrado es: "+perimetroCuadrado+" cm");

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El area del cuadrado es: "+areaCuadrado+" cm2");
console.groupEnd();

//Codigo del triangulo
console.group("Triángulos")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.3;

//console.log(
//        "los Lados del triángulo miden: "
//        + ladoTriangulo1 +" cm,"
//        + ladoTriangulo2 +" cm,"
//        + baseTriangulo +" cm"
//    );

//console.log("la altura del triángulo es: "+alturaTriangulo+" cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};
//console.log("El perímetro del triángulo es: "+perimetroTriangulo+" cm");

function areaTriangulo(base, altura){
    return (base*altura)/2
};
//console.log("El area del triángulo es: "+areaTriangulo+" cm2");

console.groupEnd();

//Codigo del círculo
console.group("Círculo")
//const radioCirculo = 4;
//console.log("El radio del círculo es: "+radioCirculo+" cm")

function diametroCirculo(radio){
    return radio*2;
}
//console.log("El diametro del círculo es: "+diametroCirculo+" cm")

//const pi = Math.PI
//console.log("Pi es: "+pi)

function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}
//console.log("El perímetro del circulo es: "+perimetroCirculo+" cm")

function areaCirculo(radio){
    return (radio * radio)*Math.PI
}
//console.log("El area del circulo es: "+areaCirculo+" cm")

console.groupEnd()

//aqui se interactua con el html
function calcularPerimetroCuadrado(){}
function calcularAreaCuadrado(){}
