/*               Project Euler: Problem 2: Even Fibonacci Numbers
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.
 * 
 * 
 * 
 */

function fiboEvenSum(n) {
  // You can do it!
  let fiboArray = [1, 2]
  let evenFiboArray = [2]
  if (n === 1) {
    return 0
  } else if (n === 2) {
    return 2
  }
  console.log(fiboArray)

  for (let i = 2; i < n; i++) {     
    let nextFiboNumber = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2]
    //console.log('lastFiboNumber' + nextFiboNumber)
    fiboArray.push(nextFiboNumber)
    //console.log(fiboArray)
    if (nextFiboNumber % 2 === 0) {
    //  console.log("Should be even: " + nextFiboNumber)
      evenFiboArray.push(nextFiboNumber)
    }
    
  }

 // console.log(evenFiboArray)
 // console.log(evenFiboArray.reduce((total, num) => total + num))
  return evenFiboArray.reduce((total, num)=>total + num);
}

let answer = fiboEvenSum(10);

//console.log(answer)
