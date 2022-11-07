var gameBoard=(()=>{
    let board=[null, null, null, null, null, null, null, null, null];
    const boards =()=>board;
    const setBoard = ()=>{
        for(let i=0; i<board.length; i++){
            board[i] =null;
        }
        
    }

    const full =()=>{
        for(let i=0; i<board.length; i++){
            if(board[i] ===null || board[i] ===""){
                board[i] = undefined;
            }
        }
    }
    return{boards, setBoard, full};
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

    const reFresh =()=>{
        
        
        gameBoard.setBoard();
        console.log(gameBoard.boards());
        displayReset();
        displayBoard(gameBoard.boards());
        document.querySelector(".modal").style.display = "none";
    }
 

    return {displayBoard, displayReset, reFresh};
})();



const player =(mark)=>{


    const move =(e)=>{

      
        let board = gameBoard.boards();

        if(board[e.target.value] ===null || board[e.target.value]===""){
            e.target.textContent = mark;
            board[e.target.value] = mark;

            
            let tie = isGameFinished.isTie(board);
            let win =isGameFinished.isWinner(board);

            if(win){
                gameBoard.full();
                document.querySelector(".modal").style.display = "block";
                result.textContent = `${win} is winner!`;
            }

            else if(tie){
                document.querySelector(".modal").style.display = "block";
                result.textContent = `It's tie !`;
            }


            
            
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
    
    const autoMove=(spot)=>{

    /*let empty = [];
    let board = gameBoard.boards();
    console.log(board);
    for(let i=0; i<board.length; i++){
        if(board[i] ==="" ||board[i] ===null){
            empty.push(i);
        }
    }

    console.log(empty);

    let spot = empty[Math.floor(Math.random()*empty.length)];*/
    let board = gameBoard.boards();
    board[spot] = autoMark;

    displayController.displayReset();
   
    displayController.displayBoard(board);
   
    let tie = isGameFinished.isTie(board);
    let win =isGameFinished.isWinner(board);
    let result = document.getElementById("result");
    console.log(win);
    console.log(tie);
    console.log(board);

    if(win){
        gameBoard.full();
        document.querySelector(".modal").style.display = "block";
        result.textContent = `${win} is winner!`;
    }

    else if(tie){
        document.querySelector(".modal").style.display = "block";
        result.textContent = `It's a tie !`;
    }
    
    };

    const randomMove =(available)=>{

        let spot = available[Math.floor(Math.random()*available.length)];
        return spot;
    };

    
    const mark = ()=>{
        if(autoMark === "X"){
            return "O";
        }
        else{
            return "X";
        }
    };
    
    const normalMove = ()=>{
        let available = emptyBoard(gameBoard.boards());
        let move = randomMove(available);
        autoMove(move);
    }

    const emptyBoard = (board)=>{
        let available = [];
        for(let i=0; i<board.length; i++){
            if(board[i] ==="" ||board[i] ===null){
               available.push(i);
          }
        };
       
        return available;
    }

    const smartMove =()=>{

        const findBestMove = ()=>{
            
            let bestMove = -1;

            let available = emptyBoard(gameBoard.boards());
            /*let available = [];
            for(let i=0; i<board.length; i++){
                if(board[i] ==="" ||board[i] ===null){
                   available.push(i);
              }
            };*/
            bestMove = isWinnerExisted(autoMark, available, bestMove);

            if(bestMove >=0){
                return bestMove;
            }
            else{
                bestMove = isWinnerExisted(mark(), available, bestMove); 
                if(bestMove >= 0){
                    return bestMove;
                }
                else{
                    return randomMove(available);
                }
            };
            
        };

        const isWinnerExisted =(choice, available, bestMove)=>{
            let board = gameBoard.boards();
            for (item of available){
                board[item] = choice;
        
                let name = isGameFinished.isWinner(board);

                if(name ===choice){
                    bestMove = item;
                }

                board[item] =null;
            }
            return bestMove;
        };

        console.log(findBestMove());
        let spot = findBestMove();
        autoMove(spot);
        /*const findBestMove= (board)=>{

            let available = [];

            for(let i=0; i<board.length; i++){
                if(board[i] ==="" ||board[i] ===null){
                   available.push(i);
              }
            }

            let bestVal = -Infinity;
            let bestMove = -1;

            for (item of available){
                board[item] = autoMark;

                let moveVal  = minimax(board, 0, false);

                board[item] = null;

                if(moveVal > bestVal){
                    bestVal = moveVal;
                    bestMove = item;
                }
            }
            return bestMove;
        }

        const evaluate =(board)=>{
            if(isGameFinished.isWinner(board) ===autoMark){
                 return +10;
            }
            else if(isGameFinished.isWinner(board) ===null){
                return 0;
            }
            else{
                return -10;
            }
        }
        const minimax =(board, depth, isMax){
            let score = evaluate(board);

            if(score == 10){
                return score;
            }

            if(score == -10){
                return score;
            }

            if(isGameFinished.isTie(board) ===true){
                return 0;
            }

            if(isMax){
                let best = -Infinity;

                
            }
        }*/
    }
   
   
    return{autoMove, normalMove, smartMove};
};


const isGameFinished =(()=>{

    const isTie =(board)=>{
        for (let cell of board){
            if(cell ==="" || cell===null || cell ===undefined){
                return false;
            }
        }
        return true;
        
    };

    const isWinner=(board)=>{

        for(let i=0; i<board.length; i+=3){
            if(board[i] ===board[i+1] && board[i+1] ===board[i+2] && board[i] !=="" && board[i] !==null){
                return board[i];
            }
        }

        for(let j=0; j<3; j++){
            if(board[j] ===board[j+3] && board[j+3]===board[j+6] && board[j] !=="" && board[j] !==null){
                return board[j];
            }
        }

        if(board[0] ===board[4] && board[0] ===board[8] && board[0] !=="" && board[0] !==null){
            return board[0];
        }
        else if(board[2] ===board[4] &&board[4]===board[6] && board[2] !=="" && board[2] !==null){
            return board[2];
        }

        return null;

    }

    return {isTie, isWinner};
})();

const gameController =()=>{

    let board = gameBoard.boards();
    
    var boards = document.querySelector(".board");
    
    var mark = document.querySelector(".mark");

    var level = document.querySelector(".level");
    
    

    mark.addEventListener("click", (e)=>{
         console.log(e.target);
         console.log(e.target.textContent);
        
         e.target.style.background = "red";
         let name = e.target.textContent;
         
         
         boards.addEventListener('click', player(name).move);

         
         let computerMark = ()=>{
            if(name === "X"){
                return "O";
            }
            else{
                return "X";
            }
         }

         boards.addEventListener("click", computer(computerMark()).smartMove);

         
    });

        
    displayController.displayReset();
    displayController.displayBoard(board);

    document.getElementById("restart").addEventListener("click",()=>{
        window.location.reload();
    });

   

};

gameController();
