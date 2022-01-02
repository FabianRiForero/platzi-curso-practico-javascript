function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(function(valorAcomulado = 0,nuevoElemento){
        return valorAcomulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const lista1 = [100,200,500,400000000];

function esPar(numero){
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    const listaOrganizada = lista.sort(function(a,b){
        return a - b;
    });

    let mediana;
    if(esPar(lista.length)){
        const elemento1 = listaOrganizada[mitadLista - 1];
        const elemento2 = listaOrganizada[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    
        mediana = promedioElemento1y2;
    }else{
        mediana = listaOrganizada[mitadLista];
    }
    return mediana
}

function onClickMediana(){
    const campoNumero1 = document.getElementById('numero1');
    const numero1 = parseInt(campoNumero1.value);
    const campoNumero2 = document.getElementById('numero2');
    const numero2 = parseInt(campoNumero2.value);
    const campoNumero3 = document.getElementById('numero3');
    const numero3 = parseInt(campoNumero3.value);
    const campoNumero4 = document.getElementById('numero4');
    const numero4 = parseInt(campoNumero4.value);

    const mediana = calcularMediana([numero1,numero2,numero3, numero4]);

    const im_resultado = document.getElementById('resultado');
    im_resultado.innerText = mediana;
}