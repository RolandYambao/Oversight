let hidingSpot = document.getElementsByClassName("hidingSpot");
let intelligence = document.getElementById("intelligence");
let backgroundBanner = document.getElementById("watchTower");
let camera1 = document.getElementById("camera1");
let camera2 = document.getElementById("camera2");
let computerChoice = Math.floor(Math.random() * 15 + 1);
let guess = Math.floor(Math.random() * 3 + 1);
let turns = 0;
console.log(computerChoice);

let music = document.querySelector("#music");
music.volume = 0.2;

const explosion = new Audio();
explosion.src = "explosion.mp3";

const machineVoice1 = new Audio();
machineVoice1.src = "mechanicusVoice1.mp3";

const machineVoice2 = new Audio();
machineVoice2.src = "mechanicusVoice2.mp3";

const machineVoice3 = new Audio();
machineVoice3.src = "mechanicusVoice3.mp3";


function machineVoice1Play() {
    machineVoice1.play();
    machineVoice1.volume = 0.5;
}
function machineVoice2Play() {
    machineVoice2.play();
    machineVoice2.volume = 0.5;
}
function machineVoice3Play() {
    machineVoice3.play();
    machineVoice3.volume = 0.5;
}
function openFire() {
    explosion.play();
    explosion.volume = 0.5;
}
function typeWriter(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        setTimeout(function () {
            intelligence.innerHTML += phrase.charAt(i);
        }, 25 * i);
    }
}
function sixTurns() {
    if (turns == 6) {
        music.setAttribute("src", "defeatMusic.mp3");
        music.volume = 0.5;
        document.getElementById("title").innerHTML = "Oversight".strike();
        document.getElementById("tower").innerHTML = "&#9760;";
        backgroundBanner.style.backgroundImage = "url(fire.gif)";
        backgroundBanner.style.backgroundSize = "100% 100%";
        camera1.style.display = "none";
        camera2.style.display = "none";
        for (let i = 0; i < 15; i++) {
            hidingSpot[i].style.borderColor = "red";
        }
        intelligence.innerText = "";
        typeWriter("Mission Failed, we have been Destroyed, Click Here to Play Again");
        intelligence.addEventListener("click", function () {
            location.reload();
        })
        for (let i = 0; i < 15; i++) {
            hidingSpot[i].addEventListener("click", function () {
                location.reload();
            })
        }
    }
}
function successfulMission() {
    intelligence.innerText = "";
    openFire();
    music.setAttribute("src", "universalTriumph.mp3");
    music.volume = 0.1;
    typeWriter("Mission Accomplished, Click Here to Play Again");
    intelligence.style.color = "white";
    intelligence.addEventListener("click", function () {
        location.reload();
    })
    for (let i = 0; i < 15; i++) {
        hidingSpot[i].addEventListener("click", function () {
            location.reload();
        })
    }
}
function failedMission() {
    turns++;
    sixTurns();
}
function intel() {
    if (turns == 2) {
        intelligence.style.color = "orange";
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            if (guess == 1) {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Central Areas, 2 shots");
            } else if (guess == 2) {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Central Areas, 2 shots");
            } else {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Eastern Areas, 2 shots");
            }
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            if (guess == 1) {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Western Areas, 2 shots");
            } else if (guess == 2) {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Central Areas, 2 shots");
            } else {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Western Areas, 2 shots");
            }
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            if (guess == 1) {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Western Areas, 2 shots");
            } else if (guess == 2) {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Eastern Areas, 2 shots");
            } else {
                intelligence.innerText = "";
                machineVoice2Play();
                typeWriter("Report: The troublemaker is NOT in the Eastern Areas, 2 shots");
            }
        }
    }
    if (turns == 4) {
        intelligence.style.color = "red";
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            intelligence.innerText = "";
            machineVoice3Play();
            typeWriter("Intelligence: Movement discovered in the Western areas, 1 last shot");
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            intelligence.innerText = "";
            machineVoice3Play();
            typeWriter("Intelligence: Sensors pick up noises in the Eastern areas, 1 last shot");
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            intelligence.innerText = "";
            machineVoice3Play();
            typeWriter("Intelligence: Rumors of a figure in the Central areas, 1 last shot");
        }
    }
}
function watchtowerSearch() {
    machineVoice1Play();
    typeWriter("Scour the area, fire 3 shots to find the troublemaker!");
    hidingSpot[0].addEventListener("click", function () {
        openFire();
        hidingSpot[0].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[0].style.backgroundSize = "100% 100%";
        if (computerChoice == 1) {
            hidingSpot[0].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[0].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[1].addEventListener("click", function () {
        openFire();
        hidingSpot[1].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[1].style.backgroundSize = "100% 100%";
        if (computerChoice == 2) {
            hidingSpot[1].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[1].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[2].addEventListener("click", function () {
        openFire();
        hidingSpot[2].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[2].style.backgroundSize = "100% 100%";
        if (computerChoice == 3) {
            hidingSpot[2].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[2].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[3].addEventListener("click", function () {
        openFire();
        hidingSpot[3].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[3].style.backgroundSize = "100% 100%";
        if (computerChoice == 4) {
            hidingSpot[3].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[3].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[4].addEventListener("click", function () {
        openFire();
        hidingSpot[4].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[4].style.backgroundSize = "100% 100%";
        if (computerChoice == 5) {
            hidingSpot[4].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[4].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[5].addEventListener("click", function () {
        openFire();
        hidingSpot[5].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[5].style.backgroundSize = "100% 100%";
        if (computerChoice == 6) {
            hidingSpot[5].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[5].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[6].addEventListener("click", function () {
        openFire();
        hidingSpot[6].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[6].style.backgroundSize = "100% 100%";
        if (computerChoice == 7) {
            hidingSpot[6].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[6].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[7].addEventListener("click", function () {
        openFire();
        hidingSpot[7].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[7].style.backgroundSize = "100% 100%";
        if (computerChoice == 8) {
            hidingSpot[7].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[7].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[8].addEventListener("click", function () {
        openFire();
        hidingSpot[8].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[8].style.backgroundSize = "100% 100%";
        if (computerChoice == 9) {
            hidingSpot[8].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[8].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[9].addEventListener("click", function () {
        openFire();
        hidingSpot[9].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[9].style.backgroundSize = "100% 100%";
        if (computerChoice == 10) {
            ;
            hidingSpot[9].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[9].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[10].addEventListener("click", function () {
        openFire();
        hidingSpot[10].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[10].style.backgroundSize = "100% 100%";
        if (computerChoice == 11) {
            hidingSpot[10].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[10].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[11].addEventListener("click", function () {
        openFire();
        hidingSpot[11].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[11].style.backgroundSize = "100% 100%";
        if (computerChoice == 12) {
            hidingSpot[11].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[11].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[12].addEventListener("click", function () {
        openFire();
        hidingSpot[12].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[12].style.backgroundSize = "100% 100%";
        if (computerChoice == 13) {
            hidingSpot[12].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[12].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[13].addEventListener("click", function () {
        openFire();
        hidingSpot[13].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[13].style.backgroundSize = "100% 100%";
        if (computerChoice == 14) {
            hidingSpot[13].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[13].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
    hidingSpot[14].addEventListener("click", function () {
        openFire();
        hidingSpot[14].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[14].style.backgroundSize = "100% 100%";
        if (computerChoice == 15) {
            hidingSpot[14].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[14].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedMission();
        }
    })
}
watchtowerSearch();