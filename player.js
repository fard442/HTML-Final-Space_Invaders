export class Player {
    hit = false;
    lives = 3;
    isShooting = false;
    pencil;
    canvas;
    x=200;
    y=200;
    speed=30;
    
    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
    }

    moveLeft() {
        this.x -= 30;
        console.log("this = " + this.x)
    }
    

    drawPlayer(){
        this.pencil.fillStyle='yellow'
        this.pencil.fillRect(this.x, this.y, 50, 50)
        console.log(this);
        console.log(this.x+"test")
    }



}