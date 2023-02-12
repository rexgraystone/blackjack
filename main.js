let max = 11
let min = 2

let sum = 0

let message = ""
do {
    function genNumber() {
        message = ""
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let firstCard = parseInt(genNumber())
    let secondCard = parseInt(genNumber())
    sum = firstCard + secondCard

    let printCards = document.getElementById("cards-el")
    printCards.textContent += `${firstCard} \t${secondCard}`

    let printSum = document.getElementById("sum-el")
    printSum.textContent += `${firstCard + secondCard}`

    let printInfo = document.getElementById("message-el")

    function drawCard() {
        sum += genNumber
        printSum.textContent = sum
        return sum
    }

    function blackjack() {
        if(sum < 21) {
            message = "Would you like to draw another card?"
            console.log(message)
            printInfo.textContent = message
        } else if (sum === 21) {
            message = "You've got blackjack!"
            console.log(message)
            printInfo.textContent = message
        } else if (sum > 21) {
            message = "You Lost"
            console.log(message)
            printInfo.textContent = message
        }
    }

    let repeat = false

    function restart() {
        repeat = true
    }
} while(repeat)
