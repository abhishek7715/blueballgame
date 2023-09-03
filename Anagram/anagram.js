document.getElementById("checkButton").addEventListener("click", function () {
    const word1 = document.getElementById("word1").value.toLowerCase();
    const word2 = document.getElementById("word2").value.toLowerCase();

    if (areAnagrams(word1, word2)) {
        displayResult("The words are anagrams!", 'green');

    } else {
        displayResult("The words are not anagrams.", 'red');
    }
});

function areAnagrams(word1, word2) {
    return cleanString(word1) === cleanString(word2);
}
function cleanString(str) {
    return str.toLowerCase().split('').sort().join('');
}
function displayResult(message, color) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = message;
    resultElement.style.color = color;
}