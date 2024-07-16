
const overlay = document.querySelector('.background-overlay');
const menu = document.querySelector('.menu'); // 获取 about-card 元素

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const destinationX = x + (Math.random() - 0.5) * 200;
    const destinationY = y + (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 520;
    const delay = Math.random() * 200;

    particle.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${destinationX - x}px, ${destinationY - y}px) rotate(${rotation}deg)`, opacity: 0 }
    ], {
        duration: 1000 + Math.random() * 1000,
        delay: delay,
        fill: 'forwards'
    });

    
    overlay.appendChild(particle); // 添加粒子到 aboutMe 元素中
    setTimeout(() => particle.remove(), 2000 + delay);
}

function createParticles(e) {
    const rect = menu.getBoundingClientRect(); // 获取 about-card 的位置
    const x = e.clientX - rect.left + (Math.random() - 0.5) * 100; // 扩大 x 坐标范围
    const y = e.clientY - rect.top + (Math.random() - 0.5) * 100; // 扩大 y 坐标范围

    for (let i = 0; i < 15; i++) {
        createParticle(x, y);
    }
}

menu.addEventListener('mouseenter', createParticles);
menu.addEventListener('mousemove', createParticles);
