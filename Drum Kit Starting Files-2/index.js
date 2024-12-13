const drumButtons = document.querySelectorAll(".drum");

function playSound(key) {
    switch (key) {
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}

function animateButton(key) {
    const activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Add click event listeners to all drum buttons
drumButtons.forEach(button => {
    button.addEventListener("click", function () {
        const buttonKey = this.innerHTML; // Correctly fetch the key from the button's innerHTML
        playSound(buttonKey);
        animateButton(buttonKey);
    });
});

// Add keydown event listener
document.addEventListener("keydown", (event) => {
    const validKeys = ["w", "a", "s", "d", "j", "k", "l"];
    if (!validKeys.includes(event.key)) return; // Ignore invalid keys
    playSound(event.key);
    animateButton(event.key);
});