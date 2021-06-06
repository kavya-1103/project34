
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box=[]
var ground
var engine,world,ball,slingshot

function preload(){
backGround=loadImage('images/GamingBackground.png');
monster=loadImage('images/Monster-01.png');
hero=loadImage('images/Superhero-01.png');
}	


function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(650,500,1300,20)
ground2=new Ground(1200,200,100,20)

monster1=new Monster(1200,100)

for(var i=0;i<6;i++){
box[i]=new Box(800,100,70,70)
}

for(var i=6;i<12;i++){
	box[i]=new Box(900,100,70,70)
	}

	for(var i=12;i<18;i++){
		box[i]=new Box(1000,100,70,70)
		}

		
	for(var i=18;i<24;i++){
		box[i]=new Box(700,100,70,70)
		}


		ball=new Stone(200,200)
		slingshot=new SlingShot(ball.body,{x:500,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backGround);

  ground.display()
  monster1.display()

  for(var i=0;i<6;i++){
	box[i].display();}


	for(var i=6;i<12;i++){
	
		box[i].display();}
	
		for(var i=12;i<18;i++){
			
			box[i].display();}
	
			
		for(var i=18;i<24;i++){
			
			box[i].display();}

			ball.display();
			slingshot.display();
	
  drawSprites();

}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}



