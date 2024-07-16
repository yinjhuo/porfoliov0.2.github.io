// script.js
document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');
    const squareCount = 20;

    for (let i = 0; i < squareCount; i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        let size = Math.random() * 50 + 20; // 隨機大小
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        let posX = Math.random() * 100;
        let posY = Math.random() * 100;
        square.style.top = `${posY}%`;
        square.style.left = `${posX}%`;

        let delay = Math.random() * 20; // 隨機延遲
        square.style.animationDelay = `${delay}s`;

        background.appendChild(square);
    }
});
