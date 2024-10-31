let randomnumber=(Math.floor((Math.random()*10)+1));
let chances=3;
console.log(randomnumber);

function guessnumber(){
    let userlogin=parseInt(document.getElementById("number").value);
    let win=document.getElementById("win");
    let fail=document.getElementById("fail");
    let amashi=document.getElementById("amashi");
     console.log(userlogin);
     
    
    if(chances>0){
       if(randomnumber===userlogin){
        amashi.innerHTML="Chances left: 0";
        win.innerHTML="you win the game...!";
        fail.innerHTML="guessing number is correct...";

       }else{
          chances--;
          amashi.innerHTML="Chances left: "+chances;
          if(randomnumber>userlogin){
            fail.innerHTML="your number is too low";
        
          }else{
            fail.innerHTML="your number is too high";
          }
          }
         if (chances===0 && randomnumber !==userlogin){
            win.innerHTML=`game over... Correct Number Is ${randomnumber}`;
         }
         }

       }

     
        
        

        
    

     
 