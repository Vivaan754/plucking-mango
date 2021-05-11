class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:1,
            stiffness:0.01
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA!=null){
            var ptA=this.sling.bodyA.position;
            var ptB=this.sling.pointB;
            strokeWeight(3);
            line(ptA.x,ptA.y,ptB.x,ptB.y);
        }        
    }
    attatch(body){
        this.sling.bodyA=body;
    }
}