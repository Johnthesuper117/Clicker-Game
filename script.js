let score = 0;

const scoreElement = document.getElementById('score');
const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
});

function buyItem(item, price) {
    if (score >= price) {
        score -= price;
        scoreElement.textContent = score;
        alert(`You bought ${item} for ${price} points!`);
    } else {
        alert("You don't have enough points!");
    }
}
