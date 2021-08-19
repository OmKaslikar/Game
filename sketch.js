var bg, bgimg, boy, boyimg;

function preload() {

  bgimg = loadImage('images/Bg.jpg');
  boyimg = loadAnimation('images/1.png','images/2.png','images/W27MMD copy 3.png','images/W27MMD copy 4.png','images/W27MMD copy 5.png','images/W27MMD copy 6.png','images/W27MMD copy 7.png','images/W27MMD copy 8.png','images/W27MMD copy 9.png','images/W27MMD copy 10.png','images/W27MMD copy 11.png','images/W27MMD copy 12.png');
}

function setup() {

  createCanvas(1000,600)

  bg = createSprite(700,300,1024,768);
  bg.addImage(bgimg);
  bg.scale = 2;

  boy = createSprite(200,540,10,10);
  boy.addAnimation('cycle',boyimg);


}

function draw() {

  background('white');

  drawSprites();

}