const winChances = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const boxs = document.querySelectorAll(".box");
const restartbtn = document.getElementById("btn");
const result = document.getElementById("result");
let options = ["","","","","","","","",""];
let currPlayer = "X";
function initialize(){
    console.log("render");
    boxs.forEach((box)=> box.addEventListener("click",boxClick));
    restartbtn.addEventListener("click",RestartGame);
}
initialize();

function checkWinner(){
    let win = false;
    for(let i = 0; i<winChances.length; i++){
        let temp = winChances[i];
        // console.log(temp);
        // console.log(options)
        let b1 = options[temp[0]];
        let b2 = options[temp[1]];
        let b3 = options[temp[2]];
        // console.log(b1,b2,b3)
        if(b1 == "" || b2 == "", b3 == "")
            continue;
        if(b1 == b2 && b2 == b3){
            win = true;
            break;
        }
    }
    if(win){
        console.log(result);
        result.innerHTML = "You WIN";
    }
    else if(!options.includes("")){
        result.innerHTML = "Game Draw";
    }
    else{
        if(currPlayer == "X"){
            currPlayer = 'O';
        }
        else{
            currPlayer = "X";
        }
    }
}
function boxClick(){
    const index = this.dataset.index;
    if(options[index] != "") return;
    options[index] = currPlayer;
    this.innerHTML = currPlayer;
    checkWinner();
}
function RestartGame(){
    options = ["","","","","","","","","",""];
    boxs.forEach(box=> {
        box.innerHTML = "";
        result.innerHTML="";
    })
}