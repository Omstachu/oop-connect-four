import Game from "./game.js"

let game;

window.addEventListener("DOMContentLoaded", event => {

    const p1Name = document.getElementById("player-1-name");
    const p2Name = document.getElementById("player-2-name");
    const newGame = document.getElementById("new-game");

    p1Name.addEventListener("keyup", event => {
        newGame.disabled = false;
        if (p1Name.value && p2Name.value) {
            newGame.disabled = true;
        }
    })

})
