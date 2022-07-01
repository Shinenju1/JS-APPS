
var scores,roundScore,activePlayer,dice,gamePlaying ;

init();

document.querySelector('.btn-roll').addEventListener("click",function()
{
    if(gamePlaying)
    {
        // Crea un numero random e tira il dato
        var dice=Math.floor(Math.random()*6)+1;
        
        const diceDOM = document.querySelector('.dice');
        diceDOM.style.display="block";
        diceDOM.src='dice-'+dice+'.png';

        if(dice!==1)
        {
            roundScore+=dice;
            document.getElementById('current-'+activePlayer).textContent=roundScore
        }
        else{
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener("click",function()
{
    if(gamePlaying)
    {
        scores[activePlayer]+=roundScore;
        document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

        if(scores[activePlayer]<=100)
        {
            document.getElementById('name'+activePlayer).textContent='Abbiamo un vincitore!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            gamePlaying = false;

        }
else{
    nextPlayer();
}
    }
});

function nextPlayer()
{
    activePlayer === 0 ?activePlayer =1:activePlayer = 0; //
    roundScore = 0;
    var current0 = document.getElementById('current-0')
    var current1 = document.getElementById('current-1')
    current0.textContent='0';
    current1.textContent='1';
    // Cambia classe active in sequenza ogni volta che la function viene chiamata
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none'; // Fa scomparire il dado se tiri 1
}

document.querySelector(".btn-new").addEventListener("click",init);
function init()
{
    scores = [0,0];
    roundScore =0;
    activePlayer=0;//0 is the first player , 1 is the second player

    gamePlaying=true;

var current0 = document.getElementById('current-0');
var current1 = document.getElementById('current-1');
current0.textContent='0';
current1.textContent='0';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';

//Changing the css-so the dice is not displayed initially
document.querySelector('.dice').style.display='none';

//Removing the winner and active class
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

//Making the first player as the active player
document.querySelector('.player-0-panel').classList.add('active');


}
