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
