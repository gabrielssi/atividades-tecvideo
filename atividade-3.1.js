// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

const CalculePagamento = (preco, desconto, quantidadeParcelamento) => {

  let precoAPrazo, precoAVista;

  precoAVista = ((desconto / 100) * preco);

  precoAVista = preco - precoAVista;

  precoAPrazo = preco / quantidadeParcelamento;


  console.log(`Preço: R$${preco.toFixed(2)}`)
  console.log(`À Vista: R$${precoAVista.toFixed(2)}`)
  console.log(`Ou ${quantidadeParcelamento}x de: R$${precoAPrazo.toFixed(2)}`)
}

CalculePagamento(60, 10, 3)