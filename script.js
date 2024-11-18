// Initialize game variables
let letters = [];
let word = "";
let score = 0;

// Generate random letters
function generateLetters() {
    letters = [];
    for (let i = 0; i < 25; i++) {
        letters.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    }
    updateLetterGrid();
}

// Update letter grid
function updateLetterGrid() {
    const letterGrid = document.querySelector(".letter-grid");
    letterGrid.innerHTML = "";
    letters.forEach((letter) => {
        const letterDiv = document.createElement("div");
        letterDiv.textContent = letter;
        letterDiv.addEventListener("click", () => {
            word += letter;
            updateWordInput();
        });
        letterGrid.appendChild(letterDiv);
    });
}

// Update word input
function updateWordInput() {
    const wordInput = document.querySelector(".word-input");
    wordInput.value = word;
}

// Submit word
document.querySelector(".submit-word").addEventListener("click", () => {
    const wordInput = document.querySelector(".word-input");
    const submittedWord = wordInput.value;
    if (submittedWord.length > 2) {
        // Check if word is valid (using dictionary API or local dictionary)
        // For demo purposes, assume word is valid
        score += submittedWord.length;
        updateScoreDisplay();
        word = "";
        updateWordInput();
        generateLetters();
    }
});

// Update score display
function updateScoreDisplay() {
    const scoreDisplay = document.querySelector(".score-display");
    scoreDisplay.textContent = `Score: ${score}`;
}

// Initialize game
generateLetters();
