let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".newgame");
let msg_container = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turno = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () => {
    turno = true;
    enablebox();
    msg_container.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if (turno) {
            box.innerHTML = "0";
            turno = false
        }
        else
        {
            box.innerHTML = "X";
            turno = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disabledbtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showmessage = (winner) => {
    msg.innerHTML = `Congratulation, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disabledbtn();
};

const checkwinner = () => {
    for ( let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner",pos1);
                showmessage(pos1);
            }
        }
    }
};

resetbtn.addEventListener("click", reset);
newgame.addEventListener("click", reset);
