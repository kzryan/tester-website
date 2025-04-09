const zoomInTitle = () => {
    const title = document.getElementById('animated-title');
    title.style.transform = 'scale(0)';
    title.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
        title.style.transform = 'scale(2)';
    }, 100); // Slight delay before zoom
};

window.onload = zoomInTitle;


/*
const bounceTitle = () => {
    const title = document.getElementById('animated-title');
    title.style.position = 'relative';
    let position = 0;
    let direction = 1;

    const bounce = () => {
        position += direction;
        title.style.transform = `translateY(${position}px)`;

        if (position > 30 || position < 0) {
            direction *= -1; // Change direction
        }

        requestAnimationFrame(bounce);
    };

    bounce();
};

window.onload = bounceTitle;
*/
/*

//Slide in

const slideInTitle = () => {
    const title = document.getElementById('animated-title');
    title.style.transform = 'translateX(-100%)';
    title.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
        title.style.transform = 'translateX(0)';
    }, 100); // Slight delay before sliding
};
window.onload = slideInTitle;
*/

/*
//color change 
const colorChangeTitle = () => {
    const title = document.getElementById('animated-title');
    let colors = ['red', 'blue', 'green', 'orange', 'purple'];
    let index = 0;

    const changeColor = () => {
        title.style.color = colors[index];
        index = (index + 1) % colors.length;
        setTimeout(changeColor, 1000); // Change color every second
    };

    changeColor();
};
window.onload = colorChangeTitle;

*/