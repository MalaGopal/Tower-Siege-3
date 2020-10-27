class Box{
    constructor(x,y,w,h){
        var options = {
            restitution:0.4,
        friction:0
        
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        World.add(world,this.body);
        this.Visibility = 255;
    }
    score(){
        if(this.Visibility < 0 && this.Visibility > -105){
            score++;
        }
    }
    display(){
    if(this.body.speed < 3){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
    else
    {
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        pop();

    }
}
}