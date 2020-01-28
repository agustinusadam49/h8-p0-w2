// Exercise 3 : Mengenal penggunaan Conditional (Switch-Case) dalam JavaScript

function cekHari(tgl) {
    if (tgl > 0 && tgl < 32) {
        return tgl;
    } else {
        return null;
    }
}

function cekTahun(yr) {
    if (yr > 1899 && yr < 2201) {
        return yr;
    } else {
        return null;
    }
}

function tanggalLengkap(hr, month, thn) {
    var date = cekHari(hr);
    var year = cekTahun(thn);
    if (date && month && year) {
        switch (month) {
            case 1: {console.log(`${date} Januari ${year}`); break;}
            case 2: {console.log(`${date} Februari ${year}`); break;}
            case 3: {console.log(`${date} Maret ${year}`); break;}
            case 4: {console.log(`${date} April ${year}`); break;}
            case 5: {console.log(`${date} Mei ${year}`); break;}
            case 6: {console.log(`${date} Juni ${year}`); break;}
            case 7: {console.log(`${date} Juli ${year}`); break;}
            case 8: {console.log(`${date} Agustus ${year}`); break;}
            case 9: {console.log(`${date} September ${year}`); break;}
            case 10: {console.log(`${date} Oktober ${year}`); break;}
            case 11: {console.log(`${date} November ${year}`); break;}
            case 12: {console.log(`${date} Desember ${year}`); break;}
            default: {console.log('Maaf data yang anda masukan tidak valid!');}
        } 

    } else {
        console.log('Maaf data yang anda masukan tidak valid!');
    }
}

var hari = 29;
var bulan = 1;
var tahun = 2020;

tanggalLengkap(hari, bulan, tahun);