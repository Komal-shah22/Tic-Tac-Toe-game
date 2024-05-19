
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn) {
            box.innerText ="O";
            turn = false;
        }else{
            box.innerText ="X";
            turn = true
        }
        box.disabled = turn;

        checkWinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner)=>{
    msg.innerText = `congratulation,winner is ${winner} `
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner =()=>{
    for( let pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
         if(pos1Val === pos2Val&& pos2Val === pos3Val){
             console.log("WINNER",pos1Val);
             showWinner(pos1Val);
           }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
