// TUGAS 1
const shoutOut = () => 'Halo Function!';
console.log(shoutOut());

// TUGAS 2
const calculateMultiply = (nm1, nm2) => nm1 * nm2;

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// TUGAS 3
var processSentence = (nama, umur, alamat, hobi) => {
    bio = `Nama saya ${nama}, umur saya ${umur} tahun, alamat saya di ${alamat}, dan saya punya hobby yaitu ${hobi}!`
    return bio
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);