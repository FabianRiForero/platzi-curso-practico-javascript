// Helpers
function esPar(numero){
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcomulado = 0,nuevoElemento){
        return valorAcomulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        
        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana General
const salariosCol = colombia.map(function(persona){
    return persona.salario;
});

const salariosColSorted = salariosCol.sort(function(salarioA,SalarioB){
    return salarioA - SalarioB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana Top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({medianaGeneralCol,medianaTop10Col});

function onClickMedianaGeneral(){
    const cantidad = 15;
    let salarios = [];
    for(let i = 0; i < cantidad; i++){
        const campo = document.getElementById(`salario${i + 1}`);
        const valor = campo.value;
        salarios.push(valor);
    }
    const salariosPais = salarios.sort(function(salarioA,salarioB){
        return salarioA - salarioB;
    });
    console.log(salariosPais);
    
    const medianaGeneral = medianaSalarios(salariosPais);

    const im_resultado = document.getElementById('resultado');
    im_resultado.innerText = `La mediana general es: ${medianaGeneral}`;
}