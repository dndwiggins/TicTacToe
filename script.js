





const game = (function () {


    var players = 0;

    function gameboard() {

        var gameboard = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];

        return gameboard

    }

    function playRound(player, num) {

        if (gameboard[num] !== "empty") {



            gameboard[num] = player.mark;

            roundsPlayed++;

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

    function player(name, mark) {

        var name = toString(name);

        players++

        return { name, mark }

    }


    return { gameboard, player, playRound, eval };


})();