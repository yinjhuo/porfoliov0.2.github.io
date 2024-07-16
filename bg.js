document.addEventListener("DOMContentLoaded", function() {
    const backgroundOverlay = document.querySelector(".background-overlay");
    const colors = ["#a8dadc", "#457b9d", "#1d3557", "#f1faee", "#e63946"];
    const numBubbles = 20;  // 调整泡泡数量

    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("background-bubble");
        const size = Math.random() * 250 + 50 + "px";  // 调整泡泡大小
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        bubble.style.top = Math.random() * 100 + "%";
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDuration = Math.random() * 5 + 13 + "s";  // 调整泡泡漂移速度
        bubble.style.animationDelay = Math.random() * 5 + "s";
        backgroundOverlay.appendChild(bubble);
    }
});
