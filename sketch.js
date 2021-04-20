const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var sherlock, backp, back
var mart
var ruby
var theifp, theif
var w1, w2, w3
var button

function setup() {
  createCanvas(800,400);
  theifp=loadImage("Theif.png");
  backp=loadImage("back.jpeg")
  engine = Engine.create();
	world = engine.world;

  sherlock=new Sherlock(100, 320);
  mart=new Mart(100, 100)
  ruby=new Ruby(400, 360)
  w1=createSprite(320, 370, 20, 180)
  w2=createSprite(460, 370, 20, 180)
  w3=createSprite(390, 290, 180, 20)
  button=createSprite(700, 100, 20, 20)
  back=createSprite(400, 200, 40, 40);



  back.addImage(backp)
	Engine.run(engine);


}

function draw() {
  background(255, 100, 30); 

  theives();

  drawSprites();
  sherlock.x=mouseX
  sherlock.y=mouseY


  sherlock.display();
  mart.display();
  ruby.display();
  w1.display();
  w2.display();
  w3.display();
  button.display();
}

function theives(){
  if(frameCount%50===0){
    theif=createSprite(Math.round(random(200, 700)), 330, 40, 40)
    theif.addImage(theifp)
    theif.scale=0.8
    theif.lifetime=100;
  }
}