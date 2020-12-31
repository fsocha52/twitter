
var bottombox, leftbox, rightbox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    
    
    
}

function setup() {
    
    createCanvas(800, 700);
    rectMode(CENTER);
    
    
    engine = Engine.create();
    world = engine.world;
    
    var options = {
      
      isStatic : true
      
    }
    
    var paperObject = new Paper(100,100,100);
    
    bottombox = Bodies.rectangle(400,640,200,20,options);
    World.add(world, bottombox);
    
    leftbox = Bodies.rectangle(300,620,20,100,options);
    World.add(world, leftbox);
    
    rightbox = Bodies.rectangle(500,620,20,100,options);
    World.add(world, rightbox);
    
    var groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor=color("Yellow");
    
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
    Engine.run(engine);
    
}


function draw() {
    
    rectMode(CENTER);
    background(0);
    
    var round = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
    
    drawSprites();
    
    fill("White");
    rect(bottombox.position.x + 250, bottombox.position.y+20, 200, 20);
    rect(leftbox.position.x + 250, leftbox.position.y, 20, 100);
    rect(rightbox.position.x + 250, rightbox.position.y, 20, 100);
    
}
