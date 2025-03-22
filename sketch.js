let estrellas = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    estrellas.push({
      x: random(width),
      y: random(height),
      size: random(3, 7),
      speed: random(1, 3)
    });
  }
}

function draw() {
  background(0, 0, 150);

  fill(255, 255, 0);
  noStroke();
  for (let estrella of estrellas) {
    ellipse(estrella.x, estrella.y, estrella.size, estrella.size);
    estrella.y += estrella.speed;
    if (estrella.y > height) {
      estrella.y = 0;
      estrella.x = random(width);
    }
  }

  fill(255, 150, 170);
  stroke(0);
  strokeWeight(5);
  ellipse(120, 210, 50, 50);
  ellipse(280, 210, 50, 50);

  fill(255, 182, 193);
  ellipse(200, 200, 150, 150);

  fill(200, 0, 0);
  ellipse(160, 260, 70, 40);
  ellipse(240, 260, 70, 40);

  fill(0);
  ellipse(185, 180, 15, 35);
  ellipse(215, 180, 15, 35);

  fill(255);
  ellipse(185, 170, 12, 23);
  ellipse(215, 170, 12, 23);

  fill(255, 105, 180);
  ellipse(160, 200, 20, 10);
  ellipse(240, 200, 20, 10);

  fill(0);
  ellipse(200, 210, 5, 5);
}
