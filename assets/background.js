export class Star {
    x = 50;
    y = 50;
    size = Math.random();
    sizeMult = 5
    speed = 1;
    pencil;
    canvas;
    
    constructor(pencil, canvas){
        this.pencil = pencil;
        this.canvas = canvas;
        this.x = canvas.width * Math.random();
        this.y = canvas.height * Math.random();
    }

    draw(pencil){
        this.pencil.beginPath();
        this.pencil.arc(this.x, this.y, this.size * this.sizeMult, 0, 2*Math.PI);
        this.pencil.fillStyle="white";
        this.pencil.fill();
        this.pencil.closePath();
    }

    checkIfEdgeOfScreen(){

    }

    resetStar(){

    }

    move(){
        this.x += this.speed * this.size;
    }

    tryRecycle(){
        if(this.x > this.canvas.width){
            this.x = 0;
            this.y = Math.random() * this.canvas.height
        }
    }
}