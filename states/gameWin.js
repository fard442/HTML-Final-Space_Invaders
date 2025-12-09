export class GameWin {

    canvas;
    pencil;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
    }


    update(){
        // console.log("in Game Win")
        this.pencil.font = "20px Georgia";
        this.pencil.fillStyle = "green"
        this.pencil.fillText("Game Won", 10, 50)
    }

    
}