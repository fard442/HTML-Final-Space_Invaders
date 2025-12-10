import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Toolbox } from "../toolbox.js";
export class laserPlayer {
    x=200;
    y=200;
    width=50;
    height=75;
    velocity;
    pencil;
    canvas;

    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
        this.player = new Player(this.pencil, this.canvas);
        this.enemy = new Enemy(this.pencil, this.canvas)
        this.toolbox = new Toolbox();
    }
    playerLaserModel = document.getElementById("playerLaser")
    

    drawPlayerLaser(){
        // if ( == ){
        //     console.log("44")
        // }
        console.log("worked");
        // console.log(this);
        this.player.pencil.drawImage(playerLaser, this.player.x + 23, this.player.y + 100, this.width, this.height);
    }
    // this.drawPlayerLaser();


    shoot(){
        console.log("Firing Barrage!")
        // this.drawPlayerLaser()

        console.log(this.pencil)
        // console.log()
        // this.drawPlayerLaser();
    }
}