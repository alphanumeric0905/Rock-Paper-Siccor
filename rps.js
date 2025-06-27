let yourScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let userWin=true;
let msg=document.querySelector(".msg-container")
let y=document.querySelector(".your-score");
let z=document.querySelector(".comp-score");


const genCompChoice =()=>{
    const options = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random()*3);
    console.log(options[randIndx]);
    return options[randIndx];
    
}

const draw =()=>{
    msg.innerText="DRAW";
    msg.style.backgroundColor="yellow";
    
}

const showWinner=(userWin,yourChoice,compChoice)=>{
    if(userWin===true){
        msg.innerText=`You won ${yourChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        yourScore++;
        y.innerText=yourScore;

    }else{
        msg.innerText=`You lose ${compChoice} beats ${yourChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        z.innerText=compScore;


    }

};

const playGame =(yourChoice)=>{
    const compChoice=genCompChoice();
    if(compChoice === yourChoice){
        draw();
    } else{
    if (yourChoice === "rock"){
        userWin= compChoice === "paper"? false:true;
    }  else if (yourChoice === "paper"){
        userWin= compChoice === "scissor"? false:true;
    } else {
        userWin= compChoice === "rock"? false:true;
    }
    showWinner(userWin,yourChoice,compChoice);
}

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const yourChoice=choice.getAttribute("id");
        console.log(yourChoice);
        playGame(yourChoice);


    });
});
