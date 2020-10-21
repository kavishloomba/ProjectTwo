//Creating sprite using sprite sheets for animation


let platformAnim;
let platform;
const canvasH = 1000;
const canvasW = 1000;
let boyAnim;
let boy;
let boyStillSprite;
let boyStill;

function preload() {
  const platformSprite = loadSpriteSheet("Sprites/Platform.png" , 32, 32, 1);
  const boySprite = loadSpriteSheet("Sprites/Hero.png", 30, 30, 3);
  boyStillSprite = loadSpriteSheet("Sprites/Hero.png", 30, 30, 1);
  platformAnim = loadAnimation(platformSprite);
  boyAnim = loadAnimation(boySprite);
  boyStill = loadAnimation(boyStillSprite);
  boy = createSprite(canvasW/2, canvasH/2, 30, 30)
  platform = createSprite(canvasW/2, canvasH/2, 32, 32);
}

function setup() {
  createCanvas(canvasW, canvasH);
  platform.addAnimation('platform', platformAnim);
  boy.addAnimation("move", boyAnim);
  boy.addAnimation("still", boyStill);
  platform.addAnimation(platformAnim);
  platform.setDefaultCollider();
  boy.setDefaultCollider();
}

function draw() {  
  background(255, 255, 255);
  update(boy);
  drawSprite(platform);
  
} 

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  boy.limitSpeed(boy.moveSpeed);
  drawSprite(object);
}







// Draw the ground tiles
  //for (var x = 0; x < 840; x += 70) {
    //tile_sprite_sheet.drawFrame('snow.png', x, 350);
  //}

  // Draw the sign tiles
  //tile_sprite_sheet.drawFrame('signExit.png', 770, 280);
  //tile_sprite_sheet.drawFrame('signRight.png', 0, 280);


  //draw some more stuff
  //tile_sprite_sheet.drawFrame('boxCoin.png', 70, 70);
  //tile_sprite_sheet.drawFrame('boxCoinAlt.png', 140, 70);