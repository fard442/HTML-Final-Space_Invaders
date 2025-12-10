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
        // console.log("on title")
            this.pencil.fillStyle = "red";
            this.pencil.font = "50px Georgia";
            this.pencil.fillText("Outerspace Assailants", 50, 90);

            //green button
            this.pencil.drawImage(startButton, this.startButtonX, this.startButtonY, this.startButtonW, this.startButtonH);

            if(this.changeToGame){
                this.changeToGame = false;
                return "game";
            }
        }
        

} 



