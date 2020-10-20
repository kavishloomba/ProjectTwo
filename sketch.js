//Creating sprite using sprite sheets for animation

let spriteSheet;

function preload() {
  // Load the json for the tiles sprite sheet
  loadJSON('tiles.json', function(tile_frames) {
    // Load tiles sprite sheet from frames array once frames array is ready
     spriteSheet = loadSpriteSheet('sprites/Platform.png', 32, 32);

  });
}

function setup() {
  createCanvas(1000, 1000);


}

function draw() {
  clear();
  background(white);
  
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