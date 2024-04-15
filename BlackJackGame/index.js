
let card=[]
let sum=0

let hasBlackJack=false
let isAlive=true
let message=""

let messageEl= document.getElementById("play")
// let sumEl = document.getElementById("sum-el")
let sumEl= document.querySelector("#sum-el")

let cardEl= document.querySelector("#card-el")

 let player={
    name : "Itachi",
    chips : 145
}

let playerEl= document.querySelector("#play-id")
playerEl.textContent= player.name + " : $"+ player.chips



function getRandomNumber(){

    let randomNumber= Math.floor(Math.random()*13)+1;
    if (randomNumber ===1)
    return 11

    else if (randomNumber > 10)
    return 10
    
    else
    return randomNumber   
}

function startGame(){

    isAlive= true
    let firstCard=getRandomNumber()
    let secondCard=getRandomNumber()
    card=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){

    sumEl.innerText = "Sum: "+sum;
    cardEl.innerText="Sum : "
    
    
    for(let i=0; i<card.length; i++){
    cardEl.innerText += " "+card[i]+" "
    }


if (sum<=20){
    message="Do you want to draw another Card ? "
} else if (sum==21){
    message="You have got the BlackJack! "
    hasBlackJack=true
}else {
    isAlive=false
    message="You are out of the Game!"
}

messageEl.innerText=message;
}

function newCard(){

    if(isAlive === true && hasBlackJack === false){

let ncard=getRandomNumber()

sum += ncard
card.push(ncard)

renderGame()
}

}
