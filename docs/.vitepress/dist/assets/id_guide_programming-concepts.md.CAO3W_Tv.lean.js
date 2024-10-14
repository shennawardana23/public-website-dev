import{_ as e,c as n,a0 as i,o as t}from"./chunks/framework.CGHvQLJz.js";const p=JSON.parse('{"title":"Panduan dan Konsep Dasar Programming","description":"","frontmatter":{},"headers":[],"relativePath":"id/guide/programming-concepts.md","filePath":"id/guide/programming-concepts.md"}'),r={name:"id/guide/programming-concepts.md"};function s(m,a,d,u,o,l){return t(),n("div",null,a[0]||(a[0]=[i('<h1 id="panduan-dan-konsep-dasar-programming" tabindex="-1"><img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> Panduan dan Konsep Dasar Programming <a class="header-anchor" href="#panduan-dan-konsep-dasar-programming" aria-label="Permalink to &quot;&lt;img src=&quot;https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif&quot; width=&quot;50&quot;&gt;  Panduan dan Konsep Dasar Programming&quot;">​</a></h1><p><a href="./README.html">Kembali ke Beranda</a></p><p>Bagian ini berisi rangkuman dan referensi dasar dasar pemrograman bagi Arch Public Website Developer.</p><hr><h3 id="konsep-clean-code" tabindex="-1">Konsep Clean Code <a class="header-anchor" href="#konsep-clean-code" aria-label="Permalink to &quot;Konsep Clean Code&quot;">​</a></h3><p>Konsep <em>Clean Code</em> mempunyai beberapa penafsiran dan karakteristik, di antaranya :</p><ul><li><p><strong>Kode tersebut harus mudah dipahami</strong></p><ul><li>Memiliki alur kerja/pertukaran data yang jelas dan konsisten</li><li>Kolaborasi antar <em>class</em> atau berkas harus mudah dipahami</li><li>Tanggung jawab dan fungsi dari setiap berkas harus mudah untuk dipahami. Jangan membuat fungsi yang terlalu kompleks apabila tidak dibutuhkan.</li><li>Fungsi atau <em>method</em> yang ada di dalam sebuah berkas harus mudah dipahami</li><li>Tujuan, penamaan dan fungsi dari setiap variabel ataupun baris mudah dipahami dan mudah dibaca</li><li>Kode harus mudah dibaca, tambahkan komentar di bagian yang cukup kompleks atau kurang stabil (lihat bagian <em>readable code</em>)</li></ul></li><li><p><strong>Kode tersebut harus mudah diubah</strong></p><ul><li>Kelas dan fungsinya harus dijaga agar tetap kecil dan bertanggung jawab pada sebuah pekerjaan tertentu (<em>single responsibility principle</em>)</li><li>Kelas harus memiliki API yang jelas dan mudah dipahami / mudah dibaca</li><li>Kelas dan fungsinya harus berjalan dengan sebagai mana mustinya dan proses yang ada di dalamnya mudah untuk ditebak</li><li>Mempunyai <em>unit test</em> atau diatur sedemikian rupa agar memudahkan pembuatan tes.</li><li>Tes yang tersedia mudah dipahami dan mudah untuk diubah</li><li>Redundansi kode harus dijaga seminimal mungkin (<em>DRY principle</em>) agar kode dapat tetap berjalan dengan konsisten ketika terjadi perubahan di suatu tempat</li><li>Dependensi yang ada di dalam kode harus dijaga seminimal mungkin untuk mengurangi resiko kesalahan akibat perubahan dependensi</li></ul></li></ul><blockquote><p>&quot;Clean Code is a code that is written by someone who cares&quot; - <strong>Michael Feathers</strong></p></blockquote><p>Bacaan tambahan :</p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">Clean Code : A Handbook of Agile Software Craftmanship</a></p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">High Quality Code for Better Programmer</a></p><hr><h3 id="konsep-readable-code" tabindex="-1">Konsep Readable Code <a class="header-anchor" href="#konsep-readable-code" aria-label="Permalink to &quot;Konsep Readable Code&quot;">​</a></h3><p>Hal yang cukup sering dilupakan pengembang adalah bahwa kode yang mereka kembangkan akan digunakan kembali suatu hari nanti, mungkin oleh orang lain. Banyak kasus muncul ketika kode lama dibuka kembali, dibutuhkan waktu untuk memahami ataupun mengingat ulang bagaimana kode tersebut dibuat. Waktu tersebut dapat diminimalisir apabila kode yang dibuat mudah untuk dibaca dan dipahami.</p><p>Prinsip prinsip untuk membuat kode yang mudah dibaca adalah :</p><ul><li>Konsistensi dalam tata cara pembuatan kode, di antaranya : <ul><li>Spasi vs tab</li><li>Peletakan</li><li>Ikuti kesepakatan yang berlaku di dalam tim</li></ul></li><li>Penamaan <em>files &amp; folders</em> yang konsisten : <ul><li>Peletakan berkas di dalam <em>folder</em> yang relevan dan mudah dipahami</li><li>Konvensi penamaan (CamelCase, snake-case, etc)</li><li>Ikuti kesepakatan yang berlaku di dalam tim</li></ul></li><li>Masukkan komentar dan dokumentasi di tempat yang membutuhkan penjelasan tambahan</li><li>Hindari pembuatan fungsi / baris yang kompleks dan membutuhkan waktu tambahan untuk dipahami.</li><li>Hindari spasi / tab yang terlalu menjorok (<em>deep nesting</em>) karena akan menyulitkan pemahaman fungsi dan tujuan kode</li></ul><blockquote><p>&quot;Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live. Code for readability&quot; - <strong>John F Woods</strong></p></blockquote><p>Bacaan lebih lanjut :</p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">The Art of Readable Code</a></p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">Write Elegant Code</a></p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">Write Cleaner Code</a></p><hr><h3 id="konsep-solid-kiss-dry" tabindex="-1">Konsep SOLID, KISS &amp; DRY <a class="header-anchor" href="#konsep-solid-kiss-dry" aria-label="Permalink to &quot;Konsep SOLID, KISS &amp; DRY&quot;">​</a></h3><h4 id="solid" tabindex="-1">SOLID <a class="header-anchor" href="#solid" aria-label="Permalink to &quot;SOLID&quot;">​</a></h4><ul><li><strong>Single responsibility</strong> : Sebuah <em>class</em> hanya boleh memiliki 1 tanggung jawab. Jangan membuat sebuah <em>class</em> yang terlalu kompleks dan melakukan banyak hal sekaligus.</li></ul><blockquote><p><strong>Contoh</strong> : sebuah layanan ojek online mungkin bisa membuat kelas <code>AntarJemput</code> untuk memodelkan proses bisnisnya. Namun akan lebih baik apabila kelas tersebut dipecah menjadi <code>Antar</code> yang bertanggung jawab dengan pengantaran pengguna menuju tujuan dan <code>Jemput</code> yang bertanggung jawab untuk fungsi penjemputan pengguna dari tempat asal sehingga apabila ada optimalisasi dalam proses <code>Jemput</code> , fungsi yang mengimplementasi kelas <code>Antar</code> menjadi relatif lebih aman</p></blockquote><ul><li><strong>Open for extension but closed for modification</strong> : Fungsi atau kegunaan dalam sebuah entitas seharusnya bisa ditambahkan tanpa harus mengubah isi dari entitas tersebut ( <em>Open Closed</em> )</li></ul><blockquote><p>Contoh : sebuah <code>Truk</code> memiliki fungsi <code>jumlahVolumeBarang</code> yang memiliki parameter <em>List</em> barang barang yang ada di dalam <code>Truk</code> tersebut. Fungsi <code>jumlahVolumeBarang</code> bertugas untuk menghitung volume masing masing barang kemudian menjumlahkan keseluruhan volume. Apabila terdapat jenis barang baru dengan rumus volume baru, maka <code>jumlahVolumeBarang</code> harus diperbarui. Seharusnya ada implementasi <code>hitungVolume</code> di dalam barang sehingga untuk barang tertipe apapun, <code>jumlahVolumeBarang</code> tidak harus diperbarui karena hanya akan menjumlahkan hasil dari <code>barang.hitungVolume()</code></p></blockquote><ul><li><strong>Liskov substitution principles</strong> : Sebuah <em>object</em> seharusnya dapat diganti oleh <em>object subtype</em> tanpa mengubah keluaran dari sebuah program ( <em>Design by Contract</em> )</li></ul><blockquote><p>Contoh : sebuah fungsi <code>antarPenumpang</code> memiliki parameter <em>Kendaraan</em> yang memiliki fungsi <code>rem</code>. <em>Liskov subtitution</em> menyatakan bahwa semua jenis <em>Kendaraan</em> (<code>Odong Odong</code>, <code>Bemo</code>)harus mengimplementasikan <code>rem</code> dengan tujuan yang sama ( menurunkan kecepatan ).</p></blockquote><ul><li><p><strong>Interface segregation principles</strong> : <em>Interface</em> yang spesifik dan kecil lebih baik daripada <em>Interface</em> besar yang menyebabkan <em>class</em> harus menerapkan fungsi yang tidak dibutuhkan.</p></li><li><p><strong>Dependency inversion principle</strong> : Detail harusnya bergantung pada abstraksi. Seharusnya tidak ada <em>class</em> yang bergantung / <em>depend</em> dari <em>class</em> yang konkrit ( <em>non abstract</em> )</p></li></ul><blockquote><p><strong>Contoh</strong> : Fungsi <code>antarPenumpang</code> dalam kelas <code>Antar</code> mungkin bisa memiliki parameter/dependensi <code>Sepeda Motor</code>. Namun apabila layanan ojek online ingin menambahkan <code>Bemo</code> di armadanya tentu harus mengubah isi dari <code>Antar</code>. Akan lebih baik apabila parameter dari <code>antarPenumpang</code> diubah menjadi <code>Kendaraan</code> (<em>abstract</em>) sehingga memungkin adanya penambahan tipe armada tanpa harus mengubah fungsi / kelas terkait.</p></blockquote><hr><h4 id="kiss-keep-it-simple-and-straightforward" tabindex="-1">KISS (Keep It Simple and Straightforward) <a class="header-anchor" href="#kiss-keep-it-simple-and-straightforward" aria-label="Permalink to &quot;KISS (Keep It Simple and Straightforward)&quot;">​</a></h4><p>Konsep KISS menyatakan bahwa kode yang dibuat harus sederhana dan mudah dipahami tanpa mengorbankan kualitas hasil akhir pengerjaan kode.</p><p>Beberapa hal yang harus diperhatikan dalam penerapan konsep KISS adalah :</p><ul><li><em>methods &amp; classes</em> harus dibuat sesederhana mungkin.</li><li>Hindari kompleksitas dalam kondisi perulangan dan percabangan (<em>nested/complex loop &amp; conditional</em>)</li><li>Hindari solusi yang terlalu kompleks atau kode yang terlalu singkat namun sulit untuk dibaca. Jangan pula mengorbankan performa demi mendapatkan baris kode yang mudah dibaca. Cari keseimbangan antara keduanya.</li></ul><hr><h4 id="dry-don-t-repeat-yourself" tabindex="-1">DRY (Don’t Repeat Yourself) <a class="header-anchor" href="#dry-don-t-repeat-yourself" aria-label="Permalink to &quot;DRY (Don’t Repeat Yourself)&quot;">​</a></h4><p>Menekankan pada penghapusan duplikasi kode yang tidak perlu dalam proyek pengembangan perangkat lunak. Menurut prinsip ini, setiap bagian dari pengetahuan atau logika harus memiliki representasi kanonik tunggal di dalam sistem.</p><p>Mari kita jelajahi manfaat yang ditawarkan oleh prinsip DRY.</p><ul><li><p><strong>Complexity Reduction</strong> Pertama dan terutama, prinsip ini mengurangi kompleksitas kode dengan menghindari pengulangan yang tidak perlu. Hal ini membuat kode lebih mudah dibaca, jelas, dan lebih mudah dipahami oleh pengembang. Selain itu, ini menyederhanakan pemeliharaan kode, karena modifikasi dan perbaikan hanya perlu dilakukan di satu tempat, bukan di beberapa bagian kode.</p></li><li><p><strong>Elimination of Duplicate Code</strong> Untuk menghindari duplikasi kode, ada beberapa teknik yang dapat diterapkan oleh pengembang. Pertama, mengekstrak fungsi atau metode memungkinkan pengelompokan blok kode yang serupa dan berulang ke dalam fungsi yang dapat digunakan kembali. Dengan cara ini, kode yang sama dapat dipanggil di beberapa tempat tanpa perlu menulis ulang.</p></li><li><p><strong>Grouping by Functionality</strong> Penggunaan kelas dan pewarisan dapat membantu merangkum fungsi umum dan menggunakannya kembali dalam subkelas tertentu.</p></li><li><p><strong>Code Reusability</strong> Terakhir, penggunaan modul, atau kerangka kerja dapat membantu dalam menggunakan kembali kode yang telah ditulis dan diuji oleh pengembang lain, sehingga tidak perlu mengulang dari awal.</p></li></ul><blockquote><p><strong>Contoh</strong> : Misalkan kita sedang mengembangkan aplikasi manajemen kontak dengan fitur untuk menambah, mengubah, dan menghapus kontak. Daripada mengulang kode validasi data yang sama di beberapa tempat di dalam program, kita bisa mengekstrak logika validasi ini ke dalam sebuah fungsi atau kelas utilitas yang terpisah. Dengan cara ini, setiap kali kita perlu memvalidasi data kontak, kita cukup memanggil fungsi atau kelas utilitas tersebut, menghindari duplikasi kode.</p></blockquote><p>Dengan menerapkan prinsip DRY, kami mengurangi kompleksitas, meningkatkan pemeliharaan, dan mendorong penggunaan ulang kode, sehingga menghasilkan pengembangan yang lebih efisien dan sistem yang lebih kuat.</p><hr><h4 id="yagni-you-ain-t-gonna-need-it" tabindex="-1">YAGNI (You Ain’t Gonna Need It) <a class="header-anchor" href="#yagni-you-ain-t-gonna-need-it" aria-label="Permalink to &quot;YAGNI (You Ain’t Gonna Need It)&quot;">​</a></h4><p>Prinsip YAGNI (You Ain&#39;t Gonna Need It) menekankan untuk tidak mengimplementasikan fitur atau kode yang tidak segera diperlukan. Menurut prinsip ini, lebih baik fokus pada fitur-fitur yang penting dan hindari mengantisipasi kebutuhan masa depan yang bersifat hipotetis.</p><ul><li><strong>Convention over Configuration</strong> (CoC) Prinsip Konvensi atas Konfigurasi (Convention over Configuration/CoC) mendorong penggunaan konvensi yang telah ditentukan sebelumnya, bukan konfigurasi eksplisit.</li></ul><p>-<strong>Composition over Inheritance</strong> Prinsip Composition over Inheritance menganjurkan untuk menggunakan komposisi kelas alih-alih pewarisan untuk mendorong penggunaan ulang kode dan menghindari ketergantungan yang kaku antar kelas atau membangun objek yang kompleks dengan menggabungkan objek yang lebih sederhana daripada membuat hirarki pewarisan yang kompleks.</p><p>-<strong>Law of Demeter (LoD/Principle of Only Talking to Your Closest Friends)</strong> Prinsip desain perangkat lunak yang mendorong pemisahan dan mengurangi ketergantungan antar kelas.</p><p>Bacaan lebih lanjut :</p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">SOLID : Object Oriented Design</a></p><p><a href="https://drive.google.com/drive/u/0/folders/1NFAgCa7aAdRPFsxBy2RC7Sjhx4tSYfPP" target="_blank" rel="noreferrer">SOLID, GRASP and other principles of OOP</a></p><hr><h4 id="unit-test-test-driven-development" tabindex="-1">Unit Test (Test Driven Development) <a class="header-anchor" href="#unit-test-test-driven-development" aria-label="Permalink to &quot;Unit Test (Test Driven Development)&quot;">​</a></h4><ul><li><strong>The Three Laws of TDD</strong> Sekarang semua orang tahu bahwa TDD meminta kita untuk menulis unit test terlebih dahulu sebelum menulis kode produksi. Namun, aturan tersebut hanyalah puncak gunung es. Pertimbangkan tiga hukum berikut ini: Hukum Pertama Anda tidak boleh menulis kode produksi sampai Anda telah menulis unit test yang gagal. Hukum Kedua Anda tidak boleh menulis lebih banyak unit test daripada yang cukup untuk gagal, dan tidak penumpukan yang gagal. Hukum Ketiga Anda tidak boleh menulis kode produksi lebih dari yang cukup untuk lulus tes yang sedang gagal.</li><li><strong>F.I.R.S.T.</strong> Tes yang bersih mengikuti lima aturan lain yang membentuk akronim di atas:</li></ul><blockquote><p><strong>Fast</strong> Tes harus cepat. Tes harus berjalan dengan cepat. Jika pengujian berjalan lambat, Anda tidak akan sering menjalankannya. Jika Anda tidak sering menjalankannya, Anda tidak akan menemukan masalah yang cukup dini untuk memperbaikinya dengan mudah. Anda tidak akan merasa bebas untuk membersihkan kode. Pada akhirnya kode tersebut akan mulai membusuk.</p></blockquote><blockquote><p><strong>Independent</strong> Tes tidak boleh bergantung satu sama lain. Satu tes tidak boleh mengatur kondisi untuk tes berikutnya. Anda harus dapat menjalankan setiap pengujian secara independen dan menjalankan pengujian dalam urutan apa pun yang Anda inginkan. Ketika pengujian bergantung satu sama lain, maka pengujian pertama yang gagal akan menyebabkan serangkaian kegagalan pada pengujian berikutnya, sehingga menyulitkan diagnosis dan menyembunyikan cacat pada pengujian berikutnya.</p></blockquote><blockquote><p><strong>Repeatable</strong> Pengujian harus dapat diulang dalam lingkungan apa pun. Anda harus dapat menjalankan pengujian di lingkungan produksi, di lingkungan QA, dan di laptop Anda saat perjalanan pulang ke rumah dengan kereta api tanpa jaringan. Jika pengujian Anda tidak dapat diulang di lingkungan mana pun, maka Anda akan selalu memiliki alasan mengapa pengujian tersebut gagal. Anda juga akan mendapati diri Anda tidak dapat menjalankan pengujian ketika lingkungan tidak tersedia.</p></blockquote><blockquote><p><strong>Self-Validating</strong> Pengujian harus memiliki keluaran boolean. Entah mereka lulus atau gagal. Anda Anda tidak perlu membaca file log untuk mengetahui apakah tes tersebut lulus atau tidak. Anda tidak perlu membandingkan secara manual dua file teks yang berbeda untuk mengetahui apakah tes tersebut lulus atau tidak. Jika tes tidak memvalidasi sendiri, maka kegagalan dapat menjadi subjektif dan menjalankan tes dapat memerlukan evaluasi manual yang panjang.</p></blockquote><blockquote><p><strong>Timely</strong> Pengujian harus ditulis secara tepat waktu. Unit test harus ditulis tepat sebelum kode produksi yang membuatnya lulus. Jika Anda menulis tes setelah kode produksi, maka Anda mungkin akan menemukan kode produksi yang sulit untuk diuji. Anda mungkin memutuskan bahwa beberapa kode produksi terlalu sulit untuk diuji. Anda mungkin tidak mendesain kode produksi agar dapat diuji.</p></blockquote><hr><h3 id="konsep-oop" tabindex="-1">Konsep OOP <a class="header-anchor" href="#konsep-oop" aria-label="Permalink to &quot;Konsep OOP&quot;">​</a></h3><p>Beberapa konsep utama yang harus dipahami dari sebuah paradigma OOP ( <em>Object Oriented Programming</em> ) adalah :</p><p><strong>Everything is an object</strong></p><p>Banyak pihak yang menyebutkan bahwa dalam OOP, semua hal bisa direpresentasikan sebagai <code>Object</code>. Hal ini bisa mungkin tidak bisa diimplementasikan dalam beberapa situasi/konsep tertentu ( <em>primitive variables</em>, <em>methods</em>, etc ). Namun perlu dipahami bahwa dalam pemodelan solusi, hampir sebagian besar masalah dan solusinya dapat direpresentasikan sebagai kumpulan objek yang saling berinteraksi satu sama lain. Oleh karena itu, kemampuan memodelkan masalah menjadi objek dan representasinya menjadi sangat penting dalam pemahaman OOP.</p><p><strong>Encapsulation</strong></p><p>Enkapsulasi menyatakan bahwa implementasi/representasi internal dari sebuah objek seharusnya tidak bisa terlihat dari objek lain.</p><p>Enkapsulasi bisa dilakukan dengan cara melakukan pembatasan akses terhadap <em>accessor</em> dan <em>mutator</em>. <em><strong>Accessor</strong></em> merupakan sebuah fungsi yang dapat memberikan nilai yang terkandung di sebuah objek. <em><strong>Mutator</strong></em> adalah sebuah fungsi yang dapat mengubah representasi/nilai internal yang terkandung di dalam sebuah objek.</p><blockquote><p><strong>Contoh</strong> : objek <code>Person</code> bisa mempunyai <em>Accessor</em> <code>getClothes()</code> dan <em>Mutator</em> <code>setClothes(...)</code> untuk mencari tahu dan mengubah pakain yang sedang dikenakannya</p></blockquote><p><strong>Abstraction</strong></p><p>Abstraksi berhubungan erat dengan enkapsulasi, karena pada dasarnya abstraksi adalah proses pembuatan sebuah objek yang tidak memiliki implementasi nyata dalam <em>Accessor</em> ataupun <em>Mutator</em> yang dimilikinya. Implementasi tersebut akan diterapkan pada objek yang merepresentasikannya</p><blockquote><p><strong>Contoh</strong> : objek <code>Manusia</code> memiliki <em>Accessor</em> <code>bisaMembaca</code> , namun implementasi <code>bisaMembaca</code> akan berbeda tergantung objek lain yang merepresentasikan <code>Manusia</code>. Budi mungkin <code>bisaMembaca</code> ( mengembalikan <code>true</code> ) namun Joko bisa saja tidak <code>bisaMembaca</code> ( mengembalikan <code>false</code> )</p></blockquote><p><strong>Inheritance</strong></p><p>Secara umum, objek dapat berinteraksi satu dengan yang lainnya dalam hubungan mempunyai (<em>has a</em>), menggunakan (<em>use a</em>), atau merepresentasikan (<em>is a</em>). <em>Is a</em> atau representasi adalah sebuah bentuk dari <em>Interitance</em> atau pewarisan. Dalam konsep <em>Inheritance</em> terdapat istilah <em>parent/super class</em> dan <em>child class</em>. <em>Child class</em> akan mewarisi properti dan fungsi non-privat yang dimiliki oleh <em>parent/super class</em>.</p><blockquote><p><strong>Contoh</strong> : Kelas <code>Kendaraan</code> memiliki properti <code>roda</code> dan fungsi <code>aturKecepatan</code>. Semua kelas yang menjadi <em>child class</em> dari <code>Kendaraan</code> akan memiliki <code>roda</code> dan fungsi <code>aturKecepatan</code> secara otomatis.</p></blockquote><p><strong>Polymorphism</strong></p><p><em>Polymorphism</em> bisa dijabarkan atau diartikan sebagai sebuah operasi yang memiliki beberapa jenis implementasi</p><p>Beberapa jenis <em>Polymorphism</em> adalah :</p><ul><li><em>Ad Hoc Polymorphism</em> atau <em>Function Overloading</em> adalah sebuah fungsi yang memiliki nama sama, namun parameter berbeda sehingga bisa memiliki implementasi yang berbeda</li></ul><blockquote><p>Contoh : fungsi dengan <code>jumlah</code> bisa memiliki parameter <code>angka arab (1-0)</code> ataupun <code>angka romawi (I-X)</code> sehingga implementasi <code>jumlah(10, 20)</code> tentunya akan menjadi beda dengan <code>jumlah (XV, IV)</code></p></blockquote><ul><li><em>Parametric Polymorphism</em> atau <em>Generic Type</em> adalah sebuah fungsi atau jenis data yang ditulis secara umum sehingga bisa mengakomodir semua jenis tipe data tanpa terkecuali</li></ul><blockquote><p>Contoh : kelas <code>Minuman&lt;T&gt;</code> dan fungsi <code>racikMinuman(T)</code> mempunyai <em>Generic Type</em> yang direpresentasikan dalam <code>T</code>. Dalam proses representasi <code>Minuman</code>, <code>T</code> dapat didefinisikan sebagai data berjenis apapun (misal <code>Kopi</code> atau <code>Teh</code>) dan <code>racikMinuman</code> harus menggunakan tipe data yang sama sebagai parameter ( menjadi <code>racikMinuman(Kopi)</code> atau <code>racikMinuman(Teh)</code>.</p></blockquote><ul><li><em>Subtyping</em> atau <em>Function Overriding</em> adalah sebuah fungsi yang diwariskan dari <em>parent class</em> namun dapat didefinisikan berbeda oleh <em>child class</em></li></ul><blockquote><p>Contoh : kelas <code>Binatang</code> mempunyai fungsi <code>bicara</code>, namun kelas yang merepresentasikan <code>Binatang</code> mungkin mempunyai cara yang berbeda untuk <code>bicara</code> ( misalkan <code>Kucing</code> <code>bicara</code> akan mengembalikan <em>Meow!</em> dan <code>Anjing</code> <code>bicara</code> akan mengembalikan <em>Woof!</em> )</p></blockquote><p>Bacaan leboh lanjut : <a href="https://www.udemy.com/draft/725258/learn/v4/content" target="_blank" rel="noreferrer">Design Pattern Guide</a></p><p><a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank" rel="noreferrer">OOP on Wikipedia</a></p><hr><h3 id="konsep-reactive-programming" tabindex="-1">Konsep Reactive Programming <a class="header-anchor" href="#konsep-reactive-programming" aria-label="Permalink to &quot;Konsep Reactive Programming&quot;">​</a></h3><p>Beberapa konsep utama yang harus dipahami dari sebuah paradigma <em>Reactive Programming</em> adalah :</p><p><strong>Everything is a stream</strong></p><p>Sedikit berbeda dengan konsep OOP yang menggambarkan masalah dan solusinya sebagai objek dan interaksinya, <em>Reactive Programming</em> menitikberatkan kepada kejadian dan alur kejadiannya (<em>stream &amp; events</em>). Hampir sebagian besar proses dapat digambarkan dalam kumpulan kejadian (<em>events</em>) dan alur kejadian dari mulai sampai selesai (<em>stream</em>)</p><p>Karena perbedaan paradigma ini, <em>Reactive Programming</em> sangat cocok apabila diterapkan ke dalam sebuah sistem yang membutuhkan respon secara instan / <em>real time</em> karena paradigma ini sangat menitikberatkan kepada kejadian (<em>event</em>) dan reaksinya (<em>response</em>).</p><p><strong>Subject / Observable</strong></p><p><em>Stream</em> dapat diimplementasikan dengan menginisialisasi sebuah <em>Subject</em> (bisa juga disebut <em>Observable</em>). <em>Observable</em> adalah sebuah objek/data yang dapat dipantau (<em>observe/subscribed</em>) oleh sebuah <em>Observer</em>. Setiap perubahan dari status data akan langsung diinformasikan kepada seluruh <em>Observer</em> yang memantau data <em>Observable</em> tersebut.</p><p><strong>Observer</strong></p><p><em>Observer</em> adalah sebuah objek/data yang memantau semua perubahan nilai dari <em>Subject/Observable</em>. Setelah <em>Observer</em> menyatakan diri siap memantau (<em>subscribe</em>) <em>Observable</em>, maka <em>Observer</em> tersebut sudah memasuki <em>stream data</em> yang ada di dalam proses. Setiap ada perubahan status internal di dalam <em>Subject/Observable</em> maka <em>Observer</em> akan mendapatkan notifikasi sehingga dapat melakukan reaksi yang bersesuaian dengan aksi.</p><p>Bacaan lebih lanjut :</p><p><a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754" target="_blank" rel="noreferrer">Reactive Programming Introduction</a></p><p><a href="http://reactivex.io/" target="_blank" rel="noreferrer">ReactiveX</a></p><hr>',101)]))}const k=e(r,[["render",s]]);export{p as __pageData,k as default};