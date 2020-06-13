let drumButtons = document.getElementsByClassName("drum");
let audion = new Audio();
let keyPressed;

for (let i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        keyPressed = this.innerText;
        playSound(keyPressed);
        buttonAnimation(keyPressed);
    });
}

document.addEventListener("keypress", function(event) {
    keyPressed = event.key;
    playSound(keyPressed);
    buttonAnimation(keyPressed);
});

function playSound(key) {
    switch (key) {
        case "a":
            let crash = new Audio("../sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            let kick = new Audio("../sounds/kick-bass.mp3");
            kick.play();
            break;
        case "d":
            let snare = new Audio("../sounds/snare.mp3");
            snare.play();
            break;
        case "f":
            let tom1 = new Audio("../sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("../sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("../sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let tom4 = new Audio("../sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            alert(`${key} is not an acceptable letter`);
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}