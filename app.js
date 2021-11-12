// Declaring all Main Variables
const hidingSpot = document.getElementsByClassName("hidingSpot");
const intelligence = document.getElementById("intelligence");
const backgroundBanner = document.getElementById("watchTower");
const camera1 = document.getElementById("camera1");
const camera2 = document.getElementById("camera2");
const computerChoice = Math.floor(Math.random() * 15 + 1);
const guess = Math.floor(Math.random() * 3 + 1);
let turns = 0;
const scour = "Scour the area, fire 3 shots to find the troublemaker!";
const notWestern = "Report: The troublemaker is NOT in the Western Areas, 2 shots";
const notCenter = "Report: The troublemaker is NOT in the Central Areas, 2 shots";
const notEastern = "Report: The troublemaker is NOT in the Eastern Areas, 2 shots";
const lastWestern = "Intelligence: Movement discovered in the Western areas, 1 last shot";
const lastCenter = "Intelligence: Rumors of a figure in the Central areas, 1 last shot";
const lastEastern = "Intelligence: Sensors pick up noises in the Eastern areas, 1 last shot";
const victory = "Mission Accomplished, Click Here to Play Again";
const defeat = "Mission Failed, we have been Destroyed, Click Here to Play Again";

const music = document.querySelector("#music");
music.volume = 0.2;

const explosion = new Audio();
explosion.src = "explosion.mp3";

const machineVoice1 = new Audio();
machineVoice1.src = "mechanicusVoice1.mp3";

const machineVoice2 = new Audio();
machineVoice2.src = "mechanicusVoice2.mp3";

const machineVoice3 = new Audio();
machineVoice3.src = "mechanicusVoice3.mp3";

const machineVoice4 = new Audio();
machineVoice4.src = "mechanicusVoice4.mp3";

const machineVoice5 = new Audio();
machineVoice5.src = "mechanicusVoice5.mp3";

// Functions for Sound Effects
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
function machineVoice4Play() {
    machineVoice4.play();
    machineVoice4.volume = 0.5;
}
function machineVoice5Play() {
    machineVoice5.play();
    machineVoice5.volume = 0.5;
}
function openFire() {
    explosion.play();
    explosion.volume = 0.5;
}

// Function for the interesting Typing Effect for the Hints
function typeWriter(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        setTimeout(function () {
            intelligence.innerHTML += phrase.charAt(i)
        }, 25 * i);
    }
}

// Function to stop all typing
function stopTyping() {
    let allTimeouts = setTimeout(" ");
    for (let i = 0; i < allTimeouts; i++) {
        clearTimeout(i);
    }
    intelligence.innerText = "";
}

// Function to stop explosion sound to begin next one
function nextExplosion() {
    explosion.pause();
    explosion.currentTime = 0;
}

// Function for the failure of one Attack
function failedAttack() {
    turns++;
    failedMission();
}

// Highlight the Western areas if the troublemaker is there
function highlightWest() {
    hidingSpot[0].style.borderColor = "red";
    hidingSpot[0].style.boxShadow = "0 0 10px red";
    hidingSpot[1].style.borderColor = "red";
    hidingSpot[1].style.boxShadow = "0 0 10px red";
    hidingSpot[5].style.borderColor = "red";
    hidingSpot[5].style.boxShadow = "0 0 10px red";
    hidingSpot[10].style.borderColor = "red";
    hidingSpot[10].style.boxShadow = "0 0 10px red";
    hidingSpot[11].style.borderColor = "red";
    hidingSpot[11].style.boxShadow = "0 0 10px red";
}

// Darken the Western areas if the troublemaker is not there
function darkenWest() {
    hidingSpot[0].style.borderColor = "indigo";
    hidingSpot[0].style.boxShadow = "0 0 0 indigo";
    hidingSpot[1].style.borderColor = "indigo";
    hidingSpot[1].style.boxShadow = "0 0 0 indigo";
    hidingSpot[5].style.borderColor = "indigo";
    hidingSpot[5].style.boxShadow = "0 0 0 indigo";
    hidingSpot[10].style.borderColor = "indigo";
    hidingSpot[10].style.boxShadow = "0 0 0 indigo";
    hidingSpot[11].style.borderColor = "indigo";
    hidingSpot[11].style.boxShadow = "0 0 0 indigo";
}

