export class Enemy {
    canvas;
    pencil;
    x=20;
    y=0;
    width=200;
    height=100;
    speed=20;
    hit=false;

    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
    }











    enemyModel = document.getElementById("enemyShip")
    drawEnemy(){
        this.pencil.drawImage(enemyShip, this.x, this.y, this.width, this.height);
    }
}