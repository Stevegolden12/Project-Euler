function sumOfSquares(n) {
  let sumOfSquaresTotal = 0;

  for (let i = 1; i <= n; i++) {
    sumOfSquaresTotal = sumOfSquaresTotal + Math.pow(i, 2)
  }
  return sumOfSquaresTotal;
}

function squareOfSum(n) {
  let squareOfSumTotal = 0;

  for (let i = 1; i <= n; i++) {
    squareOfSumTotal = squareOfSumTotal + i;
  }

  squareofSumTotal = Math.pow(squareOfSumTotal, 2);
  return squareOfSumTotal;
}

function sumSquareDifference(n) {
  // Good luck!
  return squareOfSum(n) - sumOfSquares(n);
}

//console.log(sumOfSquares(10))
//console.log(squareOfSum(10))
console.log(sumSquareDifference(10));