class Rope{
    constructor(body1, body2){
        this.offsetx=0;
        this.offsetY = 200;
        var options = {
            bodyA:body1,
            bodyB:body2,
pointB:{x:this.offsetX, y:this.offsetY}

        }
        this.rope=Matter.Constraint.create(options);
        World.add(world, this.rope);

        

    }
    display(){
        var pointA= this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push()
        strokeWeight(5);
        stroke("cyan")
        line(pointA.x,pointA.y, pointB.x, pointB.y);
        pop()
    }
}