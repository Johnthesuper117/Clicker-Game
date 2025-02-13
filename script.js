let score = 0;

const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});