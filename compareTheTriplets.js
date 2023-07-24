function compareTriplets(a, b) {

  let alicePontuacao = 0;
  let bobPontuacao = 0;

  for (let index = 0; index < 3; index++) {
    if (a[index] > b[index]) {
      alicePontuacao++;
    } else if (a[index] < b[index]) {
      bobPontuacao++;
    }
  }
  return [alicePontuacao, bobPontuacao];
}
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));