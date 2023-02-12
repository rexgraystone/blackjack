let max = 11
let min = 2
let winCount = 0
let gameCount = 0
let locGameCount = 0
let repeat
let play

let printMessage = document.getElementById("message-el")
let printScore = document.getElementById("scoreboard-el")
let printUserCards = document.getElementById("user-cards-el")
let printDealerCards = document.getElementById("dealer-cards-el")
let printUserSum = document.getElementById("user-sum-el")
let printDealerSum = document.getElementById("dealer-sum-el")

let dealBtn = document.getElementById("deal-btn")
let hitBtn = document.getElementById("hit-btn")
let standBtn = document.getElementById("stand-btn")
let resetBtn = document.getElementById("reset-btn")

function genNumber() {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

gameCount = parseInt(localStorage.getItem("locGameCount"))
winCount = parseInt(localStorage.getItem("locWinCount"))

if(gameCount > 0) {
    printScore.textContent = `You have won ${winCount} games out of ${gameCount}.`
}

do {
    let message = "Would you like to play a round?"
    printMessage.textContent = message
    let firstUserCard = 0
    let secondUserCard = 0
    let firstDealerCard = 0
    let secondDealerCard = 0
    printUserCards.textContent = "User's Cards: "
    printDealerCards.textContent = "Dealer's Cards: "
    let userSum = 0
    let dealerSum = 0
    printUserSum.textContent = "User's Sum: "
    printDealerSum.textContent = "Dealer's Sum: "

    function blackjack() {
        if((userSum < 21) && (dealerSum < 21)) {
            message = "Would you like to draw another card?"
            console.log(message)
            printMessage.textContent = message
        } else if (((userSum === 21) && (dealerSum != 21)) || ((dealerSum > 21) && (userSum <=21))) {
            message = "You've got blackjack!"
            winCount++
            winCount.toString()
            localStorage.setItem("locWinCount", winCount)
            console.log(message)
            printMessage.textContent = message
        } else if ((userSum > 21) || (dealerSum === 21)) {
            message = "You Lost"
            console.log(message)
            hitBtn.disabled = true
            standBtn.disabled = true
            printMessage.textContent = message
        } else if ((userSum >= 21) && (dealerSum >= 21)) {
            message = "You drew"
            console.log(message)
            hitBtn.disabled = true
            standBtn.disabled = true
            printMessage.textContent = message
        }
    }

    function deal() {
        if((firstUserCard || secondUserCard) === 0) {
            dealBtn.disabled = false
            firstUserCard = genNumber()
            secondUserCard = genNumber()
            firstDealerCard = genNumber()
            secondDealerCard = genNumber()
            printUserCards.textContent += `${firstUserCard} \t${secondUserCard}`
            userSum = firstUserCard + secondUserCard
            dealerSum = firstDealerCard + secondDealerCard
            printDealerCards.textContent += `${firstDealerCard} \t${secondDealerCard}`
            printUserSum.textContent += `${userSum}`
            printDealerSum.textContent += `${dealerSum}`
            console.log("Deal button clicked")
            blackjack()
        } else {
            dealBtn.disabled = true
            alert("Please click \'Hit\', \'Stand\', or '\Reset\'.")
            console.log("Deal button clicked")
        }
    }

    function hit() {
        if((firstUserCard || secondUserCard) != 0) {
            hitBtn.disabled = false
            let newUserCard = genNumber()
            printUserCards.textContent += ` ${newUserCard}`
            userSum += newUserCard
            let newDealerCard = genNumber()
            printDealerCards.textContent += ` ${newDealerCard}`
            dealerSum += newDealerCard
            printUserSum.textContent = "User's Sum: " + userSum
            printDealerSum.textContent = "Dealer's Sum: " + dealerSum
            blackjack()
            console.log("Hit button clicked")
            return userSum
        } else {
            hitBtn.disabled = true
            console.log("Hit button clicked")
            alert("Please start a new game by clicking \'Deal\'.")
        }
    }

    function stand() {
        if((firstUserCard || secondUserCard) != 0) {
            standBtn.disabled = false
            play = false
            gameCount++
            gameCount.toString()
            localStorage.setItem("locGameCount", gameCount)
            printMessage.textContent = `You have ended the game with ${userSum} points.`
            console.log("Stand button clicked")
        } else {
            standBtn.disabled = true
            console.log("Stand button clicked")
            alert("Please start a new game by clicking \'Deal\'.")
            standBtn.disabled = false
        }
    }

    function reset() {
        if((firstUserCard || secondUserCard) != 0) {
            resetBtn.disabled = false
            repeat = true
            gameCount++
            gameCount.toString()
            localStorage.setItem("locGameCount", gameCount)
            console.log("Restart button clicked")
            location.reload()
        } else {
            resetBtn.disabled = true
            console.log("Reset button clicked")
            alert("Please start a new game by clicking \'Deal\'.")
        }
    }
} 
while((repeat === true) || (play === true))