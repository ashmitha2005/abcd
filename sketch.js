
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofobj;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,400,40);
	bobObject2 = new Bob(240,400,40);
	bobObject3 = new Bob(280,400,40);
	bobObject4 = new Bob(320,400,40);
	bobObject5 = new Bob(360,400,40);
	roofobj = new Roof(280,250,210,20);
	rope1 = new Rope(bobObject3.body , roofobj.body , -Bob.r*4 , 0);
	rope2 = new Rope(bobObject2.body , roofobj.body , -Bob.r*4,  0);
	rope3 = new Rope(bobObject4.body , roofobj.body , -Bob.r*4 , 0);
	rope4 = new Rope(bobObject1.body , roofobj.body , -Bob.r*4 , 0);
	rope5 = new Rope(bobObject5.body , roofobj.body , -Bob.r*4 , 0);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofobj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



