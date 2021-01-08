class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    //to set angle to the object using Matter.Body  class
    Matter.Body.setAngle(this.body, angle);
  }
}

