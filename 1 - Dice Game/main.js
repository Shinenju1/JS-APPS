
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
    active
}
