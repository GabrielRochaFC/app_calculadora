function escreveNumerosNoInput(valor) {
    let input = document.getElementsByTagName("input").item(0);
    if (valor === "C") {
        input.value = ""; //SE O VALOR FOR 'C' O INPUT SERÁ APAGADO, CASO O CONTRÁRIO O NÚMERO SERÁ ESCRITO NORMALMENTE!
    } else {
        input.value += valor;
    }
}
export { escreveNumerosNoInput };
