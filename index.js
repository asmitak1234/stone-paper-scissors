let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user-score");
const compscore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
   const raninx= Math.floor(Math.random()*3);
   return options[raninx];
};

const drawGame=()=>{
    msg.innerText="DRAW Game!!";
    msg.style.backgroundColor="#081b31";
    msg.style.color="darksalmon";
};

const showWinner=(userwin,userchoice,CompChoice)=>{
     if(userwin)
     {
        userScore++;
        userscore.innerText=userScore;
        msg.innerText=`You Win !! Your ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="#081b31";
     }
     else
     {
        compScore++;
        compscore.innerText=compScore;
        msg.innerText=`You Lose.${CompChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        msg.style.color="#081b31";
     }
};

const PlayGame=(userchoice)=>{
    const CompChoice=genCompChoice();
   if(userchoice===CompChoice)
    {
        drawGame();
    }
    else
    { 
        let userwin=true;
        if(userchoice==="rock")
        {
           userwin=CompChoice==="paper"? false:true;
        }
        else if(userchoice==="paper")
        {
           userwin=CompChoice==="scissors"? false:true;
        }
        else
        {
           userwin=CompChoice==="rock"? false:true;
        }
        showWinner(userwin,userchoice,CompChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
      PlayGame(userchoice);
    })
})