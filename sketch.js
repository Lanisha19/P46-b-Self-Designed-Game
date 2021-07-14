var mud1, mud1Img, mud2, mud2Img, mud3, mud3Img, a, b, c, d, e, f, g, h, i, j;
var home, homeImg;
var car, carImg;
var oGrp;

var PLAY=1;
var END=2;
var gameState=1;

function preload(){
  mud1Img = loadImage("mud1.png");
  mud2Img = loadImage('mud2.png');
  mud3Img = loadImage("mud3.png");

  homeImg = loadImage("home.png");

  carImg = loadImage("car1.png");
}

function setup() {
  createCanvas(800,400);

  car = createSprite(700, 370, 50, 50);
  car.addImage(carImg);

  mud1 = createSprite(400, 180, 50, 50);
  mud1.addImage(mud1Img);
  mud1.scale = 0.2;
  mud1.setCollider("rectangle",0,0, 390, 230);
  mud1.debug = false;

  mud2 = createSprite(100, 250, 50, 50);
  mud2.addImage(mud2Img);
  mud2.scale = 0.2;
  mud2.setCollider("rectangle",0,0, 450, 230);
  mud2.debug = false;

  home = createSprite(70, 70, 20, 20);
  home.addImage(homeImg);
  home.scale = 0.3;

  a = createSprite(250, 290, 50, 50);
  a.addImage(mud3Img);
  a.scale = 0.3;
  a.setCollider("rectangle",0,0, 270, 130);
  a.debug = false;

  b = createSprite(500, 110, 50, 50);
  b.addImage(mud2Img);
  b.scale = 0.2;
  b.setCollider("rectangle",0,0, 450, 230);
  b.debug = false;

  c = createSprite(200, 500, 50, 50);
  c.addImage(mud2Img);
  c.scale = 0.2;
  c.setCollider("rectangle",0,0, 450, 230);
  c.debug = false;

  g = createSprite(100, 360, 50, 50);
  g.addImage(mud1Img);
  g.scale = 0.2;
  g.setCollider("rectangle",0,0, 390, 230);
  g.debug = false;

  d = createSprite(210, 180, 50, 50);
  d.addImage(mud3Img);
  d.scale = 0.3;
  d.setCollider("rectangle",0,0, 270, 130);
  d.debug = false;

  e = createSprite(400, 360, 50, 50);
  e.addImage(mud1Img);
  e.scale = 0.2;
  e.setCollider("rectangle",0,0, 390, 230);
  e.debug = false;

  f = createSprite(500, 260, 50, 50);
  f.addImage(mud2Img);
  f.scale = 0.2;
  f.setCollider("rectangle",0,0, 450, 230);
  f.debug = false;

  h = createSprite(700, 250, 50, 50);
  h.addImage(mud3Img);
  h.scale = 0.3;
  h.setCollider("rectangle",0,0, 270, 130);
  h.debug = false;

  i = createSprite(630, 180, 50, 50);
  i.addImage(mud1Img);
  i.scale = 0.2;
  i.setCollider("rectangle",0,0, 390, 230);
  i.debug = false;

  j = createSprite(250, 85, 50, 50);
  j.addImage(mud2Img);
  j.scale = 0.2;
  j.setCollider("rectangle",0,0, 450, 230);
  j.debug = false;

  oGrp = new Group();

}

function draw() {

  background("pink");  

  oGrp.add(mud1);
  oGrp.add(mud2);
  oGrp.add(a);
  oGrp.add(b);
  oGrp.add(c);
  oGrp.add(d);
  oGrp.add(e);
  oGrp.add(f);
  oGrp.add(g);
  oGrp.add(h);
  oGrp.add(i);
  oGrp.add(j);

  if(car.isTouching(oGrp)){
    textSize(40);
    fill("red");
    stroke("red");
    text("YOU LOSE :(", 300, 200);
    car.velocityX=0;
    car.velocityY=0;
    home.visible=false;
    car.visible=false;
    mud1.visible=false;
    mud2.visible=false;
    a.visible=false;
    b.visible=false;
    c.visible=false;
    d.visible=false;
    e.visible=false;
    f.visible=false;
    g.visible=false;
    h.visible=false;
    i.visible=false;
    j.visible=false;
  }

  if(car.isTouching(home)){
    textSize(40);
    fill("red");
    stroke("red");
    text("YOU WIN :D", 300, 200);
    car.velocityX=0;
    car.velocityY=0;
    home.visible=false;
    car.visible=false;
    mud1.visible=false;
    mud2.visible=false;
    a.visible=false;
    b.visible=false;
    c.visible=false;
    d.visible=false;
    e.visible=false;
    f.visible=false;
    g.visible=false;
    h.visible=false;
    i.visible=false;
    j.visible=false;
  }

  if(keyDown(RIGHT_ARROW)){
    car.x+=3;
  }

  if(keyDown(LEFT_ARROW)){
    car.x-=3;
  }

  if(keyDown(UP_ARROW)){
    car.y-=3;
  }

  if(keyDown(DOWN_ARROW)){
    car.y+=3;
  }

  drawSprites();
}