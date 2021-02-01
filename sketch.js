
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1, rock1;
var hammer;
var background1;

function preload(){
	background1=loadImage("bg.png")

}

function setup(){
    var canvas = createCanvas(1200, 800);
    engine = Engine.create();
	world = engine.world;
	
    ground = new Ground(600,height,1200,10)



    balll = new Ball(400,200);
    rock1 = new Rock(700,320,70,70);

	hammer = new Hammer(50, 50)
}

function draw(){
    background(background1);
	Engine.update
	
	hammer.display();
    rock1.display();
    ball1.display();
    }


