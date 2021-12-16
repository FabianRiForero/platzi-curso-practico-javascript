// Codigo del Cuadrado
function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// Codigo del Circulo
// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Aqui interactuamos con el HTML 
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById('inputTrianguloLado1');
    const inputLado2 = document.getElementById('inputTrianguloLado2');
    const inputBase = document.getElementById('inputTrianguloBase');
    const lado1 = inputLado1.value;
    const lado2 = inputLado2.value;
    const base = inputBase.value;

    if(lado1 != '' && lado2 != '' && base != ''){
        const perimetro = perimetroTriangulo(lado1,lado2,base);
        alert(perimetro);
    }else{
        alert('faltan rellenar campos');
    }
}
function calcularAreaTriangulo(){
    const inputBase = document.getElementById('inputTrianguloBase');
    const inputAltura = document.getElementById('inputTrianguloAltura');
    const base = inputBase.value;
    const altura = inputAltura.value;

    const perimetro = areaTriangulo(base,altura);
    alert(perimetro);
}

// Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById('inputCirculo');
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// Reto Matematicas
// Lo copie de la solucion, pero entiendo el proceso

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}