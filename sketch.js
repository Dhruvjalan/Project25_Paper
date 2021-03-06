
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperobj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperobj = new Paper(200,height-50,20);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperobj.display();
  groundObject.display();
  dustbinObj.display();

  if(keyWentDown(UP_ARROW)) {
	Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:100,y:-78})
}
  }
 

