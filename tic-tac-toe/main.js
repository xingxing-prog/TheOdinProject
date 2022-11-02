var gameBoard = {
    boards:["X", null, null, null, null, "O", null, "X", "O"]
    
}

var displayController=(()=>{

    const displayBoard = (board)=>{
        const cells = document.querySelectorAll(".cell");
        //to build js code to display or render board of boards
        cells.forEach((cell)=>{

        })
    };

    return {displayBoard};
})();
let board = gameBoard;

displayController.displayBoard(board.boards);
