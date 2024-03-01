import { calculadora } from "./calculadora.js";

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
        calculadora(button.dataset.value);
    });
});
