import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { Toolbox } from "../toolbox.js";
export class laserEnemy {
    x;
    y;
    width;
    height;
    velocity;

    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
        this.player = new Player(this.pencil, this.canvas);
        this.enemy =  new Enemy(this.pencil, this.canvas)
        this.toolbox = new Toolbox();
    }








    shoot(){
        console.log("Firing Barrage!")
    }
}