// Highlight the Eastern areas if the troublemaker is there
function highlightEast() {
    hidingSpot[3].style.borderColor = "red";
    hidingSpot[3].style.boxShadow = "0 0 10px red";
    hidingSpot[4].style.borderColor = "red";
    hidingSpot[4].style.boxShadow = "0 0 10px red";
    hidingSpot[9].style.borderColor = "red";
    hidingSpot[9].style.boxShadow = "0 0 10px red";
    hidingSpot[13].style.borderColor = "red";
    hidingSpot[13].style.boxShadow = "0 0 10px red";
    hidingSpot[14].style.borderColor = "red";
    hidingSpot[14].style.boxShadow = "0 0 10px red";
}

// Darken the Eastern areas if the troublemaker is not there
function darkenEast() {
    hidingSpot[3].style.borderColor = "indigo";
    hidingSpot[3].style.boxShadow = "0 0 0 indigo";
    hidingSpot[4].style.borderColor = "indigo";
    hidingSpot[4].style.boxShadow = "0 0 0 indigo";
    hidingSpot[9].style.borderColor = "indigo";
    hidingSpot[9].style.boxShadow = "0 0 0 indigo";
    hidingSpot[13].style.borderColor = "indigo";
    hidingSpot[13].style.boxShadow = "0 0 0 indigo";
    hidingSpot[14].style.borderColor = "indigo";
    hidingSpot[14].style.boxShadow = "0 0 0 indigo";
}

// Highlight the Central areas if the troublemaker is there
function highlightCenter() {
    hidingSpot[2].style.borderColor = "red";
    hidingSpot[2].style.boxShadow = "0 0 10px red";
    hidingSpot[6].style.borderColor = "red";
    hidingSpot[6].style.boxShadow = "0 0 10px red";
    hidingSpot[7].style.borderColor = "red";
    hidingSpot[7].style.boxShadow = "0 0 10px red";
    hidingSpot[8].style.borderColor = "red";
    hidingSpot[8].style.boxShadow = "0 0 10px red";
    hidingSpot[12].style.borderColor = "red";
    hidingSpot[12].style.boxShadow = "0 0 10px red";
}

// Darken the Central areas if the troublemaker is not there
function darkenCenter() {
    hidingSpot[2].style.borderColor = "indigo";
    hidingSpot[2].style.boxShadow = "0 0 0 indigo";
    hidingSpot[6].style.borderColor = "indigo";
    hidingSpot[6].style.boxShadow = "0 0 0 indigo";
    hidingSpot[7].style.borderColor = "indigo";
    hidingSpot[7].style.boxShadow = "0 0 0 indigo";
    hidingSpot[8].style.borderColor = "indigo";
    hidingSpot[8].style.boxShadow = "0 0 0 indigo";
    hidingSpot[12].style.borderColor = "indigo";
    hidingSpot[12].style.boxShadow = "0 0 0 indigo";
}


// Function for the given hints to the player
function intel() {
    if (turns == 2) {
        intelligence.style.color = "orange";
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            if (guess == 1) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightEast();
                typeWriter(notCenter);
            } else if (guess == 2) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightEast();
                typeWriter(notCenter);

            } else {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightCenter();
                typeWriter(notEastern);
            }
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            if (guess == 1) {
                stopTyping();
                machineVoice2Play();
                highlightCenter();
                highlightEast();
                typeWriter(notWestern);
            } else if (guess == 2) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightEast();
                typeWriter(notCenter);
            } else {
                stopTyping();
                machineVoice2Play();
                highlightCenter();
                highlightEast();
                typeWriter(notWestern);
            }
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            if (guess == 1) {
                stopTyping();
                machineVoice2Play();
                highlightCenter();
                highlightEast();
                typeWriter(notWestern);
            } else if (guess == 2) {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightCenter();
                typeWriter(notEastern);
            } else {
                stopTyping();
                machineVoice2Play();
                highlightWest();
                highlightCenter();
                typeWriter(notEastern);
            }
        }
    }
    if (turns == 4) {
        intelligence.style.color = "red";
        if (computerChoice == 1 || computerChoice == 2 || computerChoice == 6 || computerChoice == 11 || computerChoice == 12) {
            stopTyping();
            machineVoice3Play();
            highlightWest();
            darkenCenter();
            darkenEast();
            typeWriter(lastWestern);
        }
        if (computerChoice == 4 || computerChoice == 5 || computerChoice == 10 || computerChoice == 14 || computerChoice == 15) {
            stopTyping();
            machineVoice3Play();
            highlightEast();
            darkenWest();
            darkenCenter();
            typeWriter(lastEastern);
        }
        if (computerChoice == 3 || computerChoice == 7 || computerChoice == 8 || computerChoice == 9 || computerChoice == 13) {
            stopTyping();
            machineVoice3Play();
            highlightCenter();
            darkenWest();
            darkenEast();
            typeWriter(lastCenter);
        }
    }
}
// Function for the Failure of the player
function failedMission() {
    if (turns == 6) {
        stopTyping();
        music.setAttribute("src", "defeatMusic.mp3");
        music.volume = 0.5;
        document.getElementById("title").innerHTML = "Oversight".strike();
        document.getElementById("tower").innerHTML = "&#9760;";
        backgroundBanner.style.backgroundImage = "url(fire.gif)";
        backgroundBanner.style.backgroundSize = "100% 100%";
        camera1.style.display = "none";
        camera2.style.display = "none";
        highlightWest();
        highlightCenter();
        highlightEast();
        machineVoice4Play();
        typeWriter(defeat);
        for (let i = 0; i < 15; i++) {
            hidingSpot[i].addEventListener("click", function () {
                location.reload();
            })
        }
    }
}

