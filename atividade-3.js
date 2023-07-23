// EXERCÍCIO 3
// =========================
// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO:
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00
// =========================

const OpcaoPagamento = (precoProduto) => {

  const descontoProduto = 10;
  let descontoAVista = (descontoProduto / 100) * precoProduto;
  const pagamentoAVista = precoProduto - descontoAVista;
  const quantidadeParcelamento = 3;
  let pagamentoAPrazo = (precoProduto / quantidadeParcelamento);

  console.log(`Preço: R$${precoProduto.toFixed(2)}.`)
  console.log(`À Vista: R$${pagamentoAVista.toFixed(2)}.`)
  console.log(`Ou ${quantidadeParcelamento}x de: R$${pagamentoAPrazo.toFixed(2)}.`)

}

OpcaoPagamento(60);