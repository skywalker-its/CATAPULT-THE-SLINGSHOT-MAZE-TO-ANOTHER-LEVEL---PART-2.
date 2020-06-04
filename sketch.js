
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
const Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Constraint = Matter.Constraint;

    var engine,world;
    var ground,plain1,plain2;
    var box,chain;
    
function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,580,1800,50);
    plain1 = new Ground(1000,260,280,20);
    plain2 = new Ground(150,450,280,20);
    plain3 = new Ground(900,550,700,220);
    box = new Box(50,400,49,40);
    box1 = new Box(100,400,50,40);
    box2 = new Box(150,400,50,40);
    box3 = new Box(200,400,50,40);
    box4 = new Box(250,400,50,40);
    box5 = new Box(75,350,90,40);
    box6 = new Box(230,350,90,40);
    box7 = new Box(150,300,240,20);
    box8 = new Box(70,230,50,100);
    box9 = new Box(150,250,90,40);
    box10 = new Box(230,230,50,100);

    box11 = new Box(1000,220,50,40);
    box12 = new Box(950,220,50,40);
    box13 = new Box(900,220,50,40);
    box14 = new Box(1050,220,50,40);
    box15 = new Box(1100,220,50,40);
    box16 = new Box(950,170,50,40);
    box17 = new Box(1000,170,50,40);
    box18 = new Box(1050,170,50,40);
    box19 = new Box(975,120,50,40);
    box20 = new Box(1025,120,50,40);
    box21 = new Box(1000,70,50,40);

    ball = new Ball(615,250,25);
    chain = new Chain(ball.body,{x:615,y:250});
}
 
 
function draw() { 
   background("#00FFFF"); 
   Engine.update(engine);
   strokeWeight(3);
   ground.display();
   plain1.display();
   plain2.display();
   plain3.display();
   box.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   chain.display();
   ball.display();
}
 
function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased() {
    chain.Fly(); 
  }

  