// 1. Melakukan Looping Menggunakan While
var num = 1;
while (num <= 2) {
    if (num < 2) {
        var num_1 = 1;
        console.log('LOOPING PERTAMA');
        while (num_1 <= 10) {
            console.log(`${num_1 * 2} - I Love Coding`);
            num_1 += 1;
        } 
    } else {
        console.log('LOOPING KEDUA')
        var num_2 = 10;
        while (num_2 >= 1) {
            console.log(`${num_2 * 2} - i will become fullstack developer`);
            num_2 -= 1;
        }
    }
    num += 1;
}

// 2. Melakukan Looping Menggunakan for
for (i = 1; i <= 2; i++) {
    if (i < 2) {
        console.log('LOOPING PERTAMA')
        for (j = 1; j <= 20; j++) {
            console.log(`${j} - I Love Coding`);
        }
    } else {
        console.log('LOOPING KEDUA')
        for (j = 20; j >= 1; j--) {
            console.log(`${j} - i will become fullstack developer`);
        }
    }
}

// 3. Angka Ganjil dan Genap
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`counter sekarang = ${i}`);
        console.log('GENAP')

    } else {
        console.log(`counter sekarang = ${i}`);
        console.log('GANJIL')
    }
}

// Kelipatan 3 pertambahan counter 2
for (i = 1; i <= 100; i+=2) {
    if (i % 3 === 0) {
        console.log(`${i} KELIPATAN 3`);
    } else {
        console.log('');
    }
}

// Kelipatan 6 pertambahan counter 5
for (i = 1; i <= 100; i+=5) {
    if (i % 6 === 0) {
        console.log(`${i} KELIPATAN 6`);
    } else {
        console.log('');
    }
}

// Kelipatan 10 pertambahan counter 9
for (i = 1; i <= 100; i+=9) {
    if (i % 10 === 0) {
        console.log(`${i} KELIPATAN 10`);
    } else {
        console.log('');
    }
}

