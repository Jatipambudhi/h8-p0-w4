function ubahHuruf(kata) {
  var str = ''
  var kamus = 'abcdefghijklmnopqrstuvwxyz'
  for(var i = 0; i < kata.length; i++){
    for(var j = 0; j < kamus.length; j++){
      if(kata[i] === kamus[j]){
        str += kamus[j+1]
      } else if(kamus[kamus.length - 1] === kata[i]) {
        str += kamus[0]
        break
      }
    }
  }
  return str
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu