# <img src="https://emojis.slackmojis.com/emojis/images/1588315024/8823/hyperkitty.gif?1588315024" width="30" /> Panduan untuk End to End (E2E) Automation Test Developer

Bagian ini berisi mengenai panduan untuk membuat kode, menggunakan *third-party tools*, penjelasan alur atau arsitektur dan pustaka yang ada dan/atau digunakan dalam membuat *end to end automation test* di Arch Public Website Dev.

---
---

## E2E Automation Test : Standar alur dan arsitektur untuk pembuatan *e2e automation test*

*End to end (e2e) testing* merupakan teknik pengujian untuk memastikan bahwa sistem telah berjalan sesuai alur yang telah ditentukan mulai dari awal sampai akhir di Arch Public Website Dev. *E2E testing* memiliki empat alur utama yang dibagi dalam perencanaan, perancangan, pelaksanaan, dan analisis hasil.

![](https://i.imgur.com/98gApwl.png)

## Perencanaan

Perencanaan merupakan tahap alur untuk menentukan dan membagi tugas, jadwal, dan sumber daya yang akan digunakan untuk melakukan pengujian pada sistem/modul/fitur/pembaruan/perbaikan yang akan dikerjakan.

**Input**:
Dokumen PRD,SRS, dan bentuk dokumentasi lainnya yang bisa menjelaskan sistem/modul/fitur/pembaruan/perbaikan yang akan dikerjakan.

**Output**:
**Story/Bug Card Ora** (*Description, figma, & acceptance criteria included*)

### Perancangan

Perancangan merupakan tahap alur untuk menentukan spesifikasi pengujian, pembuatan kasus uji (*test case*), analisis risiko, analisis penggunaan, dan penjadwalan pengujian dari tiap story/bug card Ora yang telah ditentukan.

**Input**:
**Story/Bug Card Ora** (*Description, figma, & acceptance criteria included*)

**Output**:
**Test Plan** (*test cases included*)

## Pelaksanaan

Pelaksanaan merupakan tahap alur untuk mengeksekusi *test cases* yang telah dirancang dan direncanakan pada *test plan*, melakukan demo dan mendokumentasikan hasilnya.

**Input**:
**Test Plan** (*test cases included*)

**Output**:
**Test Plan Progress Report** dan demo feedback list

## Analisis Hasil

Analisis hasil merupakan tahap alur untuk menganalisis hasil pengujian, mengevaluasi pengujian, melakukan pengujian tambahan jika diperlukan, merilis *release notes* dan merapikan dokumen *test plan* untuk (iterasi) pengembangan atau pemeliharaan selanjutnya.

**Input**:
**Test Plan Progress Report** dan demo feedback list

**Output**:
**Release Notes** dan *evaluation report*

---

Penerapan *e2e testing* secara teknik menerapkan pendekatan *functional* dan *non functional*. Setiap pendekatan memiliki daftar teknik/pengujian yang disarankan dan bisa digunakan untuk memenuhi kebutuhan layanan.

### Functional

Daftar teknik/pengujian:

- Unit testing
- Integration testing
- Smoke testing
- Sanity testing
- Regression testing
- Exploratory testing
- User acceptance testing

### Non Functional

Daftar teknik/pengujian:

- Load testing
- Performance testing
- Stress testing
- Security testing
- Accessibility testing

Untuk mendapatkan *test coverage* maksimal disarankan untuk menerapkan semua daftar teknik diatas di setiap (iterasi) pengembangan lol :D.

---

Penerapan *e2e testing* secara eksekusi menerapkan pendekatan *manual* dan *automation* secara berurutan. Sebelum menerapkan pendekatan *automation* diharapkan untuk pengembang memastikan bahwa setiap komponen yang ada dalam pendekatan *manual* telah diterapkan, dilengkapi, atau disepakati.

### Manual

Komponen pendekatan *manual* yang perlu diterapkan dan dipastikan telah ada atau disepakati:

- Test Driven Development/Test Planning
- Test Cases and Scenarios
- Reporting
- Compatibility
- Verification and Validation

## Automation

Komponen pendekatan *automation* yang perlu diterapkan:

- Backend Automation
- Frontend Automation
- Mobile Automation (jika dibutuhkan)

Setiap *platform* pada Arch Public Website memiliki kebutuhan dan basis sistem/*tools* yang bisa jadi berbeda sehingga secara standar penerapan *e2e testing* akan lebih dirincikan pada panduan yang telah dibagi berdasarkan *platform* nya.

---
---

## E2E AT Tools : Daftar *tools* yang digunakan untuk pengembangan

- *[Cypress](https://cypress.io/)* (Backend/Frontend Automation)
- *[Monika](https://monika.hyperjump.tech/)* (Monitoring/Trigger)
- *[BetterUptime](https://betterstack.com/better-uptime)* (Monitoring)
- *[TestProjectIO](https://testproject.io/)* (E2E Automation)

---
---
