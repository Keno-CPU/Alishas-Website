const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

images[currentIndex].classList.add('active');

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Wechselt alle 3 Sekunden zum nächsten Bild