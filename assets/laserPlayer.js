import { Player } from "./player.js";
import { Toolbox } from "../toolbox.js";
export class laserPlayer {
    x;
    y=200;
    width=50;
    height=75;
    velocity;

    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
        this.player = new Player(this.pencil, this.canvas);
        this.toolbox = new Toolbox();
    }
    playerLaserModel = document.getElementById("playerLaser")


    drawPlayerLaser(){
        this.pencil.drawImage(playerLaser, this.player.x + 25, this.player.y + 125, this.width, this.height);
        console.log(this.player.x)
    }


    shoot(){
        console.log("Firing Barrage!")
        // console.log()
        this.drawPlayerLaser();
    }
}