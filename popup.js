alert('Selamat Datang diAplikasi input data');
var lagi = false;

while(lagi === false){
    var nama = prompt('Masukan Nama'),
        kelas = prompt('Masukan Kelas');


    alert('Hallo \n'+ 'Nama:' + nama + '\n' + 'Kelas' + kelas);

    lagi = confirm('Apakah data sudah benar');
}

alert('Data sudah terisi');

