// Select elements from the DOM
const customImage = document.getElementById('customImage');
const animationContainer = document.getElementById('animationContainer');

// Function to make the image follow the cursor
function followCursor(event) {
    // Get the position of the animation container
    const rect = animationContainer.getBoundingClientRect();

    // Check if the cursor is within the bounds of the container
    if (event.clientX >= rect.left && event.clientX <= rect.right && 
        event.clientY >= rect.top && event.clientY <= rect.bottom) {

        // Calculate the position for the image
        const x = event.clientX - rect.left - (customImage.offsetWidth / 2);
        const y = event.clientY - rect.top - (customImage.offsetHeight / 2);

        // Update the image's position
        customImage.style.left = x + 'px';
        customImage.style.top = y + 'px';
    }
}

// Add event listener to the animation container
animationContainer.addEventListener('mousemove', followCursor);
