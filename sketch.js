const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var rubber1, plane;
var hammer;
var stone, sand;
var iron;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane = new Plane(400, 695, 800,30);
	rubber1 = new Rubber(600,200, 40);
    rubber2 = new Rubber(640, 240, 10)
    rubber3 = new Rubber(680, 280, 25)
    hammer = new Hammer(30, 90, 30, 90)
    stone = new Stone( 200, 20, 75, 75)
    sand1 = new Sand(300,150, 5)
    sand2 = new Sand(305,150, 5)
    sand3 = new Sand(310,150, 5)
    sand4 = new Sand(315,150, 5)
    iron = new Iron( 550, 50, 100, 75)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);

  plane.display();


  hammer.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();




  drawSprites();

}



