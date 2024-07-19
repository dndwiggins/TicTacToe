
const game = (function () {


    var players = 0;

    const player1 = createPlayer('bob', 'x');

    const player2 = createPlayer('steve', 'o');

    playerOneTurn = true;

    playerTwoTurn = false;


    var gameboard = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];



    function playRound(player, num) {

        //here will be the on event click that will mark the screen


        if (gameboard[num] === "empty") {

            gameboard[num] = player.mark;

            return true

        }


        return false

    }

    function eval(player) {

        const mark = player.mark;

        switch (true) {
            // Check rows
            case (gameboard[0] === mark && gameboard[1] === mark && gameboard[2] === mark):
            case (gameboard[3] === mark && gameboard[4] === mark && gameboard[5] === mark):
            case (gameboard[6] === mark && gameboard[7] === mark && gameboard[8] === mark):
                return true;

            // Check columns
            case (gameboard[0] === mark && gameboard[3] === mark && gameboard[6] === mark):
            case (gameboard[1] === mark && gameboard[4] === mark && gameboard[7] === mark):
            case (gameboard[2] === mark && gameboard[5] === mark && gameboard[8] === mark):
                return true;

            // Check diagonals
            case (gameboard[0] === mark && gameboard[4] === mark && gameboard[8] === mark):
            case (gameboard[2] === mark && gameboard[4] === mark && gameboard[6] === mark):
                return true;

            default:
                return false;
        }

    }

    function createPlayer(name, mark) {

        var score = 0;

        players++

        return { name, mark, score };

    }


    function addScore(player) {

        if (player === player1) {
            player.score++;
            var score = document.querySelector("#player1Score")
            score.innerHTML = player.score

        }

        if (player === player2) {
            player.score++;
            var score = document.querySelector("#player2Score")
            score.innerHTML = player.score
        }


    }


    function resetBoard() {

        gameboard = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    }

    return { gameboard, createPlayer, playRound, eval, player1, player2, players, addScore, playerOneTurn, playerTwoTurn, resetBoard };


})();


const boxes = document.querySelectorAll(".box")

for (let i = 0; i < boxes.length; i++) { //can loop over node list and set indivdual to a box at i
    let box = boxes[i];

    box.addEventListener('click', function (e) {

        if (game.playerOneTurn) {
            if (game.playRound(game.player1, Number(box.id))) {
                game.playerOneTurn = false
                game.playerTwoTurn = true;
                var imgMark = document.createElement("img");

                imgMark.src = "images/x-mark-256.png"

                box.appendChild(imgMark);

                if (game.eval(game.player1)) {
                    alert(game.player1.name + 'Won')
                    game.addScore(game.player1)
                }

            } else {
                alert("spot already played")
            }


        } else {

            if (game.playRound(game.player2, Number(box.id))) {

                game.playerOneTurn = true;
                game.playerTwoTurn = false;
                var imgMark = document.createElement("img");

                imgMark.src = "images/circle-outline-256.png"

                box.appendChild(imgMark);

                if (game.eval(game.player2)) {
                    alert(player2.name + 'won')
                    game.addScore(game.player2)
                }

            } else {
                alert("spot already played")
            }

        }

    });
}

const resetBt = document.querySelector("#resetBt")

resetBt.addEventListener('click', function (e) {

    for (let i = 0; i < boxes.length; i++) { //can loop over node list and set indivdual to a box at i
        let box = boxes[i];

        if (box.firstChild) {
            box.firstChild.remove();
        }

    }

    game.resetBoard();

});