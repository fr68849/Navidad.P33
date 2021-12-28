const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
Events = Matter.Events;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;
var tree,treeImg;
var ground;
var ball = [];
var stand1,stand2,stand3;
var star, starImg;
var bg,bgImg;
var elf,elfImg;
var position;



function preload(){
  treeImg = loadImage("arbol.png");
  starImg = loadImage("star.png");
  elfImg = loadImage("elf.png");
  bgImg = loadImage("bg5.jpg");
 

}
function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;

 ground= new Stand(600,685,1200,15);
 stand1 = new Box(500,600);
 


  tree= Bodies.rectangle(600,80,500,600);
  World.add(world,tree);

  star=Bodies.rectangle(600,50,60,60);
  World.add(world,star);

  elf=Bodies.rectangle(600,50,60,60);
  World.add(world,elf);




  //Engine.run(engine);

 

}
function draw() {
  background(bgImg); 
  textSize(40)
  fill("white");
  
  text("Puntuación: "+score,900,40);
  Engine.update(engine);

  //if(keyCode===76){
  //  stand2.velocity.x=stand2.velocity.x+20;
  //}

  imageMode(CENTER);
  image(treeImg,600,370,570,680);
  image(starImg,595,60,99,99);
  image(elfImg,850,360,450,660);

 
  fill("gold");
  ground.display();

 stand1.display();



  if(frameCount%15===0){
    ball.push(new Ball(random(470,900),12,12));
   
  }

   for (var j = 0;j < ball.length; j++){
     ball[j].display();
   }
   
  // if(ball[i]){
  // Matter.Body.setVelocity(ball[i].body)
  // }
  

  
  }

 function mouseDragged(){
   Matter.Body.setPosition(stand1.body,{x:mouseX});
 }


  

  



