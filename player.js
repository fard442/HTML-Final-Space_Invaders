export class Player {
    hit = false;
    lives = 3;
    isShooting = false;
    pencil;
    canvas;
    x=200;
    y=400;
    width=50;
    height=50;
    speed=30;
    
    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
    }

    moveLeft() {
        this.x -= this.speed;
    }
    moveRight() {
        this.x += this.speed;
    }
    

    drawPlayer(){
        this.pencil.fillStyle='yellow';
        this.pencil.fillRect(this.x, this.y, this.width, this.height);
    }



}