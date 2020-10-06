const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,bin;

function preload()
{
  image1 = loadImage("dustbingreen.png");	
}

function setup() {
	createCanvas(800, 500);
 
  
	engine = Engine.create();
	world = engine.world;

  
  ground = new Ground(400,450,1000,20);
  ball = new Ball(100,400);
  bin1=new Bin(705,390,20,100);
  bin2=new Bin(455,390,20,100);
	bin3=new Bin(580,435,280,20);
	
  
  Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  bin1.display();
  bin2.display();
  bin3.display();
  imageMode (CENTER);
  image(image1,580,320,300,250);
  ball.display();
  ground.display();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Body.applyForce(ball.body,ball.body.position,{x:+40,y:-30});
  }

}