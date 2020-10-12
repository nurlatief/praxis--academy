# cara menambahkan JavaScript ke halaman Anda untuk membuat 
# Hello world!
- Buka situs pengujian Anda dan buat folder baru bernama skrip. Di dalam folder scripts, buat file baru bernama main.js, dan simpan.

- Di file index.html Anda, masukkan kode ini di baris baru, tepat sebelum tag </body> penutup:


<script src = "scripts / main.js"> </script>


Ini melakukan pekerjaan yang sama dengan elemen <link> untuk CSS. Ini menerapkan JavaScript ke halaman, sehingga dapat berpengaruh pada HTML (bersama dengan CSS, dan apa pun di halaman).
Tambahkan kode ini ke file main.js:

const myHeading = document.querySelector ('h1');
myHeading.textContent = 'Halo dunia!';

Pastikan file HTML dan JavaScript disimpan. Kemudian muat index.html di browser Anda. Anda akan melihat tampilan hello wordl 

# variabel
Variabel adalah wadah yang menyimpan nilai. Anda mulai dengan mendeklarasikan variabel dengan var (kurang disarankan, selami lebih dalam untuk penjelasannya) atau kata kunci let, diikuti dengan nama yang Anda berikan ke variabel:

biarkan myVariable;

Catatan: Titik koma di akhir baris menunjukkan tempat pernyataan berakhir. Ini hanya diperlukan jika Anda perlu memisahkan pernyataan dalam satu baris. Namun, beberapa orang percaya bahwa menempatkan titik koma di akhir setiap pernyataan merupakan praktik yang baik. Ada aturan lain tentang kapan Anda harus dan tidak boleh menggunakan titik koma. Untuk lebih jelasnya, lihat Panduan Anda untuk Titik Koma di JavaScript.

Catatan: Anda dapat menamai variabel hampir semua hal, tetapi ada beberapa batasan. (Lihat bagian ini tentang aturan penamaan.) Jika Anda tidak yakin, Anda dapat memeriksa nama variabel Anda untuk melihat apakah itu valid.

Catatan: JavaScript peka huruf besar / kecil. Artinya myVariable tidak sama dengan myvariable. Jika Anda memiliki masalah dalam kode Anda, periksa kasusnya!

Catatan: Untuk detail selengkapnya tentang perbedaan antara var dan let, lihat Perbedaan antara var dan let.

Setelah mendeklarasikan variabel, Anda dapat memberinya nilai:

myVariable = 'Bob';

Selain itu, Anda dapat melakukan kedua operasi ini pada baris yang sama:

biarkan myVariable = 'Bob';

Anda mengambil nilai dengan memanggil nama variabel:

myVariable;

Setelah menetapkan nilai ke variabel, Anda dapat mengubahnya nanti di kode:

biarkan myVariable = 'Bob';
myVariable = 'Steve';

Perhatikan bahwa variabel mungkin memiliki nilai yang memiliki tipe data berbeda:
Contoh Penjelasan Variabel
String Ini adalah urutan teks yang dikenal sebagai string. Untuk menunjukkan bahwa nilainya adalah string, apit dengan tanda kutip tunggal. biarkan myVariable = 'Bob';
Angka Ini adalah angka. Angka tidak memiliki tanda kutip di sekitarnya. biarkan myVariable = 10;
Boolean Ini adalah nilai True / False. Kata benar dan salah adalah kata kunci khusus yang tidak membutuhkan tanda petik. biarkan myVariable = true;
Array Ini adalah struktur yang memungkinkan Anda menyimpan banyak nilai dalam satu referensi. biarkan myVariable = [1, 'Bob', 'Steve', 10];
Lihat setiap anggota array seperti ini:
myVariable [0], myVariable [1], dll.
Objek Ini bisa apa saja. Segala sesuatu di JavaScript adalah sebuah objek, dan dapat disimpan dalam sebuah variabel. Ingatlah ini saat Anda belajar. biarkan myVariable = document.querySelector ('h1');
Semua contoh di atas juga.

Jadi mengapa kita membutuhkan variabel? Variabel diperlukan untuk melakukan sesuatu yang menarik dalam pemrograman. Jika nilai tidak dapat berubah, maka Anda tidak dapat melakukan sesuatu yang dinamis, seperti mempersonalisasi pesan ucapan atau mengubah gambar yang ditampilkan di galeri gambar.

