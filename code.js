import { Game } from "./states/game.js"
import { GameOver } from "./states/gameOver.js"
import { GameWin } from "./states/gameWin.js"
import { Title } from "./states/title.js"
import { Toolbox } from "./toolbox.js"
import { laserPlayer } from "./assets/laserPlayer.js"
import { laserEnemy } from "./assets/laserEnemy.js"




let canvas = document.getElementById("myCanvas")
let pencil = canvas.getContext("2d")
pencil.imageSmoothingEnabled = false;

let toolbox = new Toolbox()

let playerLaser = new laserPlayer(canvas, pencil)


let game = new Game(canvas, pencil)
let gameOver = new GameOver(canvas, pencil)
let gameWin = new GameWin(canvas, pencil)
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
    if(command == "gameWin"){
        state = gameWin
    }

    //sets player y low
    game.player.y = canvas.clientHeight - 100

    //checks player on edges
    if (game.player.x + 50 > canvas.clientWidth + 75){
        game.player.x = canvas.clientWidth - canvas.clientWidth;
    } 
    if (game.player.x - 50 < canvas.clientWidth - 650){
        game.player.x = canvas.clientWidth;
    }
}

//controls for player
function onKeyPressed(event){
    let isLeftPushed = event.key == "a"
    let isRightPushed = event.key == "d"
    let isRightArrowPushed = event.key == "ArrowRight"
    let isLeftArrowPushed = event.key == "ArrowLeft"
    let isSpacePressed = event.key == " "
    let killBind = event.key == "k"
    let winBind = event.key == "w"
   
    if(killBind){
        state = gameOver
    }

    if(winBind){
        state = gameWin
    }
    

    if(isLeftPushed || isLeftArrowPushed){
        // game.player.pencil.clearRect(game.player.x, game.player.y, game.player.width, game.player.height)
        game.player.moveLeft();
        game.player.drawPlayer();
    } else if (isRightPushed || isRightArrowPushed){
        // game.player.pencil.clearRect(game.player.x, game.player.y, game.player.width, game.player.height)
        game.player.moveRight();
        game.player.drawPlayer();
    }

    if(isSpacePressed){
        if (state == game){
            setInterval(playerLaser.shoot, 1000)
        }
    }
}

document.addEventListener("keydown", onKeyPressed);

setInterval(gameLoop, 1000 / 60)

