console.log("Welcome to tic tac toe");
let music=new Audio("scam_1992_bgm.mp3");
let audioTurn =new Audio("tinge.mp3");
let gameover=new Audio("Rang Chadha Hai.mp3");

let turn="X";
let isgameover=false;
//function to change the turn
changeTurn=()=>{
    return turn==="X"?"0":"X";
}

//function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText+"  Won"
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px";
            /*document.querySelector(".line").style.tranform="translate(23vw,39vw) rotate(90deg)"*/
            gameover.play();
        }
    })
}

//logic
//music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{ 
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
            }
        }
    })
})
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn ="X";
    isgameover
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";  
})