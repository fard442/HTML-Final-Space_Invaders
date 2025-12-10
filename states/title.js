import { Toolbox } from "../toolbox.js"


export class Title{
    canvas;
    pencil;
    changeToGame=false;
    toolbox = new Toolbox();

    startButtonX=200;
    startButtonY=200;
    startButtonW=200;
    startButtonH=200;
    //stars setup
    

    constructor(canvas, pencil){
        this.canvas = canvas
        this.pencil = pencil

        // this.onKeyPressed = this.onKeyPressed.bind(this)
        this.onClicked = this.onClicked.bind(this)

        document.addEventListener("keypress", this.onKeyPressed)
        document.addEventListener("click", this.onClicked)
    }

    // onKeyPressed(){
    //     this.changeToGame = true;
    // }

    onClicked(event){
        let isHitButton = this.toolbox.isWithinRect(
            event.offsetX, event.offsetY,
            this.startButtonX, this.startButtonY,
            this.startButtonW, this.startButtonH
        );
        this.changeToGame = isHitButton;
    }


    update(){
        this.pencil.fillStyle = 'black'
        this.pencil.fillRect(0,0,this.canvas.width, this.canvas.height)
        //name of game text
        this.pencil.fillStyle = "red";
        this.pencil.font = "50px Georgia";
        this.pencil.fillText("Outerspace Assailants", 50, 90);

        //controls text
        this.pencil.fillStyle = "blue";
            this.pencil.font = "25px Georgia";
            this.pencil.fillText("A and D or Left and Right Arrows to move.", 50, 425);
            this.pencil.fillText("After clicking start, press Space to begin assault.", 50, 450);

        //green button
        this.pencil.drawImage(startButton, this.startButtonX, this.startButtonY, this.startButtonW, this.startButtonH);

        if(this.changeToGame){
            this.changeToGame = false;
            return "game";
        }
    }
        

} 



