let scoreCounterHome = document.getElementById("home-score")
let scoreCounterGuest = document.getElementById("guest-score")

// da ich DRY programieren möchte, überlege ich, wo ich mich
//wiederholen müsste

//HOME
let countHome = 0
function score1Home() {
  countHome += 1
  scoreCounterHome.textContent = countHome
}

function score2Home() {
  countHome += 2
  scoreCounterHome.textContent = countHome
}

function score3Home() {
  countHome += 3
  scoreCounterHome.textContent = countHome
}

//GUEST
let countGuest = 0
function score1Guest() {
  countGuest += 1
  scoreCounterGuest.textContent = countGuest
}

function score2Guest() {
  countGuest += 2
  scoreCounterGuest.textContent = countGuest
}

function score3Guest() {
  countGuest += 3
  scoreCounterGuest.textContent = countGuest
}
//DELETE
function deleteScore() {
  countHome = 0
  countGuest = 0
  document.getElementById("home-score").textContent = 0
  document.getElementById("guest-score").textContent = 0
}
