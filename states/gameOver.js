export class GameOver {

    canvas;
    pencil;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }


    update(){
        console.log("in Game Over")
        this.pencil.font = "20px Georgia";
        this.pencil.fillStyle = "red"
        this.pencil.fillText("Game Over", 10, 50)
    }

    
}