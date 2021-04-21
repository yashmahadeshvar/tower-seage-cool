const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var pig1;
var log1,polygon1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground2 = new ground(600,height,1200,20);

    //base row
    box1 = new Box(350,235,50,60);
    box2 = new Box(400,235,50,60);
    box3 = new Box(450,235,50,60);
    box4 = new Box(500,235,50,60);
    box5 = new Box(550,235,50,60);
    // middle row
    box6 = new Box(400,195,50,60);
    box7 = new Box(450,195,50,60);
    box8 = new Box(500,195,50,60);

    //top row
    box9 = new Box(450,155,50,60);

    polygon1 = new Polygon(100,100);

}

function draw(){
    background("white");
    Engine.update(engine);
    ground2.display();

    //base row
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    // middle row
    box6.display();
    box7.display();
    box8.display();
    // top row
    box9.display();
   
    polygon1.display();

}
