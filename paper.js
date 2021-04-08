class Paper{

    constructor(){

        var options={
            isStatic:false ,
            restitution:0.3,
            friction:0,
            density:1.2,

        }
        this.image=loadImage("paper.png");




        this.body=Bodies.circle(40,640,70,options);
        World.add(world,this.body
            )

    }


    display(){

       // ellipse(40,640,70,70);
        
        var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,70,70);
			pop()


    }
}























