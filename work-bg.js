// script.js
document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');
    const squareCount = 40; // 增加方塊數量以平衡大小縮小

    // 定義低飽和度的顏色
    const colors = [
        'rgba(255, 99, 71, 0.2)',   // 低飽和度的紅色
        'rgba(60, 179, 113, 0.2)',  // 低飽和度的綠色
        'rgba(70, 130, 180, 0.2)',  // 低飽和度的藍色
        'rgba(218, 165, 32, 0.2)',  // 低飽和度的金色
        'rgba(138, 43, 226, 0.2)'   // 低飽和度的紫色
    ];

    for (let i = 0; i < squareCount; i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        let size = Math.random() * 100 + 50; // 隨機大小縮小
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        let posX = Math.random() * 100;
        let posY = Math.random() * 100;
        square.style.top = `${posY}%`;
        square.style.left = `${posX}%`;

        let delay = Math.random() * 10; // 隨機延遲
        square.style.animationDelay = `${delay}s`;

        // 隨機顏色
        let colorIndex = Math.floor(Math.random() * colors.length);
        square.style.backgroundColor = colors[colorIndex];

        background.appendChild(square);
    }
});
