var gameBoard={
    boards:["X", null, null, null, "O", "X", null, null, "O"]
};


var displayController=(()=>{

    const gameBoard = document.querySelector(".board");
    const displayBoard = (board)=>{
       

        for(let item of board){
            let newElement = document.createElement("div");
            newElement.setAttribute("class", "cell");
            newElement.textContent = item;
            gameBoard.appendChild(newElement);
        }
        
    };

    const displayReset =()=>{
        gameBoard.innerHTML = "";
    }

    return {displayBoard, displayReset};
})();


const player =(mark)=>{

    const move = x=>{
        if(gameBoard.boards[x]===null){
            gameBoard.boards[x] = mark;
        }
    }

    return {move};

}

let board = gameBoard;
displayController.displayBoard(board.boards);
var player1 = player("X");
player1.move(2);
displayController.displayReset();
displayController.displayBoard(board.boards);
