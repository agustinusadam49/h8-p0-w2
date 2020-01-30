// Logic Challenge - X dan O

function mencariJumlahX(strNya) {
    var tampung_X = '';
    var panjangKata = strNya.length;
    var indexNum = 0;
    for (i = 1; i <= panjangKata; i++) {
        if (strNya.charAt(indexNum) === 'x') {
            tampung_X += strNya.charAt(indexNum);
        }
        indexNum += 1
    }
    var panjang_X = tampung_X.length
    return panjang_X; 
}

function mencariJumlahO(strNya) {
    var tampung_O = '';
    var panjangKata = strNya.length;
    var indexNum = 0;
    for (i = 1; i <= panjangKata; i++) {
        if (strNya.charAt(indexNum) === 'o') {
            tampung_O += strNya.charAt(indexNum);
        }
        indexNum += 1
    }
    var panjang_O = tampung_O.length
    return panjang_O; 
}

function xo(str) {
    var jumlah_X = mencariJumlahX(str);
    var jumlah_O = mencariJumlahO(str);
    if (jumlah_X === jumlah_O) {
        return true
    } else if (jumlah_X !== jumlah_O) {
        return false
    } 
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true