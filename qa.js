function toggleAnswer(element) {
    const allItems = document.querySelectorAll('.qa-item');
    allItems.forEach(item => {
        if (item !== element && item.classList.contains('active')) {
            item.classList.remove('active');
            const answer = item.querySelector('.answer');
            answer.style.maxHeight = '0';
            answer.style.padding = '0 20px';
        }
    });

    element.classList.toggle('active');
    const answer = element.querySelector('.answer');
    
    if (element.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
        answer.style.padding = '20px';
    } else {
        answer.style.maxHeight = '0';
        answer.style.padding = '0 20px';
    }
}

document.addEventListener('click', (e) => {
    const qaContainer = document.querySelector('.qa-container');
    const isClickInside = qaContainer.contains(e.target);

    if (!isClickInside) {
        const allItems = document.querySelectorAll('.qa-item.active');
        allItems.forEach(item => {
            item.classList.remove('active');
            const answer = item.querySelector('.answer');
            answer.style.maxHeight = '0';
            answer.style.padding = '0 20px';
        });
    }
});

document.addEventListener('mousemove', (e) => {
    const circles = document.querySelectorAll('.circle');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    circles.forEach((circle, index) => {
        circle.style.transform = `translate(
            ${50 * (index + 1) * (x - 0.5)}px,
            ${50 * (index + 1) * (y - 0.5)}px
        )`;
    });
});
