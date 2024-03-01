export function resultado() {
    let input = document.getElementsByTagName("input").item(0);
    let calcula = eval(input.value);
    input.value = calcula;
}
