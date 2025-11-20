
export class Title{
    canvas;
    pencil;
    changeToGame=false;

    //stars setup
    

    constructor(canvas, pencil){
        this.canvas = canvas
        this.pencil = pencil

        document.addEventListener("click", this.onClicked)
    }

    onClicked(event){
        console.log(event)
    }
    update(){
        console.log("on title")
            this.pencil.font = "20px Georgia"
            this.pencil.fillText("BIGTEST", 10, 50);
        }
        

} 



