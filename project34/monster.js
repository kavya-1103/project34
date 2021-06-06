class Monster{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y ,200,220, options);
        this.width = 300;
        this.height = 220;
    this.image= loadImage('images/Monster-01.png');

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue")
        imageMode(CENTER);
        image( this.image,0, 0, this.width, this.height);
        
        pop();
      }
}