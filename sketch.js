
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,300,20);
	bob2 = new Bob(220, 300, 20);
	bob3 = new Bob(240, 300, 20);
	bob4 = new Bob(260, 300, 20);
	bob5 = new Bob(280, 300, 20);
	roof1 = new Roof(650, 100, 1200, 20);
	rope1 = new Rope(bob1.body,roof1.body);
	rope2 = new Rope(bob2.body,roof1.body);
	rope3 = new Rope(bob3.body,roof1.body);
	rope4 = new Rope(bob4.body,roof1.body);
	rope5 = new Rope(bob5.body,roof1.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
  bob1.display();
  roof1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



