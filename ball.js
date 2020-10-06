class Ball {
    constructor(x,y) {
        
        var options = {
            restitution : 0.5,density : 0.3
        }
        this.body = Bodies.circle(x,y,30,options);
        this.radius = 80;
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
       
        pop();
    }

}