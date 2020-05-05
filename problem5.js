function smallestMult(n) {
  // Good luck!
  let allNumberMult = false;


  while (allNumberMult == false) {
    let stopAndGo = true
    for (let i = n; stopAndGo == true; i++) {
      for (let j = 2; j <= n; j++) {
        if (i % j == 0) { }
        else {
          stopAndGo = false;
        }
      }
      
    }
  }

  return true;
}

smallestMult(20);