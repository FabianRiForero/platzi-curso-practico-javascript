const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

function calcularModa(lista){
    const listaCount = {};

    lista.map(function(elemento){
        if(listaCount[elemento]){
            listaCount[elemento] += 1;
        }else{
            listaCount[elemento] = 1;
        }
    });

    const listaArray = Object.entries(listaCount).sort(function(a,b){
        return a[1] - b[1];
    });

    const moda = listaArray[listaArray.length - 1];
    return moda;
}

console.log(calcularModa([0,0,0,0]));

function onClickModal(){
    const campo1 = document.getElementById('numero1');
    const numero1 = parseInt(campo1.value);
    const campo2 = document.getElementById('numero2');
    const numero2 = parseInt(campo2.value);
    const campo3 = document.getElementById('numero3');
    const numero3 = parseInt(campo3.value);
    const campo4 = document.getElementById('numero4');
    const numero4 = parseInt(campo4.value);

    const moda = calcularModa([numero1,numero2,numero3,numero4]);

    const im_resultado = document.getElementById('resultado');
    im_resultado.innerText = `La moda es: ${moda[0]}`;
}