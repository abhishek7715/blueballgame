const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

function updateGame() {
    const sliderValue = parseInt(document.getElementById("slider").value);

    if (sliderValue > randomNumber) {
        document.getElementById("result").textContent = "The guessed number is Bigger!";
        document.getElementById("result").style.color = "red";
        document.getElementById("ball-" + sliderValue).style.backgroundColor = "red";

    } else if (sliderValue < randomNumber) {
        document.getElementById("result").textContent = "The guessed number is smaller!";
        document.getElementById("result").style.color = "yellow";
        document.getElementById("ball-" + sliderValue).style.backgroundColor = "yellow";
    } else {
        document.getElementById("result").textContent = "You win! It's " + randomNumber;
        document.getElementById("result").style.color = "green";
        document.getElementById("ball-" + randomNumber).style.backgroundColor = "green";
        document.getElementById("slider").disabled = true;
    }
    attempts--;
    document.getElementById("attempt").textContent = "Attempts left : " + attempts;
    if (attempts === 0 && sliderValue !== randomNumber) {
        document.getElementById("result").textContent = "You lose! The number was " + randomNumber;
        document.getElementById("result").style.color = "red";
        document.getElementById("slider").disabled = true;
    }
}

document.getElementById("slider").addEventListener("input", updateGame);

