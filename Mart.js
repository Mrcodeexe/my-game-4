class Mart{

    constructor(x,y){
        var options = {
            restitution:1,
            density:0.5,
            friction:1
        }
        this.image=loadImage("Mart.png")
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(this.x, this.y, 100, 100, options)
        World.add(world, this.body)

    }

    display()
    {
        push()
        imageMode(CENTER)
        image(this.image, this.x, this.y, 100, 100);
        pop();

            
    }

}