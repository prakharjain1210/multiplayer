class Bogie
{
constructor(x,y,width,height)
{
    var options={
        isStatic:false
    }
this.body=Bodies.rectangle(x,y,width,height,options);
this.witdh=width;
this.height=height;
this.image=loadImage("images/coach.png");
World.add(world,this.body);
Matter.body.setMass(this.body,this.body.mass*4);
}
show()
{
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.witdh,this.height);
}

}