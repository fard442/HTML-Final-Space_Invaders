import { Star } from "../background.js"
export class Game {
    canvas;
    pencil;

    //star section
    stars = []
    howManyStars = 100

    for(i=0, i<howManyStars, i++){}

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }

    update(){
        console.log("In Game");
        this.pencil.font = "20px Georgia"
        this.pencil.fillText("Game", 10, 50)
    }

    
}