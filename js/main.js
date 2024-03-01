// Escrever os números no input ---------OK
// Apagar numeros ------ OK
// Fazer as operações ------ ok
// Entregar o resultado ------ ok

import { resultado } from "./resultado.js";
import { escreveNumerosNoInput } from "./escreveNumerosNoInput.js";

function calculadora(valor) {
    if (valor === "=") {
        resultado();
    } else {
        escreveNumerosNoInput(valor);
    }
}
export { calculadora };
