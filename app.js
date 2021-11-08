let hidingSpot = document.getElementsByClassName("hidingSpot");
let intelligence = document.getElementById("intelligence");
let turns = 0;

function threeTurns() {
    if (turns == 3) {
        alert("Mission Failed");
        location.reload();
    }
}

function watchtowerSearch() {

    let computerChoice = Math.floor(Math.random() * 15 + 1)
    if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
        intelligence.innerText = "Intelligence: Movement discovered in the Western areas";
    }
    if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
        intelligence.innerText = "Intelligence: Sensors pick up noises in the Eastern areas";
    }
    if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
        intelligence.innerText = "Intelligence: Rumors of a figure in the Central areas";
    }

    hidingSpot[0].addEventListener("click", function () {
        console.log("Area 1 has been Searched");
        if (computerChoice == 1) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[1].addEventListener("click", function () {
        console.log("Area 2 has been Searched");
        if (computerChoice == 2) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++
            threeTurns();
        }
    })
    hidingSpot[2].addEventListener("click", function () {
        console.log("Area 3 has been Searched");
        if (computerChoice == 3) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++
            threeTurns();
        }
    })
    hidingSpot[3].addEventListener("click", function () {
        console.log("Area 4 has been Searched");
        if (computerChoice == 4) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[4].addEventListener("click", function () {
        console.log("Area 5 has been Searched");
        if (computerChoice == 5) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[5].addEventListener("click", function () {
        console.log("Area 6 has been Searched");
        if (computerChoice == 6) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[6].addEventListener("click", function () {
        console.log("Area 7 has been Searched");
        if (computerChoice == 7) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[7].addEventListener("click", function () {
        console.log("Area 8 has been Searched");
        if (computerChoice == 8) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[8].addEventListener("click", function () {
        console.log("Area 9 has been Searched");
        if (computerChoice == 9) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[9].addEventListener("click", function () {
        console.log("Area 10 has been Searched");
        if (computerChoice == 10) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[10].addEventListener("click", function () {
        console.log("Area 11 has been Searched");
        if (computerChoice == 11) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[11].addEventListener("click", function () {
        console.log("Area 12 has been Searched");
        if (computerChoice == 12) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[12].addEventListener("click", function () {
        console.log("Area 13 has been Searched");
        if (computerChoice == 13) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[13].addEventListener("click", function () {
        console.log("Area 14 has been Searched");
        if (computerChoice == 14) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
    hidingSpot[14].addEventListener("click", function () {
        console.log("Area 15 has been Searched");
        if (computerChoice == 15) {
            alert("You found the Troublemaker");
            alert("Mission Accomplished");
            location.reload();
        } else {
            alert("The Troublemaker was not Found");
            turns++;
            threeTurns();
        }
    })
}
watchtowerSearch();