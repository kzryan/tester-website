const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;
const boxSize = 20;

// Prevent default arrow key scrolling behavior
document.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
    }

    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// Draw the game elements
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Snake
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? 'green' : 'lightgreen';
        ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
    });

    // Draw the food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);

    // Move the Snake
    let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('score').innerText = 'Score: ' + score;
        food = {
            x: Math.floor(Math.random() * (canvas.width / boxSize)),
            y: Math.floor(Math.random() * (canvas.height / boxSize)),
        };
    } else {
        snake.pop(); // Remove last segment if not eating food
    }

    // Check for wall collision or self-collision
    if (head.x < 0 || head.x >= canvas.width / boxSize || head.y < 0 || head.y >= canvas.height / boxSize || collision(head)) {
        clearInterval(game);
        alert('Game Over! Your score was: ' + score);
        restartGame(); // Optional: Call function to restart the game
    }

    snake.unshift(head); // Add new head
}

function collision(head) {
    return snake.slice(1).some((segment, index) => {
        if (segment.x === head.x && segment.y === head.y) {
            console.log(`Self-collision detected! Head: (${head.x}, ${head.y}), Collided with segment ${index + 1}: (${segment.x}, ${segment.y})`);
            return true;
        }
        return false;
    });
}

// Optional: Function to restart the game
let game; // Declare globally

function restartGame() {
    clearInterval(game); // Stop the old game loop
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 }; // Start moving right
    score = 0;
    document.getElementById('score').innerText = 'Score: ' + score;
    food = {
        x: Math.floor(Math.random() * (canvas.width / boxSize)),
        y: Math.floor(Math.random() * (canvas.height / boxSize)),
    };
    game = setInterval(draw, 100); // Start a fresh game loop
}

game = setInterval(draw, 100); // Start the game loop once
