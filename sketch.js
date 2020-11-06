

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
 createCanvas(1400,500);
 engine = Engine.create();
 world = engine.world;

 head = new Head (390,420,80,40);
 ground = new Ground (700,500,1400,50);
 cannon = new Tanker (width/4,480,100,50);

}

function draw() {
background("blue");
head.display();
cannon.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}