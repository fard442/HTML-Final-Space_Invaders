import { Game } from "./states/game.js"
import { GameOver } from "./states/gameOver.js"
import { Title } from "./states/title.js"
import { Toolbox } from "./toolbox.js"

let canvas = document.getElementById("myCanvas")
let pencil = canvas.getContext("2d")
let toolbox = new Toolbox()






let game = new Game(canvas, pencil)
let gameOver = new GameOver(canvas, pencil)
let title = new Title(canvas, pencil)


let state = game



function gameLoop(){

    pencil.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    let command = state.update()
    
    if(command == "title"){
        state = title
    }
    if(command == "gameover"){
        state = gameOver
    }
    if(command == "game"){
        state = game
    }

}
setInterval(gameLoop, 1000 / 60)