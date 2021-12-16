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