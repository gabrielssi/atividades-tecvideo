function miniMaxSum(arr) {
  let maxSum = 0;
  let minSum = 0;
  minSum = minSum - arr[arr.length - 1];
  maxSum = maxSum - arr[0];

  for (let index = 0; index < arr.length; index++) {
    maxSum += arr[index];
    minSum += arr[index];
  }

  return [minSum, maxSum];

}

console.log(miniMaxSum([1, 2, 3, 4, 5]));