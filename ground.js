class Ground{
constructor(x,y,w,h){
var option={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,w,h,option);
this.w=w;
this.h=h;

World.add(world,this.body);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x, pos.y, this.width, this.height);
    

}

}