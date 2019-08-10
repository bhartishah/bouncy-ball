const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={
        restitution:1.0
    }
    var ball1_options={
        restitution:1.0
    }

    ball=Bodies.circle(200,100,50,ball_options);
    ball1=Bodies.circle(300,100,50,ball1_options);

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    World.add(world,ball);
    World.add(world,ball1);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("brown");
     rect(ground.position.x,ground.position.y,400,20);
     
     ellipseMode(RADIUS);
     ellipse(ball.position.x,ball.position.y,50,50);
     ellipse(ball1.position.x,ball.position.y,50,50);


}