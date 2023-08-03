function showSlide(slideId) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));

  const slideToShow = document.getElementById(slideId);
  slideToShow.style.display = "block";
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
    showSlide(slideId);
  } else {
    // Form not valid, display error messages if needed
    alert("Harap isi semua kolom yang diperlukan sebelum melanjutkan.");
  }
}

// Show the first slide by default
showSlide("slide2");
