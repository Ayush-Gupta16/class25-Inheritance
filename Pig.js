class Pig extends BaseClass{
    constructor(x, y, width , height) {
      super(x,y,width,height)
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      
      this.image= loadImage("sprites/enemy.png");
     
    }
    display(){
     super.display();
  };
}
  