function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var arr = []
  for(var i = 0; i < arrPenumpang.length; i++){
    var obj = {}
    obj.penumpang = arrPenumpang[i][0]
    obj.naikDari = arrPenumpang[i][1]
    obj.tujuan = arrPenumpang[i][2]
    obj.bayar = 0
    for(j = 0; j < rute.length; j++){
      if(arrPenumpang[i][2] === rute[j]){
        var kedatangan = j
      } else if(arrPenumpang[i][1] === rute[j]){
        var keberangkatan = j
      }
    }

    obj.bayar = (kedatangan - keberangkatan) * 2000
    arr.push(obj)
  }
  return arr
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]