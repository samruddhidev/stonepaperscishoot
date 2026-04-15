    let usersc=document.querySelector(".userscore");
    let compsc=document.querySelector(".compscore");
    let userscore=0;
    let compscore=0;
    let choices=document.querySelectorAll(".bts");
    let message=document.querySelector(".msg");
    let message1=document.querySelector(".msg1");

       const compchoice=()=>{
        let ops=["rock","paper","scissor"];
        let choicebycomp=Math.floor(Math.random()*3);
        console.log(`Computer's Choice: ${ops[choicebycomp].toUpperCase()}`);
        let choiceofcomp=ops[choicebycomp];
        return choiceofcomp;
        };

       const userchoice=(choiceoption)=>{
        console.log(`User's Choice: ${choiceoption.toUpperCase()}`);
        return choiceoption;

       };
       const matchbegins=(choiceofcomp,choiceoption)=>{
        if(choiceofcomp==choiceoption)
        {
            console.log("Its A Tie");
            message.innerText="It's A Tie, Try Again!"
            message1.innerText=`Computer's Choice: ${choiceofcomp.toUpperCase()}`;
        }
        else
        {
            let userwin=true;
            if(choiceoption=="rock")
            {
                userwin=choiceofcomp==="paper" ? false:true;
                
            }
            else if(choiceoption=="paper")
            {
                userwin=choiceofcomp==="rock" ? true:false;
            }
            else if(choiceoption=="scissor")
            {
                userwin=choiceofcomp==="rock" ? false:true;
            }
showwinner(userwin,choiceofcomp);
        }
        }; 

        const showwinner=(userwin,choiceofcomp)=>{
            if(userwin==true)
            {
                userscore++;
                console.log("You Win");
                message.innerText="You Win!!!"
                usersc.innerText=userscore;
                compsc.innerText=compscore;
                message1.innerText=`Computer's Choice: ${choiceofcomp.toUpperCase()}`;
            }
            else{
                compscore++;
                console.log("You Lose");
                message.innerText="You Lose:((((";
                usersc.innerText=userscore;
                compsc.innerText=compscore;
                message1.innerText=`Computer's Choice: ${choiceofcomp.toUpperCase()}`;
                
            }
        }
    
    choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const choiceoption=choice.getAttribute("id");
            const choiceofcomp=compchoice();
            userchoice(choiceoption);
            matchbegins(choiceofcomp,choiceoption);
            
        });
    });

 
