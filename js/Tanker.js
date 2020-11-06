class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.width = width;
     this.height = height;
     this.body1 = Bodies.rectangle(x,y,width,height,options);
     this.body2 = Bodies.rectangle(x,y,width,height,options); 
     this.body3 = Bodies.circle(x,y-height,width/2,options);

     World.add(world,this.body1);
     World.add(world,this.body2);
     World.add(world,this.body3);
    }

    display(){
    
      rectMode(CENTER);

    ellipse(this.body3.position.x,this.body3.position.y,this.width,this.width);
    rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
    rect(this.body2.position.x,this.body2.position.y,this.width,this.height);

    

    };
}
