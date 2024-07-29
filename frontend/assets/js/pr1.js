let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(${500 * (i - slideIndex)}px)`;
    }

    slideIndex++;
    if (slideIndex >= totalSlides) { slideIndex = 0; }

    setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});
