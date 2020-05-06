function checkAllNum(multiple, checkNumber) {
  let isMultiple = true;

  for (let i = 1; i <= multiple; i++) {
    if (checkNumber % i != 0) {
      isMultiple = false;
    }
  }
  return isMultiple;
}

function smallestMult(n) {
  // Good luck!
  let smallMultiple = 0;
  let stop = false;
  let i = n

  do {
    i = i + 1;
  } while (!checkAllNum(n, i))

  smallMultiple = i;
  return smallMultiple;
}

console.log(smallestMult(20));
