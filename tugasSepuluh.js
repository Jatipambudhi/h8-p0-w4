function changeMe(arr) {
  var nomor = 0
  for (var i = 0; i < arr.length; i++){
    var obj = {
      firstName : arr[i][0],
      lastName : arr[i][1],
      gender : arr[i][2],
      age : 2018 - arr[i][3], 
    }
    if (!Number.isInteger(obj.age)) {
      obj.age = "invalid birth year "
    }
  console.log (obj)
  }
}



// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
