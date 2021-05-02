 const Engine = Matter.Engine;
 const Bodies = Matter.Bodies;
 const World = Matter.World;
 const Constraint = Matter.Constraint;

 var engine,world;
 var ball;
 var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;


function setup() {
  createCanvas(1000,700);
 engine = Engine.create()
 world = engine.world;
ground = new Ground(400,600,800,20);
box1 = new Box(500,100,50,50);
box2 = new Box(500,100,50,50);
box3 = new Box(500,100,50,50);
box4 = new Box(500,100,50,50);
box5 = new Box(500,100,50,50);
box6 = new Box(600,100,50,50);
box7 = new Box(600,100,50,50);
box8 = new Box(600,100,50,50);
box9 = new Box(600,100,50,50);
box10 = new Box(600,100,50,50);



}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  drawSprites();
  ground.display()
  box1.display()
  box2.display()
    box3.display()
box4.display()
 box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  
}
