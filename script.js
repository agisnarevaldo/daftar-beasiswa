function showSlide(slideId) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));

  const slideToShow = document.getElementById(slideId);
  slideToShow.style.display = "flex";
  slideToShow.style.flexDirection = "column";
}

function validateFormAndShowSlide(slideId) {
  const form = document.getElementById("formSlide2");
  if (form.checkValidity()) {
    const ipkTerakhir = parseFloat(
      document.getElementById("ipkTerakhir").value,
    );
    const hasilSeleksi = ipkTerakhir >= 3 ? "Diterima" : "Tidak Diterima";
    const slideHasil = document.getElementById("hasilSeleksi");
    slideHasil.textContent = `Hasil Seleksi: ${hasilSeleksi}`;
    const slide3 = document.getElementById("slide3");
    slide3.style.display = "flex";
    slide3.style.flexDirection = "column";
    showSlide(slideId);
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
showSlide("slide2");
