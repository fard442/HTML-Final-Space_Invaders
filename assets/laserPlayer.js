import { Player } from "./player.js";
import { Toolbox } from "../toolbox.js";
export class laserPlayer {
    x;
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
        this.toolbox = new Toolbox();
    }
    playerLaserModel = document.getElementById("playerLaser")
    

    drawPlayerLaser(){
        console.log("worked");
        this.pencil.drawImage(playerLaser, this.x, this.y, this.width, this.height);
    }

    // this.drawPlayerLaser();


    shoot(){
        console.log("Firing Barrage!")
        // console.log(this.pencil)
        // console.log()
        // this.drawPlayerLaser();
    }
}