// Function for the Success of the player
function successfulMission() {
    stopTyping();
    openFire();
    music.setAttribute("src", "theInnerPartySpeaker.mp3");
    music.volume = 0.1;
    machineVoice5Play();
    typeWriter(victory);
    intelligence.style.color = "white";
    darkenWest();
    darkenCenter();
    darkenEast();
    for (let i = 0; i < 15; i++) {
        hidingSpot[i].addEventListener("click", function () {
            location.reload();
        })
    }
}

// Function for the initiation of the game
function watchtowerSearch() {
    machineVoice1Play();
    typeWriter(scour);

    intelligence.addEventListener("click", function () {
        location.reload();
    })

    hidingSpot[0].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[0].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[0].style.backgroundSize = "100% 100%";
        if (computerChoice == 1) {
            hidingSpot[0].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[0].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[1].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[1].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[1].style.backgroundSize = "100% 100%";
        if (computerChoice == 2) {
            hidingSpot[1].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[1].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[2].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[2].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[2].style.backgroundSize = "100% 100%";
        if (computerChoice == 3) {
            hidingSpot[2].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[2].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[3].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[3].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[3].style.backgroundSize = "100% 100%";
        if (computerChoice == 4) {
            hidingSpot[3].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[3].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[4].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[4].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[4].style.backgroundSize = "100% 100%";
        if (computerChoice == 5) {
            hidingSpot[4].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[4].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[5].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[5].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[5].style.backgroundSize = "100% 100%";
        if (computerChoice == 6) {
            hidingSpot[5].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[5].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[6].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[6].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[6].style.backgroundSize = "100% 100%";
        if (computerChoice == 7) {
            hidingSpot[6].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[6].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[7].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[7].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[7].style.backgroundSize = "100% 100%";
        if (computerChoice == 8) {
            hidingSpot[7].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[7].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[8].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[8].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[8].style.backgroundSize = "100% 100%";
        if (computerChoice == 9) {
            hidingSpot[8].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[8].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[9].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[9].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[9].style.backgroundSize = "100% 100%";
        if (computerChoice == 10) {
            hidingSpot[9].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[9].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[10].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[10].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[10].style.backgroundSize = "100% 100%";
        if (computerChoice == 11) {
            hidingSpot[10].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[10].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[11].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[11].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[11].style.backgroundSize = "100% 100%";
        if (computerChoice == 12) {
            hidingSpot[11].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[11].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[12].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[12].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[12].style.backgroundSize = "100% 100%";
        if (computerChoice == 13) {
            hidingSpot[12].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[12].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[13].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[13].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[13].style.backgroundSize = "100% 100%";
        if (computerChoice == 14) {
            hidingSpot[13].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[13].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
    hidingSpot[14].addEventListener("click", function () {
        nextExplosion();
        openFire();
        hidingSpot[14].style.backgroundImage = "url(destroyedBuilding.jpg)";
        hidingSpot[14].style.backgroundSize = "100% 100%";
        if (computerChoice == 15) {
            hidingSpot[14].style.backgroundImage = "url(Bullseye.png)";
            hidingSpot[14].style.backgroundSize = "100% 100%";
            successfulMission();
        } else {
            intel();
            failedAttack();
        }
    })
}
// Game Initiation
watchtowerSearch();