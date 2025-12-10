export class Player {
    hit = false;
    lives = 3;
    pencil;
    canvas;
    x=200;
    y=400;
    width=100;
    height=100;
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
    
    //grabs picture for player
    playerModel = document.getElementById("playerShip")
    drawPlayer(){
        this.pencil.drawImage(playerShip, this.x, this.y, this.width, this.height);
    }



}