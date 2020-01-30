// Konversi Menit ke jam digital
function konversiMenit(menit) {
    var jam = menit / 60;
    var menitSisa = menit % 60;
    if (menitSisa < 10) {
        var konversi = `${Math.floor(jam)}:0${menitSisa}`
    } else if (menitSisa > 10) {
        var konversi = `${Math.floor(jam)}:${menitSisa}`
    }
    return konversi
    }
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00