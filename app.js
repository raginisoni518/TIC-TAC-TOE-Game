let boxes=document.querySelectorAll(".box");
let container1=document.querySelector(".main-container");
let para=document.querySelector("#para");
let restart=document.querySelector("#restart-btn");
let reset=document.querySelector("#reset-btn");
let turn0=true
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
        box.innerText="O";
        turn0=false;
    }
    else{
        box.innerText="X";
        turn0=true;
    }
    box.disabled=true;
    checkWinner();
});
});
let winArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let btnDisable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}
let btnEnable=()=>{
    boxes.forEach((box)=>{
        container1.classList.add("hide");
        container1.classList.remove("not-hide");
        box.innerText="";
        box.disabled=false;
    });
}
reset.addEventListener("click",btnEnable);
restart.addEventListener("click",btnEnable);
let showWinner=(winner)=>{
    para.innerText=`The winner is ${winner}`;
    container1.classList.remove("hide");
    container1.classList.add("not-hide");
    btnDisable();
}
let checkWinner=()=>{
    for(let pattern of winArr){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2==pos3){
                let winner= pos1;
                showWinner(pos1);
            }
        }
    }
}