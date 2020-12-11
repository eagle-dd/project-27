class Bob {
    constructor(x,y,radius){
        

    var options ={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2

    }
    this.body=Matter.Bodies.circle(x,y,radius,[options]);
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.width=width;
    this.height=height;
    World.add(world,this.body);

    
}
display(){
    
    ellipse(this.x, this.y, this.radius, this.radius );
}
}