var y = 400;
var x = 100;
var ball;
var balls = [];
function setup(){
createCanvas(550,550);
background(100);



}

function draw(){

   background(100);
    for(var i =0; i<balls.length;i++){
        balls[i].show();
        if(balls[i].y >0  ){
        balls[i].move(-3);
    }
    else
    balls.splice(i,1);
}



if(keyIsDown(LEFT_ARROW) && x>=0  ){
    x-=5;
}
else{
    x=x;
}

if(keyIsDown(RIGHT_ARROW) && x<=520 ){
    x+=5;
}
else{x=x;}

fill(0,344,0);
rect(x,425,25,50);


}

function mousePressed(){
balls.push(new Ball(x,425));
}


function Ball(x,y){
    this.x =x;
    this.y = y;
    this.show=function(){
        fill(0,200,100,50);
        ellipse(this.x,this.y,10,10);    }
    
   this.move = function(dir){
        this.y+=dir;

       
   }
}