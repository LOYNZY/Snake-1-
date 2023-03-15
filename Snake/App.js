// Initialize the game canvas and set its dimensions
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
const canvasWidth = 600;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Define the initial position and size of the snake
let snakeX = 100;
let snakeY = 100;
let snakeWidth = 20;
let snakeHeight = 20;
let snakeXSpeed = 0;
let snakeYSpeed = 0;

// Define the initial position and size of the food
let foodX = Math.floor(Math.random() * (canvasWidth - snakeWidth));
let foodY = Math.floor(Math.random() * (canvasHeight - snakeHeight));
let foodWidth = 10;
let foodHeight = 10;

// Define the score variable and initialize it to zero
let score = 0;

// Define the game loop function
function gameLoop() {
  // Clear the canvas before each frame
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  // Update the snake's position based on its speed
  snakeX += snakeXSpeed;
  snakeY += snakeYSpeed;

  // Draw the snake
  context.fillStyle = "green";
  context.fillRect(snakeX, snakeY, snakeWidth, snakeHeight);

  // Draw the food
  context.fillStyle = "red";
  context.fillRect(foodX, foodY, foodWidth, foodHeight);

  // Check if the snake has collided with the food
  if (snakeX < foodX + foodWidth &&
      snakeX + snakeWidth > foodX &&
      snakeY < foodY + foodHeight &&
      snakeY + snakeHeight > foodY) {
    // If there's a collision, increase the score and move the food to a new position
    score++;
    foodX = Math.floor(Math.random() * (canvasWidth - snakeWidth));
    foodY = Math.floor(Math.random() * (canvasHeight - snakeHeight));
  }

  // Draw the score on the canvas
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Score: " + score, 10, 30);

  // Check if the snake has collided with the walls
  if (snakeX < 0 || snakeX + snakeWidth > canvasWidth ||
      snakeY < 0 || snakeY + snakeHeight > canvasHeight) {
    // If there's a collision, end the game
    clearInterval(intervalId);
    alert("Game over! Your score was " + score);
  }
}

// Define the keydown event listener to handle arrow key input
document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowLeft") {
    snakeXSpeed = -5;
    snakeYSpeed = 0;
  } else if (event.code === "ArrowRight") {
    snakeXSpeed = 5;
    snakeYSpeed = 0;
  } else if (event.code === "ArrowUp") {
    snakeYSpeed = -5;
    snakeXSpeed = 0;
  } else if (event.code === "ArrowDown") {
    snakeYSpeed = 5;
    snakeXSpeed = 0;
  }
});

// define the key codes for the arrow keys and WASD keys
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const W_KEY = 87;
const A_KEY = 65;
const S_KEY = 83;
const D_KEY = 68;

// add an event listener to detect when a key is pressed
document.addEventListener("keydown", handleKeyDown);

// define a function to handle keydown events
function handleKeyDown(event) {
  switch (event.keyCode) {
    case LEFT_ARROW:
    case A_KEY:
      // move the snake left
      break;
    case UP_ARROW:
    case W_KEY:
      // move the snake up
      break;
    case RIGHT_ARROW:
    case D_KEY:
      // move the snake right
      break;
    case DOWN_ARROW:
    case S_KEY:
      // move the snake down
      break;
  }
}


// Start the game loop and update it 60 times per second
const intervalId = setInterval(gameLoop, 1000 / 60);
