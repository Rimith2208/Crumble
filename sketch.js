
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
    boxposition=1200
   boxy=610
   boxleftSprite=createSprite(boxposition,boxy,20,100)
   boxleftSprite.shapeColor="red"
   boxleftbody=Bodies.rectangle(boxposition+20,boxy,20,100,{isStatic:true})
 World.add(world,boxleftbody)

 boxbaseSprite=createSprite(boxposition+100,boxy+40,200,20)
 boxbaseSprite.shapeColor="red"
 boxbasebody=Bodies.rectangle(boxposition+100,boxy+25,200,20,{isStatic:true})
World.add(world,boxbasebody)

boxrightSprite=createSprite(boxposition+200,boxy,20,100)
boxrightSprite.shapeColor="red"
boxrightbody=Bodies.rectangle(boxposition+180,boxy,20,100,{isStatic:true})
World.add(world,boxrightbody)
paper1=new Paper(200,450,40)
}


function draw() {
  rectMode(CENTER);
  background("White");
  paper1.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
	}
}



