// 1. Menyusun Barisan Bintang
var rows1 = 20;
for (i = 1; i <= rows1; i++) {
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 20;
var bintang = '*';
for (i = 1; i <= rows2; i++) {
    var tampung = '';
    for (j = 1; j <= rows2; j++) {
        tampung += bintang 
    }
    console.log(tampung)
}

// 2. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 20;
var bintang = '*';
var tampung = '';
for (i = 1; i <= rows3; i++ ) {
    tampung += bintang 
    for (j = i; j <= i; j++) {
        console.log(tampung)
    }
    
}