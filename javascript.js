
var playing=false;
var score;
var action;
var timeremaining;
var correctanswer;

// if we start the game
document.getElementById("startreset").onclick=
function(){
    //if we are playing
if(playing==true){
location.reload();
}else{//if we are not playing

    //change mode to playing
    playing=true;
    //set score to 0
    score=0;
    document.getElementById("scorevalue").innerHTML=score;

    //showcountdown box
document.getElementById("timeremaining").style.display="block";
timeremaining=60;
document.getElementById("timeremainingvalue").innerHTML=timeremaining;
//hide game over box
 hide("gameover");





//change button to reset
document.getElementById("startreset").innerHTML="Reset Game";

//start countdown
startcountdown();

//generate a new ques
generateqa();
}
}

for(i=1;i<5;i++){

document.getElementById("box"+i).onclick=function(){
    // check if playing
    if(playing==true){
        if(this.innerHTML==correctanswer){
             //correct ans
             score++;
             //increases score
             document.getElementById("scorevalue").innerHTML=score;
           //hide wrong box so dont appears same time
           hide("wrong");
           show("correct");
           setTimeout(function(){
               hide("correct");
           }, 1000);

           //generate new question
           generateqa();


        }else{
            //wrong answer
            hide("correct");
           show("wrong");
           setTimeout(function(){
               hide("wrong");
           }, 1000);
        }
    }
}
}



//functions

//start counter
function startcountdown(){
    action=setInterval(function(){
    timeremaining-=1;

    document.getElementById("timeremainingvalue").innerHTML=timeremaining;
    if(timeremaining==0)
    {//gameover
        stopcountdown(); 
        show("gameover");

        document.getElementById("gameover").innerHTML="<p> game over!</p><p>your score is " + score + "</p>";

        hide("timeremaining");
        hide("correct");
        hide("wrong");
        playing=false;
        document.getElementById("startreset").innerHTML="Start Game";
    }
},1000);
}


//stopcounter
function stopcountdown(){
    clearInterval(action);
}


//hide elememt
function hide(id){
    document.getElementById(id).style.display="none";

}

//show element
function show(id){
    document.getElementById(id).style.display="block";

}

//generate q and ans

function generateqa(){
     var x=1 +Math.round(9*Math.random());
     var y=1 +Math.round(9*Math.random());
       correctanswer=x*y;
       document.getElementById("questionbox").innerHTML=x +"x"+y;
        var correctpositio=1 +Math.round(3*Math.random());
        document.getElementById("box"+correctpositio).innerHTML=correctanswer;
        //fill one box with correct ans


        //fill with wrong ans
var answers=[correctanswer];
        for(i=1;i<5;i++){
            if(i!=correctpositio){
               var wronganswer;
               do{
                

               
                    wronganswer=(1 +Math.round(9*Math.random()))*(1 +Math.round(9*Math.random()));}
               
               while(answers.indexOf(wronganswer)>-1)


                



               document.getElementById("box"+i).innerHTML=wronganswer;
                  answers.push(wronganswer);
               
            }


        }


}


