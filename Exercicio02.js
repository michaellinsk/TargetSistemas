//EXERCICIO 2
function verificarFibonacci(numero) {
    let a = 0;
    let b = 1;

    // Verificar se o número informado é 0 ou 1
    if (numero === 0 || numero === 1) {
        return true;
    }

    // Gerando números de Fibonacci até ultrapassar o número informado
    let proximo = a + b;
    while (proximo <= numero) {
        // Verificar se o número informado está na sequência
        if (proximo === numero) {
            return true;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    // Se o número informado não for encontrado na sequência
    return false;
}

// Exemplo de uso:
const nInformado = 21; // Altere este valor para testar outros números
if (verificarFibonacci(nInformado)) {
    console.log(`${nInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${nInformado} não pertence à sequência de Fibonacci.`);
}
