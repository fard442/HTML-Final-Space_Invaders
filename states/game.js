import { Star } from "../background.js"
export class Game {
    canvas;
    pencil;
    newStar;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
        this.star = new Star(this.pencil, this.canvas);
    }

    drawSpace(){
        this.pencil.fillStyle = 'black'
        this.pencil.fillRect(0,0,this.canvas.width, this.canvas.height)
    }
    //star section
    stars = []
    howManyStars = 100

    pushStars(){
        for(let i=0; i < this.howManyStars; i++){
            this.newStar = new Star(this.pencil, this.canvas)
            this.stars.push(this.newStar)
        }
    }

    moveStars(){
        for(let i=0; i < this.howManyStars; i++){
            // console.log(this.star.sizeMult)
            this.stars[i].move()
            this.stars[i].draw()
            this.stars[i].tryRecycle()
        }
    }
    

    

    update(){
        console.log("In Game");
        this.drawSpace();
        this.pushStars();
        this.moveStars();
        this.pencil.font = "20px Georgia"
        this.pencil.fillText("Game", 10, 50)
    }

    
}