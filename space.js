
function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  // Draw the dark space background.
  background(10, 10, 40);

  // Draw stars in different positions.
  drawStar(50, 50, 12);
  drawStar(150, 100, 8);
  drawStar(250, 40, 10);
  drawStar(400, 80, 12);
  drawStar(550, 50, 8);
  drawStar(500, 180, 10);
  drawStar(100, 250, 9);
  drawStar(300, 300, 12);

  // Draw planets.
  drawPlanet(130, 180, 70, color(180, 80, 220));
  drawPlanet(470, 270, 90, color(50, 160, 255));

  // Draw Saturn and its ring.
  drawSaturn(350, 110, 45);

  // Draw a rocket.
  drawRocket(80, 330, 0.8);

  // Draw a spaceship that follows the mouse.
  drawSpaceship(mouseX, mouseY, 1);

  // Display the title.
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("My Space Adventure", 300, 25);
}

// Draws a star at the specified position and size.
function drawStar(x, y, size) {
  fill(255, 255, 180);
  noStroke();
  circle(x, y, size);

  // Add a glowing cross to the star.
  rect(x - size / 6, y - size, size / 3, size * 2);
  rect(x - size, y - size / 6, size * 2, size / 3);
}

// Draws a planet at a given position, size, and color.
function drawPlanet(x, y, size, planetColor) {
  fill(planetColor);
  noStroke();
  circle(x, y, size);

  // Add a highlight to make the planet look round.
  fill(255, 255, 255, 70);
  circle(x - size / 5, y - size / 5, size / 3);
}

// Draws Saturn with its ring.
function drawSaturn(x, y, size) {
  // Draw the ring behind the planet.
  noFill();
  stroke(220, 200, 150);
  strokeWeight(7);
  ellipse(x, y, size * 2, size * 0.6);

  // Draw the planet.
  noStroke();
  fill(240, 190, 100);
  circle(x, y, size);

  // Draw the ring's front edge.
  noFill();
  stroke(255, 220, 160);
  strokeWeight(3);
  arc(x, y, size * 2, size * 0.6, 0, 180);

  noStroke();
}

// Draws a rocket at a given position and scale.
function drawRocket(x, y, scale) {
  // Local variable: bodyWidth controls the rocket's width.
  let bodyWidth = 30 * scale;

  push();
  translate(x, y);
  scaleLocal(scale);

  // Rocket flame.
  fill(255, 120, 20);
  triangle(-10, 20, 10, 20, 0, 45);

  // Rocket body.
  fill(230);
  rect(-bodyWidth / 2, -20, bodyWidth, 45, 10);

  // Rocket nose.
  fill(255, 70, 70);
  triangle(-bodyWidth / 2, -20, bodyWidth / 2, -20, 0, -45);

  // Rocket window.
  fill(80, 200, 255);
  circle(0, -5, 12);

  // Rocket fins.
  fill(255, 70, 70);
  triangle(-bodyWidth / 2, 5, -bodyWidth / 2 - 12, 22, -bodyWidth / 2, 22);
  triangle(bodyWidth / 2, 5, bodyWidth / 2 + 12, 22, bodyWidth / 2, 22);

  pop();
}

// Draws a spaceship at the given position and size.
function drawSpaceship(x, y, size) {
  // Local variable: shipWidth controls the ship's body width.
  let shipWidth = 60 * size;

  push();
  translate(x, y);

  // Spaceship wings.
  fill(100, 220, 180);
  triangle(
    -shipWidth / 2, 0,
    -shipWidth / 2 - 15 * size, 15 * size,
    -shipWidth / 4, 12 * size
  );
  triangle(
    shipWidth / 2, 0,
    shipWidth / 2 + 15 * size, 15 * size,
    shipWidth / 4, 12 * size
  );

  // Spaceship body.
  fill(220);
  ellipse(0, 0, shipWidth, 25 * size);

  // Cockpit.
  fill(50, 180, 255);
  ellipse(0, -7 * size, 22 * size, 15 * size);

  // Engine glow.
  fill(255, 150, 30);
  triangle(
    -10 * size, 10 * size,
    10 * size, 10 * size,
    0, 25 * size
  );

  pop();
}

// Calculates and returns the size of a planet's highlight.
function calculateHighlightSize(planetSize) {
  return planetSize * 0.3;
}

// Helper function to scale the rocket's drawing.
function scaleLocal(amount) {
  scale(amount);
}