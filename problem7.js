function isPrime(n) {
  checkNumbers = [2, 3, 5, 7, 11, 13]
  isPrimeNumber = true;  
  for (let i = 0; i < 6; i++) {
    //console.log(n);
    //console.log(checkNumbers[i])
    if (n%checkNumbers[i] == 0) {
      isPrimeNumber = false;
    }
  }
  return isPrimeNumber
}

function nextPrime(number) {
  primeArray = [2, 3, 5, 7, 11, 13]
  let checkNumber = number
  let isNextPrime = false;
  
  while (isNextPrime == false) {
    if (isPrime(checkNumber) == true) {
      isNextPrime = true;
    }
    checkNumber++;
  }
  return checkNumber - 1;
}

function nthPrime(n) {
  // Good luck!
  let nthPrimeNumber;
  let primeArray = [2, 3, 5, 7, 11, 13]
 
  if (n <= 6) {
    nthPrimeNumber = primeArray[n - 1]
  }
  console.log("checking")
  
  for (let i = 7; i <= n; i++) {
    //find next primeNumber
    if (i == 7) {
      nthPrimeNumber = 14;
    }
    console.log(i)
    console.log(n)  
    console.log(nextPrime(nthPrimeNumber))
    let newNumber = nextPrime(nthPrimeNumber)
    console.log(newNumber)
    
  }
  console.log("After the loop: " + nthPrimeNumber)
  return nthPrimeNumber;
}

console.log(nthPrime(10));