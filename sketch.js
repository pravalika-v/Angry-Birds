const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball,ground;
var myEngine, myWorld;

function setup() {
    myEngine = Engine.create();
    myWorld = myEngine.world;
    var canvas = createCanvas(500, 500);
    
    //rect(x,y,w,h) circle(x,y,r)
    //rect(100, 100, 20, 20);
    //circle(200, 200, 20);

    ball = Bodies.circle(300, 20, 30,{restitution:1.0,frictionAir:1.0});
    World.add(myWorld,ball);
    console.log(ball);

    ground = Bodies.rectangle(250,450,500,10,{isStatic:true});
    World.add(myWorld,ground);
    rectMode(CENTER);
}

function draw() {
    background("black");
    Engine.update(myEngine);
    circle(ball.position.x,ball.position.y,30);
    var pos = ground.position;
    rect(pos.x,pos.y,500,10);
}