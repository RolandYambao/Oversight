let hidingSpot = document.getElementsByClassName("hidingSpot");
let intelligence = document.getElementById("intelligence");
let computerChoice = Math.floor(Math.random() * 15 + 1);
let guess = Math.floor(Math.random() * 3 + 1);
let turns = 0;
let music = document.querySelector("#music");
music.volume = 0.1;

function sixTurns() {
    if (turns == 6) {
        music.setAttribute("src", "defeatMusic.mp3");
        music.volume = 0.1;
        alert("Mission Failed, the Troublemaker was in Area " + computerChoice);
        document.getElementById("title").innerHTML = "Oversight".strike();
        document.getElementById("tower").innerText = "X";
        document.getElementById("watchTower").style.backgroundColor = "red";
        for (let i = 0; i < 15; i++) {
            hidingSpot[i].style.borderColor = "red";
        }
        intelligence.innerText = "Mission Failed, we have been Destroyed, Click Here to Play Again";
        intelligence.addEventListener("click", function () {
            location.reload();
        })
    }
}
function successfulMission() {
    turns = 6;
    alert("You found the Troublemaker");
    music.setAttribute("src", "tisForThee.mp3");
    music.volume = 0.5;
    alert("Mission Accomplished, target eliminated in Area " + computerChoice);
    intelligence.innerText = "Mission Accomplished, Click Here to Play Again";
    intelligence.addEventListener("click", function () {
        location.reload();
    })
}
function failedMission() {
    alert("The Troublemaker was not Found");
    turns++;
    sixTurns();
}
function intel() {
    if (turns >= 6) {
        location.reload();
    }
    if (turns < 1) {
        intelligence.innerText = "Scour the area, fire 3 shots to find the troublemaker!";
    }
    if (turns > 1 && turns < 4) {
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            if (guess == 1) {
                intelligence.innerText = "Report: The troublemaker is not in the Central Areas";
            } else if (guess == 2) {
                intelligence.innerText = "Report: The troublemaker is not in the Central Areas";
            } else {
                intelligence.innerText = "Report: The troublemaker is not in the Eastern Areas";
            }
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            if (guess == 1) {
                intelligence.innerText = "Report: The troublemaker is not in the Western Areas";
            } else if (guess == 2) {
                intelligence.innerText = "Report: The troublemaker is not in the Central Areas";
            } else {
                intelligence.innerText = "Report: The troublemaker is not in the Western Areas";
            }
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            if (guess == 1) {
                intelligence.innerText = "Report: The troublemaker is not in the Western Areas";
            } else if (guess == 2) {
                intelligence.innerText = "Report: The troublemaker is not in the Eastern Areas";
            } else {
                intelligence.innerText = "Report: The troublemaker is not in the Eastern Areas";
            }
        }
    }
    if (turns >= 4) {
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            intelligence.innerText = "Intelligence: Movement discovered in the Western areas";
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            intelligence.innerText = "Intelligence: Sensors pick up noises in the Eastern areas";
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            intelligence.innerText = "Intelligence: Rumors of a figure in the Central areas";
        }
    }
}
function watchtowerSearch() {
    intel();

    hidingSpot[0].addEventListener("click", function () {
        intel();
        hidingSpot[0].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[0].style.backgroundSize = "100% 100%";
        console.log("Area 1 has been Searched");
        if (computerChoice == 1) {
            hidingSpot[0].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[0].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[1].addEventListener("click", function () {
        intel();
        hidingSpot[1].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[1].style.backgroundSize = "100% 100%";
        console.log("Area 2 has been Searched");
        if (computerChoice == 2) {
            hidingSpot[1].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[1].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[2].addEventListener("click", function () {
        intel();
        hidingSpot[2].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[2].style.backgroundSize = "100% 100%";
        console.log("Area 3 has been Searched");
        if (computerChoice == 3) {
            hidingSpot[2].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[2].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[3].addEventListener("click", function () {
        intel();
        hidingSpot[3].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[3].style.backgroundSize = "100% 100%";
        console.log("Area 4 has been Searched");
        if (computerChoice == 4) {
            hidingSpot[3].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[3].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[4].addEventListener("click", function () {
        intel();
        hidingSpot[4].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[4].style.backgroundSize = "100% 100%";
        console.log("Area 5 has been Searched");
        if (computerChoice == 5) {
            hidingSpot[4].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[4].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[5].addEventListener("click", function () {
        intel();
        hidingSpot[5].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[5].style.backgroundSize = "100% 100%";
        console.log("Area 6 has been Searched");
        if (computerChoice == 6) {
            hidingSpot[5].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[5].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[6].addEventListener("click", function () {
        intel();
        hidingSpot[6].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[6].style.backgroundSize = "100% 100%";
        console.log("Area 7 has been Searched");
        if (computerChoice == 7) {
            hidingSpot[6].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[6].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[7].addEventListener("click", function () {
        intel();
        hidingSpot[7].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[7].style.backgroundSize = "100% 100%";
        console.log("Area 8 has been Searched");
        if (computerChoice == 8) {
            hidingSpot[7].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[7].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[8].addEventListener("click", function () {
        intel();
        hidingSpot[8].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[8].style.backgroundSize = "100% 100%";
        console.log("Area 9 has been Searched");
        if (computerChoice == 9) {
            hidingSpot[8].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[8].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[9].addEventListener("click", function () {
        intel();
        hidingSpot[9].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[9].style.backgroundSize = "100% 100%";
        console.log("Area 10 has been Searched");
        if (computerChoice == 10) {
            hidingSpot[9].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[9].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[10].addEventListener("click", function () {
        intel();
        hidingSpot[10].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[10].style.backgroundSize = "100% 100%";
        console.log("Area 11 has been Searched");
        if (computerChoice == 11) {
            hidingSpot[10].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[10].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[11].addEventListener("click", function () {
        intel();
        hidingSpot[11].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[11].style.backgroundSize = "100% 100%";
        console.log("Area 12 has been Searched");
        if (computerChoice == 12) {
            hidingSpot[11].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[11].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[12].addEventListener("click", function () {
        intel();
        hidingSpot[12].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[12].style.backgroundSize = "100% 100%";
        console.log("Area 13 has been Searched");
        if (computerChoice == 13) {
            hidingSpot[12].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[12].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[13].addEventListener("click", function () {
        intel();
        hidingSpot[13].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[13].style.backgroundSize = "100% 100%";
        console.log("Area 14 has been Searched");
        if (computerChoice == 14) {
            hidingSpot[13].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[13].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
    hidingSpot[14].addEventListener("click", function () {
        intel();
        hidingSpot[14].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[14].style.backgroundSize = "100% 100%";
        console.log("Area 15 has been Searched");
        if (computerChoice == 15) {
            hidingSpot[14].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[14].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            failedMission();
        }
    })
}
watchtowerSearch();