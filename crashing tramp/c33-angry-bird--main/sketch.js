const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,ground,bogie1,bogie2,bogie3,chain1,chain2;
function preload() {
    bg=loadImage("images/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    bogie1= new Bogie(50,170,50,50);
    bogie2= new Bogie(150,170,50,50);
    bogie3= new Bogie(250,170,50,50);
    rock= new Rock(1100,200,100,100);
    chain1=new Chain(bogie1.body,bogie2.body);
    chain2 =new Chain(bogie2.body,bogie3.body);


function draw(){
        background(bg);      
    Engine.update(engine);
    //strokeWeight(4);
    ground.show();
   
    chain1.show();
    chain2.show();
    rock.show();
    bogie1.show();
    bogie2.show();
    bogie3.show();    
}

}



function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
       Matter.Body.applyForce(bogie3.body,{x:bogie3.body.position.x,y:bogie3.boyd.position.y},{x:0.5,y:0});

    }



}

