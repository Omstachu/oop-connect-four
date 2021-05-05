import Game from "./game.js"


let game;
const clickTargets = document.getElementById("click-targets");

function changeColor() {
    if (game.turn === 1) {
        clickTargets.classList.remove("red");
        clickTargets.classList.add("black");
    } else {
        clickTargets.classList.remove("black");
        clickTargets.classList.add("red")
    }

}

function updateUI() {

    const boardHolder = document.getElementById("board-holder")
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
    };
    changeColor();


}

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
        game = new Game(p1Name.value, p2Name.value)
        p1Name.value = ""
        p2Name.value = ""
        newGame.disabled = true;
        updateUI();

    })



    clickTargets.addEventListener("click", event => {
        game.playInColumn();
     
        updateUI();
    })

})
