var gameBoard=(()=>{
    let board=[null, null, null, null, null, null, null, null, null];
    const boards =()=>board;
    const initial = ()=>{
        for(let i=0; i<board.length; i++){
            board[i] =null;
        }
        return board;
    }
    return{boards, initial};
})();

//console.log(gameBoard.boards());

var displayController=(()=>{

    const board = document.querySelector(".board");
 
    const displayBoard = (boards)=>{
       

        for(let i=0; i<boards.length; i++){
            let newElement = document.createElement("div");
            newElement.setAttribute("class", "cell");
            newElement.value = i;
            newElement.textContent = boards[i];
            board.append(newElement);
        }
        
        
    };

    const displayReset =()=>{
        board.innerHTML = "";
    }
 

    return {displayBoard, displayReset};
})();



const player =(mark)=>{

   
    let gameOver = isGameFinished;

    const move =(e)=>{

      
        let board = gameBoard.boards();

        if(board[e.target.value] ===null || board[e.target.value]===""){
            e.target.textContent = mark;
            board[e.target.value] = mark;
            let tie = isGameFinished.isTie(board);
            let win =isGameFinished.isWinner(board);
            console.log(win);
            console.log(tie);
            console.log(board);
            console.log(mark); 
            
       
            //displayController.displayReset();
           // displayController.displayBoard(gameBoard.boards);
      
        }
    }
    return {move};

};

const computer =(autoMark)=>{
    
    
    const autoMove=()=>{

    let empty = [];
    let board = gameBoard.boards();
    console.log(board);
    for(let i=0; i<board.length; i++){
        if(board[i] ==="" ||board[i] ===null){
            empty.push(i);
        }
    }

    console.log(empty);

    let spot = empty[Math.floor(Math.random()*empty.length)];
    board[spot] = autoMark;

    displayController.displayReset();
   
    displayController.displayBoard(board);
   
    let tie = isGameFinished.isTie(board);
    let win =isGameFinished.isWinner(board);
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

const gameController =()=>{

    let board = gameBoard.boards();
    
    var boards = document.querySelector(".board");
    
    var mark = document.querySelector(".mark");

    mark.addEventListener("click", (e)=>{
         console.log(e.target);
         console.log(e.target.textContent);
        
     
         boards.addEventListener('click', player(e.target.textContent).move);

         let computerMark = ()=>{
            if(e.target.textContent === "X"){
                return "O";
            }
            else{
                return "X";
            }
         }

         boards.addEventListener("click", computer(computerMark()).autoMove);

         
    });

  
    
    

    /*if(isGameFinished.isWinner(board)){
        console.log("It's finished");
    }
    if(isGameFinished.isTie(board)){
        console.log("It's tie");
    }*/
   
    //boards.addEventListener('click', player("X").move);
    //boards.addEventListener("click", computer("O").autoMove);
        
    displayController.displayReset();
    displayController.displayBoard(board);

   

   

};

gameController();


//displayController.displayReset();
//displayController.displayBoard(board.boards);

//console.log(isGameFinished.isTie(board.boards));
//console.log(isGameFinished.isWinner(board.boards));