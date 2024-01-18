var allDrums = document.getElementsByClassName("drum");

for (i = 0; i < allDrums.length; i++) {
    allDrums[i].addEventListener("click", function () {
        var allDrumsInnerHTML = this.innerHTML
        playSound(allDrumsInnerHTML);
    })
}

document.addEventListener("keydown", function (event) {
    playSound(event.key.toUpperCase());
    changeStyle(event.key.toLowerCase(), true)
}
)

function playSound(key) {
    switch (key) {
        case "A":
            var audio = new Audio("sounds/drum1.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("sounds/drum2.mp3");
            audio.play();
            break;
        case "C":
            var audio = new Audio("sounds/drum3.mp3");
            audio.play();
            break;
        case "D":
            var audio = new Audio("sounds/drum4.mp3");
            audio.play();
            break;
        case "E":
            var audio = new Audio("sounds/kick.mp3");
            audio.play();
            break;
        case "F":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "G":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
};



function changeStyle(key, isPressed) {
    var targetElement = document.getElementById(key);
    var originalColor = "#ffffff";
    var pressedColor = "#100f0f";

    if (isPressed) {
        targetElement.style.color = pressedColor;
    } else {
        targetElement.style.color = originalColor;
    }
}

document.addEventListener("keyup", function (event) {
    changeStyle(event.key.toLowerCase(), false);
});