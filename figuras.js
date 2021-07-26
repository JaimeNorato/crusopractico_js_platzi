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

function alturaIsosceles(lado1, lado2, base){
    if(lado2!=lado1) return false;

    return Math.sqrt(Math.pow(lado1,2)-Math.pow(base/2,2))
}
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

function getValueInput(nameInput){
    return document.getElementById(nameInput).value;
}

function calcularPerimetroCuadrado(){
    const perimetro = perimetroCuadrado(getValueInput("InputCuadrado"));
    alert("El perímetro del cuadrado es "+perimetro);
}
function calcularAreaCuadrado(){
    const perimetro = areaCuadrado(getValueInput("InputCuadrado"));
    alert("El área del cuadrado es "+perimetro);
}


function calcularPerimetroTriangulo(){
    const lado1=getValueInput("InputTrianguloLado1");
    const lado2=getValueInput("InputTrianguloLado2");
    const base=getValueInput("InputTrianguloBase");
    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert("El perímetro del triángulo es "+perimetro);
}
function calcularAreaTriangulo(){
    const lado1=getValueInput("InputTrianguloLado1");
    const lado2=getValueInput("InputTrianguloLado2");
    const base=getValueInput("InputTrianguloBase");
    const altura=getValueInput("InputTrianguloAltura");
    const perimetro = areaTriangulo(base,altura);
    alert("El área del triángulo es "+perimetro);
}


function calcularPerimetroCircuo(){
    const perimetro = perimetroCirculo(getValueInput("InputCirculo"));
    alert("El perímetro del circulo es "+perimetro);
}
function calcularAreaCirculo(){
    const perimetro = areaCirculo(getValueInput("InputCirculo"));
    alert("El área del circulo es "+perimetro);
}

