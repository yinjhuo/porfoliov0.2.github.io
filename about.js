document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');
    const squareCount = 17;

    const colors = [
        'rgba(255, 99, 71, 0.4)',
        'rgba(60, 179, 113, 0.3)',
        'rgba(70, 130, 180, 0.6)',
        'rgba(218, 165, 32, 0.3)',
        'rgba(138, 43, 226, 0.2)'
    ];

    for (let i = 0; i < squareCount; i++) {
        let square = document.createElement('div');
        square.classList.add('square');

        let size = Math.random() * 110 + 40;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        let posX = Math.random() * 100;
        let posY = Math.random() * 100;
        square.style.top = `${posY}%`;
        square.style.left = `${posX}%`;

        let delay = Math.random() * 20;
        square.style.animationDelay = `${delay}s`;

        let colorIndex = Math.floor(Math.random() * colors.length);
        square.style.backgroundColor = colors[colorIndex];

        background.appendChild(square);
    }

});
