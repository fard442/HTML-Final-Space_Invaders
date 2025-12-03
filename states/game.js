import { Star } from "../background.js"
import { Player } from "../player.js"
export class Game {
    canvas;
    pencil;
    newStar;

    constructor(canvas, pencil){
        this.canvas = canvas;
        this.pencil = pencil;
        this.star = new Star(this.pencil, this.canvas);
        this.player = new Player(this.pencil, this.canvas);
    }

    //star section
    stars = []
    howManyStars = 100

    //draw black space for star visibility
    drawSpace(){
        this.pencil.fillStyle = 'black'
        this.pencil.fillRect(0,0,this.canvas.width, this.canvas.height)
    }


    //into the index they go
    pushStars(){
        for(let i=0; i < this.howManyStars; i++){
            this.newStar = new Star(this.pencil, this.canvas)
            this.stars.push(this.newStar)
        }
    }


    //into the fire they go (movement for stars in background)
    moveStars(){
        for(let i=0; i < this.howManyStars; i++){
            // console.log(this.star.sizeMult)
            this.stars[i].move()
            this.stars[i].draw()
            this.stars[i].tryRecycle()
        }
    }
    

//game gode




    
    //big chillin gameloop code
    update(){
        console.log("In Game");
        this.drawSpace();
        this.pushStars();
        this.moveStars();
        this.player.drawPlayer();
        this.pencil.font = "20px Georgia"
        this.pencil.fillText("Game", 10, 50)
    }

    
}