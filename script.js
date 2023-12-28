
let sumbit=document.querySelector(".btn");
let form=document.querySelector("form");
let guessLeft=10;
let yoursScore=0;
document.querySelector(".guess").innerText=`Guess Left:- ${guessLeft}`;

const EventListener = (e)=>{
    
    e.preventDefault();
    guessLeft=guessLeft-1;
    let input=Number(e.target.input.value);
    let compInput=Math.floor((Math.random())*10);
    console.log(compInput)
    console.log(input)
    document.querySelector(".yours").innerText=`Yours Guess:- ${input}`;
    document.querySelector(".comp").innerText=`Coumputer Guess:- ${compInput}`;
    document.querySelector(".guess").innerText=`Guess Left:- ${guessLeft}`;


    if(guessLeft<=0){
        document.querySelector(".score").innerText=`Final Score:-${yoursScore}`;
                sumbit.innerText="New Game";

        document.querySelector(".correct").innerText="Play New Game,,You Have Use All your Guesses";
        reset();

    }


     if(input===compInput ){
        document.querySelector(".correct").innerText="Correct Guess, You Won";
        guessLeft=10;
        document.querySelector(".guess").innerText=`Guess Left:- ${guessLeft}`;
        yoursScore++;
         document.querySelector(".score").innerText=`yours Score:-${yoursScore}`;
         
        

    }
    else if(input>compInput )
    {
         if(!guessLeft<=0){
        document.querySelector(".correct").innerText="Guess small number, Try Again";
         }
        document.querySelector(".guess").innerText=`Guess Left:- ${guessLeft}`;

     

    }
    else if(input<compInput ){
        if(!guessLeft<=0){
        document.querySelector(".correct").innerText="Guess large number, Try Again";
        }
        document.querySelector(".guess").innerText=`Guess Left:- ${guessLeft}`;
       
    }
    


}
const reset = ()=>{
    form.removeEventListener("submit",EventListener);

}
form.addEventListener("submit",EventListener)
