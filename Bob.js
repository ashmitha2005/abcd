class Bob  {
    constructor (x,y,r ){
        var options={
            isStatic:true,
            restitutio:0.3,
            friction:0.5,
            density:1.2
        
    
        }
    
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x , this.y , this.r/2 , options);
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position; 
        push();
        translate(this.body.position.x , this.body.position.y);
        rectMode(CENTER);
        fill("pink");
        stroke("black")
        strokeWeight("0");
        ellipse(0,0,this.r, this.r);
        pop();
       
    
    }
    
    }