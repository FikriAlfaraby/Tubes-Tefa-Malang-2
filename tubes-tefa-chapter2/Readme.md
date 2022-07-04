# Form Recruitment Profesional Expert Digital Telkom

Kami membuat sebuah aplikasi multi step form berbasis website yang ditujukan kepada perusahaan PT.Telkom untuk rekrutasi profesional expert di digital,dengan minimal lulusan S1 hingga S3 dengan pengalaman kerja minimal 5 tahun

## Teknologi yang digunakan

- HTML ( Membangun struktur )
- CSS ( Styling )
- Javascript ( Menambahkan interaktifitas )
- Jquery ( Mempermudah penyeleksian, melakukan manipulasi elemen-elemen DOM pada JavaScript )

## Library external yang digunakan

- signature.js (untuk membuat input tanda tangan)

## Validasi yang dibuat

- Validasi untuk beberapa input form yang wajib untuk diisi
- Validasi untuk pattern nomor telephone (0 8 pada 2 digit awal)
- Validasi untuk pattern email (penggunaan @)
- Validasi untuk minimal value angka yang diinput pada pengalaman bidang yang dipilih
- Validasi untuk ekstensi gambar pada input foto diri 3 x 4
- Validasi untuk size dan ekstensi PDF pada input CV

## Algoritma validasi yang dibuat

- Mulai
- Membuat sebuah aturan pada beberapa input form. Apabila sesuai aturan maka bernilai valid apabila tidak maka invalid
- Check validasi input menggunakan function checkValidity() di javascript (akan bernilai true jika valid dan false jika invalid)
- Masukkan setiap isi validasi ke dalam sebuah Array
- Check apakah setiap nilai array bernilai true
- Jika iya maka validasi telah selesai
- Jika tidak maka tampilkan pesan error, kemudian kembali validasi
- Selesai

## Link

[Link Documentation](./documentation/Kelompok4_Documentation%20Tugas%20Besar%20Chapter%202.pdf)

## Our Temas

- Fikri -> Develop Aplikasi Form
- Maharani -> Documentation (Google Document)
- Zalfa -> Desain Wireframe and Mockup
- Deva -> Flowchart dan Algoritma

## Credit

> Kelompok 2 TEFA SMK Telkom Malang
