/** Project Euler: Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number ? **/

function largestPrimeFactor(number) {
  let arrayPrimeFactors = [];
  let remainder = number;
  // Good luck!
 
    for (let i = 2; i <= remainder; i++) {
       if (remainder % i === 0) {
       arrayPrimeFactors.push(i)
         remainder = remainder / i;
         console.log(remainder)
       i = 2;
       }
    }
  console.log(arrayPrimeFactors[arrayPrimeFactors.length - 1])
  return arrayPrimeFactors[arrayPrimeFactors.length - 1]
}

largestPrimeFactor(13195);