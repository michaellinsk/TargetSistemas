//EXERCICIO 5
function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// Exemplo de uso:
const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
