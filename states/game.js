export class Game {

    canvas;
    pencil;

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