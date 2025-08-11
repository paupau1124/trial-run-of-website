let slideIndex = 0;
let slides, dots, slideInterval;

document.addEventListener('DOMContentLoaded', function () {
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    startAutoSlide();

    // Pause slideshow on hover
    const slideshow = document.querySelector('.slideshow-container');
    slideshow.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slideshow.addEventListener('mouseleave', startAutoSlide);

    // Allow clicking on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlides(index);
            startAutoSlide();
        });
    });
});

function showSlides(n) {
    if (!slides || slides.length === 0) return;

    // Wrap around
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Hide all slides and remove active dot class
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide and highlight the corresponding dot
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        showSlides(slideIndex + 1);
    }, 5000); // every 5 seconds
}

// Arrow navigation
function plusSlides(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex + n);
    startAutoSlide();
}
