function preload() {
  // put preload code here
}

let externalPadding,
  internalPadding,
  xPadding,
  yPadding,
  eltW,
  eltH,
  columns,
  rows,
  xRandom,
  yRandom;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  externalPadding = 30;
  internalPadding = 20;
  yPadding = 4;
  xPadding = 2;
  eltW = 4;
  eltH = 12;
  xRandom = 4;
  yRandom = 1;

  columns = round(
    (windowWidth - externalPadding * 2 - internalPadding * 2) /
      (eltW + xPadding)
  );

  rows = round(
    (windowHeight - externalPadding * 2 - internalPadding * 2) /
      (eltH + yPadding)
  );

  background("#e5e6f8");
  noStroke();
  fill("#3c3a47");
  rect(
    externalPadding,
    externalPadding,
    windowWidth - externalPadding * 2,
    windowHeight - externalPadding * 2
  );

  let startX = (windowWidth - columns * (eltW + xPadding) + xPadding) / 2;
  let startY = (windowHeight - rows * (eltH + yPadding) + yPadding) / 2;

  //grid
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      fill("#92a4ba");
      let xpos = startX + i * (eltW + xPadding) + random(-xRandom, xRandom);
      let ypos = startY + j * (eltH + yPadding) + random(-yRandom, yRandom);
      rect(xpos, ypos, eltW, eltH);
    }
  }
}

function draw() {
  // put drawing code here
}
