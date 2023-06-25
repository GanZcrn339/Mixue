// toggle class active

const navbarNav = document.querySelector(".navbar-nav");
// kita ambil element dengan class .navbar-nav lalu kita masukan ke dalam
// var const navbarNav
// Ketika Hamburger Menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// kemudian kita ambil element dengan id hamburger menu lalu kita tambahkan event onclick
// yang terdapat arrow function yang dalam block function nya
// menambahkan string "active" menggunakan classlist toggle artinya
// ketika di klik "active" tersebut akan di tambahkan kedalam element dengan
// nama navbarNav. dan ketika di klik kembali maka akan menghilangkan class "active"
// tersebut

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
// kita ambil element dengan id hamburger-menu menggunakan querySelector
// dan masukan ke dalam variabel

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// kemudian kita tambahkan event click yang menerima function dengan param event
// click itu sendiri, di dalam block function nya kita tambahkan kondisi
// jika e.target(yaitu target click nya) bukan dari var hamburger(yang sebelum nya mengambil id hamburger-menu)
// dan navbarNav(bagian navbar) maka kita hapus class "active" dari
// var navbarNav(yang sebvelum nya mengambil class navbar)

// CATATAN!!!

// Beda nya addEventList
