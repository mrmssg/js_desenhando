function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  stroke("red");
  fill("yellow");
  // console.log(mouseIsPressed)
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 25);
  }
}

  
