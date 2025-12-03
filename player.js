export class Player {
    hit = false;
    lives = 3;
    isShooting = false;
    pencil;
    canvas;
    x=200;
    y=200;

    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
    }

    drawPlayer(){
        this.pencil.fillStyle='yellow'
        this.pencil.fillRect(this.x, this.y, 50, 50)
    }




}