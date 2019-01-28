function checkAB(num) {
  var cekA = ''
  var cekB = ''
  for(var i=0; i<num.length; i++){
    if(num[i] === 'a'){
      cekA = i
    }
    else if(num[i]==='b'){
      cekB = i
    }
  }
  return (cekA-cekB === 4 || cekB-cekA === 4)
}
      


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false