function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
   var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(100, 80, 80);
  pointLight(200, 200, 200, locX, locY, 0);
  translate(windowWidth/12, 0, 6);
  push();
  specularMaterial(250);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  cylinder(80);
  pop();
}

//box
//sphere
//torus
//cone
//cylinder
