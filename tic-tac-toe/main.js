var gameBoard={
    boards:[null, null, null, null, null, null, null, null, null]
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

           
            newElement.addEventListener("click", player("X").move);
            newElement.addEventListener("click", computer("O").autoMove);
           
            board.appendChild(newElement);
        }
        
        
    };

    const displayReset =()=>{
        board.innerHTML = "";
    }
 

    return {displayBoard, displayReset};
})();

let marks = document.querySelectorAll(".choice");
let mark;
marks.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        mark = choice.textContent;   
    });
    
});


const player =(mark)=>{

   
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
            console.log(mark); 
        }
        displayController.displayReset();
        displayController.displayBoard(board.boards);
      
    }

    return {move};

};

const computer =(autoMark)=>{
    const autoMove=()=>{


    let empty = [];
    let board = gameBoard.boards;
    for(let i=0; i<board.length; i++){
        if(board[i] ==="" ||board[i] ===null){
            empty.push(i);
        }
    }

    console.log(empty);

    let spot = empty[Math.floor(Math.random()*empty.length)];
    gameBoard.boards[spot] = autoMark;
   
    let tie = isGameFinished.isTie(gameBoard.boards);
    let win =isGameFinished.isWinner(gameBoard.boards);
    console.log(win);
    console.log(tie);
    console.log(board);
    
    
    };
   
   
    return{autoMove};
};


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

        for(let i=0; i<board.length; i+=3){
            if(board[i] ===board[i+1] && board[i+1] ===board[i+2] && board[i] !=="" && board[i] !==null){
                return true;
            }
        }

        for(let j=0; j<3; j++){
            if(board[j] ===board[j+3] && board[j+3]===board[j+6] && board[j] !=="" && board[j] !==null){
                return true;
            }
        }

        if(board[0] ===board[4] && board[0] ===board[8] && board[0] !=="" && board[0] !==null){
            return true;
        }
        else if(board[2] ===board[4] &&board[4]===board[6] && board[2] !=="" && board[2] !==null){
            return true;
        }

        return false;

    }

    return {isTie, isWinner};
})();

let board = gameBoard;
displayController.displayBoard(board.boards);


displayController.displayReset();
displayController.displayBoard(board.boards);
console.log(isGameFinished.isTie(board.boards));
console.log(isGameFinished.isWinner(board.boards));