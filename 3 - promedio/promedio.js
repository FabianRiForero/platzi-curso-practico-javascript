const lista1 = [100,200,300,500];

function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(function(valorAcomulado = 0,nuevoElemento){
        return valorAcomulado + nuevoElemento;
    });
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function onClickPromedio(){
    const input_numero1 = document.getElementById('numero1');
    const valor_numero1 = !isNaN(input_numero1.value) ? parseInt(input_numero1.value) : 0;
    const input_numero2 = document.getElementById('numero2');
    const valor_numero2 = !isNaN(input_numero2.value) ? parseInt(input_numero2.value) : 0;
    const input_numero3 = document.getElementById('numero3');
    const valor_numero3 = !isNaN(input_numero3.value) ? parseInt(input_numero3.value) : 0;
    const input_numero4 = document.getElementById('numero4');
    const valor_numero4 = !isNaN(input_numero4.value) ? parseInt(input_numero4.value) : 0;

    const promedio = calcularMediaAritmetica([valor_numero1,valor_numero2,valor_numero3,valor_numero4]);

    const im_resultado = document.getElementById('resultado');
    im_resultado.innerText = `El promedio es: ${promedio}`;
}