const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polyon;
var score=0;

function setup() {
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(600,300,200,20);
  box1=new box(540,270,30,40);
  box2=new box(570,270,30,40);
  box3=new box(600,270,30,40);
  box4=new box(630,270,30,40);
  box5=new box(660,270,30,40);  

  box6=new box(570,230,30,40);
  box7=new box(600,230,30,40);
  box8=new box(630,230,30,40);

  box9=new box(600,190,30,40);
  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon);
  slingshot1=new SlingShot(this.polygon,{x:300,y:400});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  text("SCORE:"+score,700,40);
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display(); 
  box9.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score(); 
  box9.score();
  ellipse(polygon.position.x,polygon.position.x,20,20);
  drawSprites();


}

function mouseDragged(){
  
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot1.fly();
  
}
