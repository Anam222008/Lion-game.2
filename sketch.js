var lion1,lion2,lion3,lion4,lion5,lion6,lion7,lion8,lion9,lion10,lion11,lion12,lion13;
var lion1Img,lion2Img,lion3Img,lion4Img,lion5Img,lion6Img,lionImg7,lion8Img,lion9Img,lion10Img,lion11Img,
lion12Img,lion13Img;
var background1,background2;
var background1Img,background2Img;
var invisibleGround;
var food,hole,stone,foodImg,holeImg,stoneImg,obstaclesGroup;
var END=0;
var PLAY=1;
var gameState=PLAY;
var gameOver,restart;
var score=0;

function preload(){

lion1Img=loadAnimation("lion1.png","lion2.png","lion3.png","lion4.png","lion5.png","lion6.png","lion7.png","lion8.png","lion9.png","lion10.png","lion11.png","lion12.png","lion13.png");


background1Img=loadImage("background1.jpg");
background2Img=loadImage("background2.jpg");

foodImg=loadImage("food.png");
holeImg=loadImage("hole.png");
stoneImg=loadImage("stone.png");


}


function setup() {
  createCanvas(displayWidth,displayHeight-150);

background2=createSprite(100,190);
background2.addImage(background2Img);
background2.velocityX = -5;
background2.scale=4

invisibleGround=createSprite(100,height-10,width,10);
invisibleGround.visible=false;


//form=new Form() 

lion=createSprite(width/2-500,height-120);
lion.addAnimation("lionrunning",lion1Img);
lion.scale=2.5;
}

function draw() {
  background(background2Img);
console.log(lion.y);

  if(background2.x<200){
    background2.x=width/2

    }
if(gameState===PLAY){

 score = score + Math.round(frameCount/60)

  if(keyDown("space")&&lion.y>450){
lion.velocityY = -16;
  }

  lion.velocityY = lion.velocityY + 0.8

obstacles();
}

lion.collide(invisibleGround);

if (gameState===END){
textSize(35)
text("GAMEOVER!",width/2,height/2);
}


//form.display()

 drawSprites();
 textSize(22);
text("score ="+ score,width-200,50);

 
}

function obstacles(){
  if(frameCount % 400 === 0){
var obstacle = createSprite(610,550,15,40);
obstacle.addImage(holeImg)
obstacle.velocityX = -3
obstacle.scale=.7;
obstacle.y=Math.round(random(550,600))
//obstacle.x=Math.round(random(500,600))
 
lion.depth=obstacle.depth+1
obstacle.lifetime=200;
  }

if(frameCount % 600 ===0){
var obstacle1=createSprite(610,500,15,40);
obstacle1.addImage(stoneImg)
obstacle1.velocityX=-3
obstacle1.scale=.7;
//obstacle1.x=Math.round(random(500,600))
obstacle1.y=Math.round(random(500,550))
obstacle1.lifetime=200;
lion.depth=obstacle1.depth+1

}


  
}
