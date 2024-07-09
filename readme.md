

var myEngine, myWorld;



function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
    
}