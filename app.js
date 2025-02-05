let boxes =document.querySelectorAll('.box')
let resetbutt =document.querySelector('.resetbutt')
let newgamebtn =document.querySelector('.new-button')
let msgcontainer =document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turn_O = true;
const winn_cord = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if (turn_O){
            box.innerText = 'O';
            box.style.color = 'green'
            turn_O = false;
        }else{
            box.innerText = 'X';
            box.style.color = 'red'
            turn_O = true
        }
        box.disabled = true;

        checkWinner();
    });
});
const disable_boxes=()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enable_boxes=()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner =(winner)=>{
    msg.innerText =`Congratulation, Winner is '${winner}'`;
    msgcontainer.classList.remove('hide')
    disable_boxes(); 
} 

const checkWinner = () =>{
    for (let pattern of winn_cord){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val !="" && pos3val !=""){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log('winner',pos1val);

                showwinner(pos1val);
            } 
        }
    }

}

const resetgame = ()=>{
    turn_O = true;
    enable_boxes();
    msgcontainer.classList.add('hide')
}

newgamebtn.addEventListener('click',resetgame);
resetbutt.addEventListener('click',resetgame);