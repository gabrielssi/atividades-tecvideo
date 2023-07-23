// EXERCÍCIO 1
// Faça as 4 operações básica com base nos números 2 e 4: 
// Soma: 2 + 4 = x
// Subtração : 2 - 4 = x
// Divisão: 2 / 4 = x
// Multiplicação: 2 * 4 = x
// ---------------------------------------------------------------

const Somar = (primeiroNumero, segundoNumero) => {
  let resultado = primeiroNumero + segundoNumero;
  console.log(`resultado da soma: ${resultado}`);
};

const Subtracao = (primeiroNumero, segundoNumero) => {
  let resultado = primeiroNumero - segundoNumero;
  console.log(`resultado da subtração: ${resultado}`);
};

const Divisao = (primeiroNumero, segundoNumero) => {
  let resultado = primeiroNumero / segundoNumero;
  console.log(`resultado da divisão: ${resultado}`);
};

const Multiplicacao = (primeiroNumero, segundoNumero) => {
  let resultado = primeiroNumero * segundoNumero;
  console.log(`resultado da multiplicação: ${resultado}`);
};

let primeiroNumero = 2;
let segundoNumero = 4;
Somar(primeiroNumero, segundoNumero);
Subtracao(primeiroNumero, segundoNumero);
Divisao(primeiroNumero, segundoNumero);
Multiplicacao(primeiroNumero, segundoNumero);