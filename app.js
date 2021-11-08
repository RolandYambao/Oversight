let hidingSpot = document.getElementsByClassName("hidingSpot");
let intelligence = document.getElementById("intelligence");

/*
hidingSpot[0].addEventListener("click", function () {
    alert("Area 1 has been Searched");
})
*/

function watchtowerSearch() {
    hidingSpot[0].addEventListener("click", function () {
        alert("Area 1 has been Searched");
        return 1;
    })
    hidingSpot[1].addEventListener("click", function () {
        alert("Area 2 has been Searched");
        return 2;
    })
    hidingSpot[2].addEventListener("click", function () {
        alert("Area 3 has been Searched");
        return 3;
    })
    hidingSpot[3].addEventListener("click", function () {
        alert("Area 3 has been Searched");
        return 4;
    })
}

function aiTroublemaker() {
    let randomNumber = Math.floor(Math.random() * 15 + 1)
    console.log(randomNumber);
    if (randomNumber == watchtowerSearch()) {
        alert("You found the Troublemaker");
    }
}
aiTroublemaker();