





const game = (function () {


    var players = 0;

    const player1 = createPlayer('bob', 'x');

    const player2 = createPlayer('steve', 'o');


    var gameboard = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];



    function playRound(player, num) {

        //here will be the on event click that will mark the screen


        if (gameboard[num] === "empty") {

            gameboard[num] = player.mark;

            return

        }

        alert("Spot already played")



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

        player.score++;


    }


    function resetBoard() {

        gameboard = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];
    }

    return { gameboard, createPlayer, playRound, eval, player1, player2, players, addScore };


})();