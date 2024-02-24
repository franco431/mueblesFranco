let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.carousel-container');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

function autoSlide() {
    moveSlide(1);
}

setInterval(autoSlide, 3000);
