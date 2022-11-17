// Escrever os números no input ---------OK
// Apagar numeros ------ OK
// Fazer as operações ------ ok
// Entregar o resultado ------ ok

var input = document.getElementsByTagName('input').item(0);

function calculadora(valor) {
    if (valor === '=') {
        resultado();
    } else {
        escreveNumerosNoInput(valor);
    }
}

function escreveNumerosNoInput(valor) {
    if (valor === 'C') {
        input.value = ''; //SE O VALOR FOR 'C' O INPUT SERÁ APAGADO, CASO O CONTRÁRIO O NÚMERO SERÁ ESCRITO NORMALMENTE!
    } else {
        input.value += valor;
    }
}

function resultado() {
    var calcula = eval(input.value)
    input.value = calcula;
}
