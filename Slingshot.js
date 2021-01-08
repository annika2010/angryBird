class SlingShot{
    //passing a bodyA and a pointB as construtor attributes
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //to pass point b as a second option
        this.pointB = pointB;
        //to create sling from matter.constraint class
        this.sling = Constraint.create(options);
        //adding the sling to the world
        World.add(world, this.sling);
    }

    //passing null as body A so that the bird can be released
    fly(){

        this.sling.bodyA=null;

    }

    display(){
        
        // to display the line only when something is in body a
        if(this.sling.bodyA){

            //namespacing
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //to thicken the line
            strokeWeight(4);
            //draw a line bw bodyA and point B
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }


     }
 }
    
