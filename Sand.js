class Sand{
    constructor(x,y,r)
    {
      var options={
        restitution:1.3,
        friction:5.0,
        density:1.0,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x, this.y, this.r, options)
      World.add(world, this.body);
  
    }
    display()
    {
        var rubberpos=this.body.position;		
        push()
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("brown");
        fill("brown");
        ellipse(0,0,this.r, this.r);
        pop()
    }
  
  }
  