const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1,stand2,slingshot;
var box1,polygon,polygonImg,backgroundImg;
var score = 0;

function preload(){
  getBackgroundImage();
  polygon_img=loadImage("polygon.png");
  
}

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    

    ground = new Ground(400,580,800,10);
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)

    box1 = new Box(300,275,30,40);
 
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);

  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);

  polygon = Bodies.circle(100,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:100})



}

function draw() {
  if(backgroundImg)

  background(backgroundImg);
  Engine.update(engine);

  
  fill("yellow");
  ellipseMode(CENTER);
  ellipse(polygon.position.x,polygon.position.y,40);
  text("Score : "+score,750,40);
  ground.display();
  stand1.display();
  stand2.display();

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

  slingshot.display()

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >=06 && hour <= 18){
    bg = "light.jpg";
  }
  else{
    bg = "Dark.jpg";
  }

backgroundImg = loadImage(bg);

}