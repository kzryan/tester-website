let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    images.forEach((img) => {
        img.classList.remove('active');
    });
    images[index].classList.add('active');
}

function moveSlide(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Initialize the carousel by showing the first image
showSlide(currentIndex);

