let pegaInputQuantoFicou = 0;
let pegaInputQuantosDividir = 0


function resultado() {
    pegaInputQuantoFicou = parseFloat(document.getElementById('bill').value);
    pegaInputQuantosDividir = parseFloat(document.getElementById('people').value);

    console.log(pegaInputQuantoFicou);
    
    const resultadoCalcular = calcular(pegaInputQuantoFicou, pegaInputQuantosDividir);
    return alert(`A conta ficou, R$: ${resultadoCalcular} para cada um`);
}


function calcular(primeiroValor, segundoValor) {
   
    const dividir = primeiroValor / segundoValor;
    console.log(dividir);
    return dividir;
    
}