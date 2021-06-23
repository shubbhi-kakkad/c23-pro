var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);

	// fill("red");
	boxleftsprite=createSprite(width/2-100,610,20,100)
	boxleftsprite.shapeColor="red"

	boxrightsprite=createSprite(width/2+200,610,20,100)
	boxrightsprite.shapeColor="red"

	boxbottomsprite=createSprite(width/2+50,height-35,300,20)
	boxbottomsprite.shapeColor="red"


	boxBodyleft=Bodies.rectangle(380,height-35,20,100);
	World.add(world,boxBodyleft);

	boxBodyright=Bodies.rectangle(580,height-35,20,100);
	World.add(world,boxBodyright);

	boxBodybottom=Bodies.rectangle(400,height-40,200,20);
	World.add(world,boxBodybottom);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)	
  {
		Matter.Body.setStatic(packageBody,false)

    
  }
}



