let spawner, player;
let circlesGroup;
let money = 0;
let moneyGain = 1;

function setup() {
  createCanvas(1250, 500);

  // Create groups
  circlesGroup = new Group();

  // Create spawner (for visual reference)
  spawner = createSprite(width / 2, height / 2, width / 1.75, height / 1.75);
  spawner.shapeColor = color(255);

  // Create player
  player = createSprite(width / 2, height - 50, 20, 20);
  player.shapeColor = color(255, 0, 0);
}

function draw() {
  background('gray');

  // Display money
  fill(255);
  textSize(32);
  text("Money: " + money, 30, 50);

  // Spawn circles
  spawnCircles();

  // Check for collisions
  player.overlap(circlesGroup, collect);

  // Movement
  if (keyDown("a")) player.position.x -= 5;
  if (keyDown("d")) player.position.x += 5;
  if (keyDown("w")) player.position.y -= 5;
  if (keyDown("s")) player.position.y += 5;

  drawSprites();
}

function spawnCircles() {
  if (circlesGroup.length < 65) {
    let circle = createSprite(
      random((width / 2) - (width / 4), (width / 2) + (width / 4)),
      random((height / 2) - (height / 4), (height / 2) + (height / 4)),
      30,
      30
    );
    circle.shapeColor = color(200, 0, 0);
    circlesGroup.add(circle);
  }
}

function collect(collector, collected) {
  collected.remove();
  money += moneyGain;
}
