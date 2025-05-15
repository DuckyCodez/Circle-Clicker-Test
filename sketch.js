let circle;
let score = 0;

function setup() {
  createCanvas(600, 400);
  circle = createSprite(width / 2, height / 2, 50, 50);
  circle.shapeColor = color(100, 200, 255);
}

function draw() {
  background(30);
  
  if (mousePressedOver(circle)) {
    score++;
    circle.scale += 0.01;
    circle.position.x = random(width);
    circle.position.y = random(height);
  }
  
  drawSprites();
  
  fill(255);
  textSize(20);
  text("Score: " + score, 10, 25);
}
