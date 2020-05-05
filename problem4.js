/* Still need to add digit functionality and double check all if it is multiply all the numbers */

function checkPalidrome(cNum) {
  //console.log("checkNum is: " + cNum)
  //console.log("checkNum.length is: " + cNum.length)
     

  let checkPal = true
  for (let i = 0; i <= cNum.length; i++) {
    let checkLength = cNum.length - 1 - i;

    if (cNum[i] !== cNum[checkLength]) {
      //console.log("This is not true")
      checkPal = false;
    }
  }

  if (checkPal == true) {
   // console.log(cNum + " is a palindrome")
    return true
  } else {
  //  console.log(cNum + " is not a palindrome")
    return false
  }
}



function largestPalindromeProduct(n) { 
  //let maxNumber = Math.pow(10, n) - 1; 
  //let minPalindrome = Math.pow(10, (n*2)-1)
 // console.log(minPalindrome)
  let palindrome;
  let testNum = 9001
  let checkNum = []  
  checkNum = [...testNum + ''];  
  console.log(checkNum)
  let palArr = []
  let largestPalindromeProduct; 
  
 

  let maxNumber = Math.pow(10, n) - 1;
  let minPalindrome = Math.pow(10, (n * 2) - 1)
  console.log("maxNumber: " + maxNumber)
  console.log("minPalindrom: " + minPalindrome)

  

  for (let firstNum = 1; firstNum <= maxNumber; firstNum++) {

    for (let secondNum = 1; secondNum <= maxNumber; secondNum++) { 
      let Num = firstNum * secondNum;
      let chkNum = [...Num + ''];  
      //console.log("chkNum is: " + chkNum)
      if (checkPalidrome(chkNum)) {
       // console.log("return true this is a palindrome: " + chkNum)
        let revNum = [];
       // console.log(typeof chkNum)
        revNum = JSON.stringify(chkNum);
        //console.log(revNum)
        revNum = revNum.replace(/\D/g, "");
        revNum = parseInt(revNum);       
        //console.log(typeof revNum)
        console.log("reverted number is: " + revNum)
        palArr.push(revNum)
      }  
    }
  }
  palArr.sort((a, b) => a - b);
    console.log(palArr[palArr.length - 1])
  largestPalindromeProduct = palArr[palArr.length - 1]
  // Good luck!
  return largestPalindromeProduct;
}

largestPalindromeProduct(3)