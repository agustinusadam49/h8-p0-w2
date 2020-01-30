function balikKata(kata) {
    var tampung = '';
    var panjangKata = kata.length;
    var indexNum = panjangKata - 1;
    for (i = 0; i < panjangKata; i++) {
        tampung += kata.charAt(indexNum);
        indexNum -= 1
    }
    return tampung;
}

//TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); //repuS
