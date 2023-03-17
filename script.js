/*
    Dice Challenge
*/
let score = {player:{single:0, one:{total:0, current:0}, two:{total:0, current:0}}}
let player = {status:'one'}
const display =
    {score:
        {player:
            {single:document.getElementById('display-score-single')
            ,one:
                {total:document.getElementById('display-score-player1-total')
                ,current:document.getElementById('display-score-player1-current')
                }
            ,two:
                {total:document.getElementById('display-score-player2-total')
                ,current:document.getElementById('display-score-player2-current')
                }
            }
        }
    }
const message = 
    {player:
        {single:document.getElementById('message-player-single')
        ,one:document.getElementById('message-player1')
        ,two:document.getElementById('message-player2')
        } 
    }
const home = document.getElementById('home')
const title = document.getElementById('title')
const play1 = document.getElementById('play1')
const play2 = document.getElementById('play2')
const roll1 = document.getElementById('roll1')
const roll2 = document.getElementById('roll2')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')

// roll of the dice for the single player game
roll1.addEventListener('click', ()=> 
{
    message.player.single.value = ''
    let die = Math.floor((Math.random() * 6) + 1)
    score.player.single += die

    if (die == 1)
    {
        message.player.single.value = 'You lose'
        score.player.single = 0
    }
    else if (score.player.single > 20)
    {
        message.player.single.value = 'You Win'
        score.player.single = 0
    }

    display.score.player.single.value = score.player.single
    image1.src = './images/dice' + die + '.png'

})

// roll of the dice for the double player game
roll2.addEventListener('click', ()=> 
{
    let die = Math.floor((Math.random() * 6) + 1)
    score.player[player.status].total += die

    if (die == 1)
    {
        message.player[player.status].value = 'You lose'
        score.player[player.status].total = 0
    }
    else if (score.player[player.status].total > 20)
    {
        message.player[player.status].value = 'You Win'
        score.player[player.status].total = 0
    }

    display.score.player[player.status].total.value = score.player[player.status].total
    image2.src = './images/dice' + die + '.png'
})


// for the double player game, will hold the score for the current player
hold.addEventListener('click', ()=> 
{
    score.player[player.status].current = score.player[player.status].total
    display.score.player[player.status].current.value = score.player[player.status].total
    score.player[player.status].total = 0
    display.score.player[player.status].total.value = 0

    if (player.status == 'one')
    {
        player.status = 'two'
    }
    else
    {
        player.status = 'one'
    }
    
    image2.src = './images/start.jpg'
})

// start a new game for the double player game
newgame.addEventListener('click', Play(2))

// When the title is clicked the home page is displayed
title.addEventListener('click', HomePage())

function HomePage()
{
/*
    displays the home page
*/
    home.style.display = 'block'
    play1.style.display = 'none'
    play2.style.display = 'none'
}

function Play(i)
{
/*
    displays the games

    i = 1 - display the single player game
    i = 2 - display the double player game
*/
    if (i == 1)
    {
        home.style.display = 'none'
        play1.style.display = 'block'
        play2.style.display = 'none'
        score.player.single = 0
        display.score.player.single.value = score.player.single
        image1.src = './images/start.jpg'
        message.player.single.value = "click 'roll' to start"
    }
    else
    {
        home.style.display = 'none'
        play1.style.display = 'none'
        play2.style.display = 'block'
        score.player.one.total = 0
        score.player.one.current = 0
        score.player.two.total = 0
        score.player.two.current = 0
        display.score.player.one.total.value = score.player.one.total
        display.score.player.one.current.value = score.player.one.current
        display.score.player.two.total.value = score.player.two.total
        display.score.player.two.current.value = score.player.two.current
        message.player.one.value = ''
        message.player.two.value = ''
        player.status = 'one'
        image2.src = './images/start.jpg'
    }
}
