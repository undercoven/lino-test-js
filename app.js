var scores, roundScore, activePlayer, val;

var diceD = document.querySelector('.dice');
val = 100;

resetX();

function win(){
    val = document.querySelector("#win").value;
    alert("Winning value set to "+val);
    resetX();    
}
function switchplayer(){

    document.querySelector("#current-"+activePlayer).textContent = "0";    
    
    (activePlayer === 0) ? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".part0").classList.toggle('you');
    document.querySelector(".part1").classList.toggle('you');
    
    diceD.style.display="none";
    roundScore = 0; 
}

function resetX(){
    
    document.querySelector("#current-0").textContent = "0";    
    document.querySelector("#current-1").textContent = "0";    
    
    document.querySelector("#score-0").textContent = "0";    
    document.querySelector("#score-1").textContent = "0";    

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // current player is '0' and next player is '1' because the array works as 0,1,...

    document.querySelector("#win").value = ""    
    document.querySelector(".part0").classList.add('you');
    document.querySelector(".part1").classList.remove('you');
        
    diceD.style.display="none";
    
}
    
function newGame(){
    if(confirm("Are you sure?") !== true){

    }
    else{
        resetX();
    }
}
    

document.querySelector('.rolla').addEventListener('click', function(){
    var num = Math.floor(Math.random() * 6) + 1;
    var pos = ["zero", "one", "two", "three", "four", "five", "six"];
    diceD.style.display = 'block';
    diceD.src = pos[num]+".fw.png";


    if(num !== 1){
        roundScore += num; 
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    }
    else{
        document.querySelector('#current-'+activePlayer).textContent = roundScore;        
            
        switchplayer();
    }

});

document.querySelector(".hold").addEventListener("click", function(){
    var newscore = scores[activePlayer] + roundScore;
    document.querySelector("#score-"+activePlayer).textContent = newscore;
    scores[activePlayer] = newscore;

    if(scores[activePlayer] >= val)
    {
        var dispa = activePlayer + 1;
        alert("Player "+ dispa + " wins the round");
        resetX();
    }
    else{
    switchplayer();    
    }

});