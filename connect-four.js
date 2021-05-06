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
/// testing
let number = 0;
clickTargets.addEventListener("click", event => {
    number = Number(event.target.id.split("-")[1]);
    // console.log(number);
});

function updateUI() {

    const boardHolder = document.getElementById("board-holder")
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        document.getElementById("game-name").innerHTML = game.getName();
    };
    changeColor();


    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {

                const square = document.getElementById(`square-${row}-${col}`);
                let tokenNum = game.getTokenAt(row, col);


                square.innerHTML = "";
                if (tokenNum === 1) {

                    const div = document.createElement("div");
                    div.classList.add("token", "black");
                    square.appendChild(div);
                    tokenNum = null;

                } else if (tokenNum === 2) {
                    const div = document.createElement("div");
                    div.classList.add("token", "red");
                    square.appendChild(div);

                }

        }
    }
    for (let i = 0; i < 7; i++) {
        const ele = document.getElementById(`column-${i}`);

        if (game.isColumnFull(i)) {
            ele.classList.add("full");
        } else {
            ele.classList.remove("full");
        }
    }

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
        const colNum = Number(event.target.id.split("-")[1]);
      //  console.log(colNum);
        // using number.parseInt from instructions
        // const colNum = Number.parseInt(event.target.id.split("-")[1]);



        game.playInColumn(colNum);


        updateUI();
    })

})
