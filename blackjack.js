let max = 11
let min = 2
let winCount = 0
let gameCount = 0
let repeat
let play

let printMessage = document.getElementById("message-el")
let printScore = document.getElementById("scoreboard-el")
let printCards = document.getElementById("cards-el")
let printSum = document.getElementById("sum-el")

function genNumber() {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

do {
    let play = true

    let message = "Would you like to play a round?"
    printMessage.textContent = message
    let firstCard = 0
    let secondCard = 0
    printCards.textContent = "Cards: "
    let sum = 0
    printSum.textContent = "Sum: "

    if(gameCount > 0) {
        printScore.textContent = `You have won ${winCount} games out of ${gameCount}.`
    }

    function blackjack() {
        if(sum < 21) {
            message = "Would you like to draw another card?"
            console.log(message)
            printMessage.textContent = message
        } else if (sum === 21) {
            message = "You've got blackjack!"
            winCount++
            console.log(message)
            printMessage.textContent = message
        } else if (sum > 21) {
            message = "You Lost"
            console.log(message)
            printMessage.textContent = message
        }
    }

    function deal() {
        if((firstCard || secondCard) === 0) {
            firstCard = genNumber()
            secondCard = genNumber()
            printCards.textContent += `${firstCard} \t${secondCard}`
            sum = firstCard + secondCard
            printSum.textContent += `${sum}`
            console.log("Deal button clicked")
            blackjack()
        } else {
            alert("Please click the 'Hit' button")
            console.log("Deal button clicked")
        }
    }
    
    function hit() {
        if((firstCard || secondCard) != 0) {
            let newCard = genNumber()
            printCards.textContent += ` ${newCard}`
            sum += genNumber()
            printSum.textContent = "Sum: " + sum
            blackjack()
            console.log("Hit button clicked")
            return sum
        } else {
            console.log("Hit button clicked")
            alert("Please start a new game.")
        }
    }

    function stand() {
        play = false
        gameCount++
        console.log("Stand button clicked")
    }

    function reset() {
        repeat = true
        gameCount++
        console.log("Restart button clicked")
    }
} 
while((repeat === true) || (play === true))
