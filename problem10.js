function testGetPrimes(n) {
  let gPrimes = [2];
  let sumOfPrimes = 2;
  // Good luck!
  let num = 3;
  let isPrime = true;

  while (num < n) {
    //let max = Math.ceil(Math.sqrt(num))

    for (let i = 0; gPrimes[i] <= n; i++) {
      if (num % gPrimes[i] == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      gPrimes.push(num);
      sumOfPrimes = sumOfPrimes + num
    }
    isPrime = true;


    num++;
  }
  return sumOfPrimes;
}

function getPrimes(n) {
  let gPrimes = [2];
  // Good luck!
  let num = 3;
  let isPrime = true;

  while (num < n) {
    //let max = Math.ceil(Math.sqrt(num))
 
    for (let i = 0; gPrimes[i] <= n; i++) {
      if (num % gPrimes[i] == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      gPrimes.push(num);
    }
    isPrime = true;


    num++;
  }
  return gPrimes;
}

function addPrimes(pArray) {
  let productPrimes;
  
  productPrimes = pArray.reduce((a, b) => a + b)
  return productPrimes;
}

function primeSummation(n) {
  // Good luck!
  let primes = []
  let sumOfPrimes = 0;

  primes = getPrimes(n)
  console.log(primes)
  sumOfPrimes = addPrimes(primes);

  return sumOfPrimes;
}

 //console.log(primeSummation(2001));
console.log(testGetPrimes(140759))


//Get the primes up to the specific number
//Add the primes up