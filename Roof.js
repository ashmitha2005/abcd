class Roof {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;



      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var Roofpos =this.body.position;
      push();
      translate(Roofpos.x , Roofpos.y)
      rectMode(CENTER);
      strokeWeight(4)
      fill(0);
      rect(0,0, this.width, this.height);
      pop();
    }
  }