var gameBoard={
    boards:["X", "X", "X", null, "O", "X", null, null, "O"]
};


var displayController=(()=>{

    const board = document.querySelector(".board");
    var value = 0;
    const displayBoard = (boards)=>{
       

        for(let item of boards){
            let newElement = document.createElement("div");
            newElement.setAttribute("class", "cell");
            newElement.value = value++;
            
            newElement.textContent = item;
            newElement.addEventListener("click", player().move);
            board.appendChild(newElement);
        }
        
    };

    const displayReset =()=>{
        board.innerHTML = "";
    }
 

    return {displayBoard, displayReset};
})();


const player =()=>{

    let marks = document.querySelectorAll(".choice");
    let mark = "";
    marks.forEach((choice)=>{
        choice.addEventListener("click", ()=>{
            mark = choice.textContent;   
        });
        
    });

    let gameOver = isGameFinished;

    const move =(e)=>{

        if(gameOver.isWinner(gameBoard.boards)){
            console.log("It's winner");
        }

        if(gameOver.isTie(gameBoard.boards)){
            console.log("Game is over");
        }
        console.log(e.target.textContent);
        if(gameBoard.boards[e.target.value-9] ===null || gameBoard.boards[e.target.value-9]===""){
            e.target.textContent = mark;
            gameBoard.boards[e.target.value-9] = mark;
            let tie = isGameFinished.isTie(gameBoard.boards);
            let win =isGameFinished.isWinner(gameBoard.boards);
            console.log(win);
            console.log(tie);
            console.log(gameBoard.boards);
        }
      
    }

    return {move};

}



const isGameFinished =(()=>{

    const isTie =(board)=>{
        for (let cell of board){
            if(cell ==="" || cell===null){
                return false;
            }
        }
        return true;
        
    };

    const isWinner=(board)=>{

        

        if((board[0]===board[1] && board[1]===board[2] && board[0]!=null && board[0] !="") || (board[3]===board[4]===board[5] &&board[3] !==null && board[3] !=="") || 
            (board[6]===board[7]===board[8] && board[6] !==null &&board[6] !=="")){
                return true;

        }
        else{
            return false;
        }


    }

    return {isTie, isWinner}
})();

let board = gameBoard;
displayController.displayBoard(board.boards);
var player1 = player("X");
//player1.move(2);
var player2 = player("O");
//player2.move(3);
displayController.displayReset();
displayController.displayBoard(board.boards);
console.log(isGameFinished.isTie(board.boards));
console.log(isGameFinished.isWinner(board.boards));