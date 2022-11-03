var gameBoard={
    boards:["O", null, null, null, "O", "X", null, null, "O"]
};


var displayController=(()=>{

    const board = document.querySelector(".board");
    var value = 0;
    const displayBoard = (boards)=>{
       

        for(let item of boards){
            let newElement = document.createElement("div");
            newElement.setAttribute("class", "cell");
            newElement.value = value++;
            //newElement.setAttribute("value", value++);
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

    /*const move = (x)=>{
        
       if(gameBoard.boards[x] ===null){
           gameBoard.boards[x]=mark;
       }
    };*/
    let marks = document.querySelectorAll(".choice");
    let mark = "";
    marks.forEach((choice)=>{
        choice.addEventListener("click", ()=>{
            mark = choice.textContent;
        })
    });



    const move =(e)=>{
        
        e.target.textContent = mark;
        gameBoard.boards[e.target.value-9] = mark;
        console.log(gameBoard.boards);
    }

    return {move};

}

const gamePlaying =()=>{

}

let board = gameBoard;
displayController.displayBoard(board.boards);
var player1 = player("X");
//player1.move(2);
var player2 = player("O");
//player2.move(3);
displayController.displayReset();
displayController.displayBoard(board.boards);
