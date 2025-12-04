export class Player {
    hit = false;
    lives = 3;
    isShooting = false;
    pencil;
    canvas;
    x=200;
    y=200;
    width=50;
    height=50;
    speed=30;
    
    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
    }

    moveLeft() {
        this.x -= 30;
        console.log("this = " + this.x)
    }
    moveRight() {
        this.x += 30;
        console.log("this = " + this.x)
    }
    

    drawPlayer(){
        this.pencil.fillStyle='yellow';
        this.pencil.fillRect(this.x, this.y, this.width, this.height);
        // console.log(this);
        // console.log(this.x+"test")
    }



}