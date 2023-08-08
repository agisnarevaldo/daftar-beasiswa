function showSlide(slideId) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));

  const slideToShow = document.getElementById(slideId);
  slideToShow.style.display = "flex";
  slideToShow.style.flexDirection = "column";
}

function validateFormAndShowSlide() {
  const form = document.getElementById("formSlide2");
  if (form.checkValidity()) {
    const ipkTerakhir = parseFloat(
      document.getElementById("ipkTerakhir").value,
    );
    const hasilSeleksi = ipkTerakhir >= 3 ? "Diterima" : "Tidak Diterima";
    const slideHasil = document.getElementById("hasilSeleksi");
    if (ipkTerakhir >= 3) {
      slideHasil.textContent = "Selamat Anda mendapatkan Beasiswa";
      showSlide("slide3");
    } else {
      alert("Mohon maaf Anda belum memenuhi persyaratan");
      showSlide("slide1");
    }
    // slideHasil.textContent = `Hasil Seleksi: ${hasilSeleksi}`;
    // const slide3 = document.getElementById("slide3");

    // showSlide(slideId);
  } else {
    // Form not valid, display error messages if needed
    alert("Harap isi semua kolom yang diperlukan sebelum melanjutkan.");
  }
}

function redirectToDashboard() {
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let nohp = document.getElementById("nohp").value;
  let semester = document.getElementById("semester").value;
  let ipkTerakhir = document.getElementById("ipkTerakhir").value;
  let beasiswa = document.getElementById("pilihanBeasiswa").value.toString();

  document.getElementById("namaDas").innerText = nama;
  document.getElementById("emailDas").innerText = email;
  document.getElementById("nohpDas").innerText = nohp;
  document.getElementById("semesterDas").innerText = semester;
  document.getElementById("ipkDas").innerText = ipkTerakhir;
  document.getElementById("beasiswaDas").innerText = beasiswa;

  showSlide("dashboard");
}

function printCard() {
  window.print();
}

// Show the first slide by default
showSlide("slide1");
