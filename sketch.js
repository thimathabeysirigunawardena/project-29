const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;







var a;
var circles=[];

var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var engine, world

function setup() {
  createCanvas(800,800);
  stroke(255)
  

  
 camera=new Camera(width/2,height/2,0.5);
 camera.on();
  a=height;
  circles.push(width/2)

  block1= new BlockClass(330,235,30,40)
  block2= new BlockClass(360,235,30,40)
  block3= new BlockClass(390,235,30,40)
  block4= new BlockClass(420,235,30,40)
  block5= new BlockClass(450,235,30,40)
  block6= new BlockClass(360,195,30,40)
  block7= new BlockClass(390,195,30,40)
  block8= new BlockClass(420,195,30,40)
  block9= new BlockClass(390,155,30,40)




}

function draw() {
  
  


  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  

  












  camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  camera.zoom=camera.zoom+0.01
 camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
  camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 