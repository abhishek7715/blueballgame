const holes = document.querySelectorAll('.hole');
const message = document.getElementById('message');
const playAgainButton = document.querySelector('.playAgain');

let foundNemo = false;
let remainingAttempts = 6;

var nemoHoleIndex = Math.floor(Math.random() * holes.length);

holes.forEach((hole, index) => {
    hole.addEventListener('click', () => {
        if (foundNemo || remainingAttempts === 0) return;
        message.textContent = 'Attempts remaining: ' + (remainingAttempts - 1)
        if (index === nemoHoleIndex) {
            hole.classList.remove('x');
            hole.classList.add('nemo');
            message.textContent = 'You Win! You Found Nemo!';
            foundNemo = true;
            remainingAttempts = 0;
            resetGame();
        } else {
            hole.classList.add('x');
        }

        remainingAttempts--;

        if (remainingAttempts === 0 && !foundNemo) {
            message.textContent = 'Game Over! You ran out of attempts.';
            holes.forEach(h => h.removeEventListener('click'));
            resetGame();
        }
    });
});


function resetGame() {
    playAgainButton.addEventListener('click', () => {
        foundNemo = false;
        remainingAttempts = 6;
        nemoHoleIndex = Math.floor(Math.random() * holes.length);
        holes.forEach(hole => {

            hole.classList.remove('nemo', 'x');
            hole.classList.add('hole')
        });

        message.textContent = 'Find Nemo!';
    });

}
