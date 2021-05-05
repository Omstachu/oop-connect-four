import Game from "./game.js"

let game;

window.addEventListener("DOMContentLoaded", event => {

    const p1Name = document.getElementById("player-1-name");
    const p2Name = document.getElementById("player-2-name");
    const newGame = document.getElementById("new-game");

    let checkName = function(player) {
        player.addEventListener("keyup", event => {
            newGame.disabled = true;
            if (p1Name.value !== '' && p2Name.value !== '') {
                newGame.disabled = false;
            }

        })
    }

    checkName(p1Name);
    checkName(p2Name);

    newGame.addEventListener("click", event => {
        game = new Game(p1Name, p2Name)
        p1Name.value = ""
        p2Name.value = ""
        newGame.disabled = true;
        updateUI();
    })


})