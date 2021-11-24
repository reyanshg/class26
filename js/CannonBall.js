class CannonBall {
  constructor(x, y) 
  {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    World.add(world, this.body);
  }

  shoot() {
    var newAngle = cannon.angle - 28;
    // Converting degrees -> radians
    newAngle = newAngle *(3.14/180);
    // p5.Vector.fromAngle
    var velocity = p5.Vector.fromAngle(newAngle);
    // Amplify your velocity
    velocity.mult(0.5);

    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
  }

  remove(index){
    Matter.Body.setVelocity(this.this.body, {x:0, y:0})
    setTimeout(()=>{
         World.remove(world,this.body );
         delete balls[index];
    }, 2000);
 }

  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
