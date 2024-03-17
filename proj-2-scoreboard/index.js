
let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById('home-score')
let guestScoreDisplay = document.getElementById('guest-score')

function homeOnePoint() {
    homeScore += 1
    homeScoreDisplay.textContent = homeScore
}
function homeTwoPoint() {
    homeScore += 2
    homeScoreDisplay.textContent = homeScore
}
function homeThreePoint() {
    homeScore += 3
    homeScoreDisplay.textContent = homeScore
}

function guestOnePoint() {
    guestScore += 1
    guestScoreDisplay.textContent = guestScore
}
function guestTwoPoint() {
    guestScore += 2
    guestScoreDisplay.textContent = guestScore
}
function guestThreePoint() {
    guestScore += 3
    guestScoreDisplay.textContent = guestScore
}

