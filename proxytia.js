// Exercise 3 : Mengenal penggunaan Conditional if-else dalam JavaScript

// Deklarasi variable nama & peran
let nama = 'Adam';
let peran = 'Tabib';

// Cek variable nama & peran terisi jika peran adalah Ksatria
if (nama && peran === 'Ksatria') {
	console.log(
		`Selamat datang di dunia Proxytia, ${nama}` + 
		`\nHalo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`
        );
// Cek variable nama & peran terisi jika peran adalah Tabib
} else if (nama && peran === 'Tabib' ) { 
	console.log(
		`Selamat datang di dunia Proxytia, ${nama}` + 
		`\nHalo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`
        );
// Cek variable nama & peran terisi jika peran adalah Penyihir
} else if (nama && peran === 'Penyihir') {
	console.log(
		`Selamat datang di dunia Proxytia, ${nama}` + 
		`\nHalo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
        );
// Cek jika hanya nama saja yang terisi
} else if (nama) {
	console.log(`Hallo ${nama}, Pilih peranmu untuk memulai game!`);
// Jika nama & peran tidak terisi
} else {
	console.log('Nama harus diisi');
}
