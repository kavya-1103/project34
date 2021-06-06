class Stone{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.005,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y ,400,200, options);
        this.width = 400;
        this.height = 200;
    this.image= loadImage('images/Superhero-01.png');

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