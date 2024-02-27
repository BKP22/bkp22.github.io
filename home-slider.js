// Get the slider container and the slider
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');

// Get all the images in the slider
const images = document.querySelectorAll('.slider img');

// Initialize index to keep track of current image
let index = 0;
const slideWidth = sliderContainer.clientWidth;

// Set initial position of slider
slider.style.transform = `translateX(${-index * slideWidth}px)`;

// Function to show the next image
function showNextImage() {
    // Increment index or reset to 0 if it exceeds the number of images
    index = (index + 1) % images.length;
    
    // Move slider to show the next image
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Automatically change images every 5 seconds
setInterval(showNextImage, 5000);
