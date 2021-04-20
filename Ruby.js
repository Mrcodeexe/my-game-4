class Ruby{

    constructor(x,y){
        var options = {
            restitution:1,
            density:0.5,
            friction:1
        }
        this.image=loadImage("ruby.jpeg")
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(this.x, this.y, 80, 80, options)
        World.add(world, this.body)

    }

    display()
    {
        push()
        imageMode(CENTER)
        image(this.image, this.x, this.y, 80, 80);
        pop();

    }

}