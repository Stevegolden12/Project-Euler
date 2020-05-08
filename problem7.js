function nthPrime(n) {
  // Good luck!

  let primes = [2]

  let num = 3;
  let isPrime = true;

  while (primes.length < n) {
    let max = Math.ceil(Math.sqrt(num))

    for (let i = 0; primes[i] <= max; i++) {
      if (num % primes[i] == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(num);
    }
      isPrime = true;

    num += 2;
}


  return primes[primes.length - 1];
}

console.log(nthPrime(10001));



/*

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

function loopNextPrime(n, number) {
  var newNumber;
  for (let i = 7; i <= n; i++) {
    //find next primeNumber
   
    console.log("Beginning nthPrimeNumber: " + newNumber)
    if (i == 7) {
      console.log("Is this getting hit multiple times")
      newNumber = number;
      console.log(newNumber)
    }
    console.log(i)
    console.log(n)
    console.log("Before the function: " + newNumber)
    console.log("what is should be: " + nextPrime(newNumber))
    newNumber = nextPrime(newNumber)
    console.log("After the function: " + newNumber)

  }
  return newNumber
}

function nthPrime(n) {
  // Good luck!
  var nthPrimeNumber;
  let newNumber;
  let primeArray = [2, 3, 5, 7, 11, 13]
 
  if (n <= 6) {
    nthPrimeNumber = primeArray[n - 1]
  }
  console.log("checking")
  loopNextPrime(n, 14)

  console.log("After the loop: " + nthPrimeNumber)
  return nthPrimeNumber;
}

console.log(loopNextPrime(10, 14))

//console.log(nthPrime(10));

*/