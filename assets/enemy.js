export class Enemy {
    canvas;
    pencil;
    x=20;
    y=0;
    width=200;
    height=100;
    speed=5;
    hit=false;

    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
    }


    moveEnemyLeft() {
        this.x -= this.speed;
    }
    moveEnemyRight() {
        this.x += this.speed;
    }








    enemyModel = document.getElementById("enemyShip")
    drawEnemy(){
        this.pencil.drawImage(enemyShip, this.x, this.y, this.width, this.height);
    }
}