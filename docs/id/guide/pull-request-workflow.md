# <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="50"> Kolaborasi dan Review menggunakan *Pull Request*

[Kembali ke Beranda](README.md)

Bagian ini berisi tentang proses *Pull Request* yang berjalan di Arch Public Website Dev, tata cara dan kesepakatan yang berlaku.

---

### *Main Cast*

Dalam proses *Pull Request* ini terdapat 2 peran utama, yakni:

- **Reviewer**: *Code reviewer & decision maker* (pengembang utama).
<!-- - **QA**: *Feature/function reviewer*. -->
- **Member**: *Developer* (pengembang).

![](https://static.pbahotels.com/Assets/images/Hotel/exterior/d62e3d6a1766e1d3c8a7e478bddd78a3cd3f8fae.png)

### *Pull Request Manifesto @ Arch Public Website Dev*

1. Tidak boleh ada proses development di dalam *branch*  `master` -  *branch* tersebut hanya berfungsi untuk `merge, test & release` fitur yang sudah stabil
2. Segera buat *Pull Request* setelah *branch* dibuat dan *remote push* sudah dilakukan.
3. *Pull Request* akan ditolak apabila ditemukan konflik dalam kode. Pengembang harus menyelesaikan konflik tersebut dan memastikan tidak ada konflik dalam *Pull Request*
4. Lakukan penamaan *branch* sesuai kesepakatan bersama ( lihat Ketentuan *Branching* )
5. *Branch* `hotfix` akan menghasilkan *Pull Request* ke *branch* `master` dan *branch* `develop`
6. Pengembang utama sebaiknya melakukan proses `merge` di repositori lokal. Khusus untuk branch `develop` sebaiknya dilakukan *preserve commit history* dengan melakukan proses `git merge --no-ff`. Untuk branch lain silahkan `merge & squash` menggunakan `git merge --squash`
7. Pengembang utama yang memiliki akses *push* ke `master` dan `develop` harus mengatur proses `release` aplikasi dan memungkinkan untuk membuat *branch* `release` dengan beberapa permintaan pekerjaan tambahan sebelum akhirnya akan dilakukan `merge` ke `develop` dan `master`

### Ketentuan *Branching*

Pilihan nama *branch* yang dapat digunakan adalah

- **story**/[nomor Ora] [deskripsi]

> Untuk ***Story*** yang dirasa terlalu besar, pecah ke dalam *Task* yang lebih kecil untuk kemudian di merge ke *branch* `story` sebelum melakukan *Pull Request* ke *branch* `develop`

- **task**/[nomor Ora] [deskripsi]
- **improvement**/[nomor Ora] [deskripsi]
- **bug**/[nomor Ora] [deskripsi]
- **hotfix**/[nomor Ora] [deskripsi]

**Notes**

Untuk repository yang tidak akan mengalami banyak pengembangan ( one and done ), harap menggunakan branching berikut

- **master**  : cukup jelas
- **develop** : hasil pengembangan sebelum `merge` to `master`
<!-- - **latest** : seluruh pengembangan akan dilakukan di branch ini dan PR akan dibuat ke `develop` -->

### Konsep Git

- Gunakan pesan *commit* yang relevan dan masukkan *tag* yang sesuai.
  - [add] deskripsi penambahan berkas yang dilakukan
  - [change] deskripsi *update* yang dilakukan
  - [style] deskripsi untuk penambahan atau perbaikan pada bagian *style*
  - [fix] deskripsi perbaikan yang dilakukan
  - [refact] deskripsi perubahan yang lebih optimal
</br>
- [Git Cheatsheet](https://www.git-tower.com/blog/git-cheat-sheet/)
- [Rewrite Commit History](https://git-scm.com/book/id/v2/Git-Tools-Rewriting-History)
- [Squash Published Commits](https://stackoverflow.com/questions/5667884/how-to-squash-commits-in-git-after-they-have-been-pushed)

#### Template Pull Request

```
## Explain what your PR does

## To which Ora's link' ticket is PR dedicated?

## How should one manually test this ticket?

## Deployment notes (migrations, envs, etc.)

## Screenshots (postman, feature, or anything related.)

## Others?
```
