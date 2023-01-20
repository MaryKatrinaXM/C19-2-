/*var spaceship,Bg,boy,gameover,coin,gun;
var spaceshipImg,coinImg,BoyImg,gunImg,BgImg,gameoverImg;
var play=1;
var end=0;
var gameState=play;
var score=0;
function setup() {

  createCanvas(800,400);
  spaceship=createSprite(320,400,20,60);
  spaceshipImg=loadImage("Spaceship.png");
  
  spaceship.addImage(spaceshipImg);
  spaceship.scale=0.15;
 
BgImg=loadImage("Bg.jpg");
Bg=createSprite(400,200);
Bg.addImage(BgImg);
Bg.velocityY=-5;

  //coinImg=loadImage("clipart44076.png");
  //gunImg=loadImage("clipart1717819.png");
  BoyImg=loadImage("clipart609236.png");
  
  //gameover=createSprite(400,400,30,80);
  //gameoverImg=loadImage("gameover.jpg");
  //gameover.addImage(gameoverImg);
  //gameover.scale=1;
  //gameover.visible=false;

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function Spawncoin(){
  if(frameCount % 70 === 0){
    coin=createSprite(400,350,50,10);
    coin.addImage(coinImg);
    coin.y=Math.round(random(5,50));
    coin.scale=0.05;
    coin.velocityY=5;
    coin.lifetime=300;
  };
  };

  function Spawngun(){
    if(frameCount % 72 === 0){
      gun=createSprite(100,700,40,70);
      gun.addImage(gunImg);
      gun.y=Math.round(random(10,500));
      gun.scale=0.1;
      gun.velocityY=6;
      gun.lifetime=300;
    };
  };

  function Spawnboy(){
    if(frameCount % 50 === 0){
      boy=createSprite(470,500,10,80);
      boy.addImage(BoyImg);
      boy.y=Math.round(random(10,300));
      boy.scale=0.05;  
      boy.velocityY=7;
      boy.lifetime=300;
    };
  };





function draw() {
  background(0);  
  text("Points:"+score,500,50);

  spaceship.x= World.mouseX;

 


 //if(gameState === play){
   // gameover.visible=false;
    if (Bg.y < 0){
      Bg.y = Bg.height/10;
    }

//    Bg.velocityY=-10;

//if(spaceship.isTouching(coin)){
  //score+=5;
//}
//else if(spaceship.isTouching(gun)){
  //score+=10;
//}


    
    if(spaceship.isTouching(boy)){
      spaceship.velocityY=0;
    //  gameState = end;
    
    
    }
  //}

/*else if(gameState === end){
  gameover.visible = true;
Bg.velocityY=0;
coin.velocityY=0;
boy.velocityY=0;
gun.velocityY=0;

}









 // Spawncoin();
  //Spawngun();
  Spawnboy();
  drawSprites();
}*/

var BG,BGImg,spaceship,spaceshipImg,coin,coinImg,boy,boyImg,gun,gunImg


function preload(){
  BGImg = loadImage("Bg.jpg");
  spaceshipImg = loadImage("Spaceship.png")
  coinImg = loadImage("coin.png")
  boyImg = loadImage("boy.png")
  gunImg = loadImage("gun.png")
}




function setup(){
  createCanvas(windowWidth,windowHeight);
  BG = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  BG.addImage(BGImg);

  spaceship = createSprite(320,400,20,60)
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.3
  
  coin = createSprite(400,350,50,10)
  coin.addImage(coinImg)
  coin.scale=0.1

  

  gun = createSprite(100,700,40,70)
  gun.addImage(gunImg)
  gun.scale = 0.1
}

function spawnBoy(){
if(frameCount %50 === 0){
  boy = createSprite(800,550,40,40);
  boy.addImage(boyImg)
  boy.scale=0.1
}
}

function draw(){
  background(0);
  spaceship.x=World.mouseX;
  spaceship.y =World.mouseY;
  drawSprites()
}