let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".hide");
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 4, 5],
    [6, 7, 8], 
];

 const resetGame = () => {
    turnO = true;
    //  count = 0;
    enableBoxes()
    msgContainer.classList.add("hide");
 }

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO ){//player0
            box.innerText ="O";
            turnO =false;
        } else{//player1
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    }); 
}); 

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled=false
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattern){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
            console.log("Winner",pos1Val);
            
            showWinner(pos1Val);
            }
        }       
    }
};

newGame.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)


 