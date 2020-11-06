class Head {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
        }
        this.width = width;
        this.height = height;
        this.head = Bodies.rectangle(x,y,width,height,options);
        
        World.add(world,this.head);
        
    }
   
     display(){
        
        rectMode(CENTER);
        rect(this.head.position.x,this.head.position.y,this.width,this.height);
        
     }
}

