const skills = [
    {
        id: 'digital-art',
        image: '/api/placeholder/800/600',
        title: '電腦繪圖',
        description: '運用先進的數位工具和技術，創造出令人驚嘆的視覺藝術作品。從概念設計到最終呈現，每一個作品都充滿創意和獨特性。通過精湛的技巧和豐富的想像力，將抽象的想法轉化為具體的視覺享受。',
        specialties: ['數位繪畫', '角色設計', '概念藝術', '插畫']
    },
    {
        id: 'web-design',
        image: '/api/placeholder/800/600',
        title: '網頁設計',
        description: '設計並開發現代化、響應式的網站，確保在各種設備上都能提供出色的用戶體驗。結合美學設計與功能性，創造既吸引眼球又易於使用的網頁。注重細節，優化性能，打造流暢的網絡體驗。',
        specialties: ['響應式設計', 'HTML/CSS', 'JavaScript', 'WordPress']
    },
    {
        id: 'graphic-design',
        image: '/api/placeholder/800/600',
        title: '平面設計',
        description: '通過視覺元素傳達信息和情感，創作出引人注目的平面設計作品。從品牌識別到印刷品，每件作品都經過精心設計，以達到最大的視覺衝擊力。善於利用色彩、排版和圖像元素，創造出富有表現力的設計。',
        specialties: ['品牌設計', '排版', '包裝設計', '海報設計']
    },
    {
        id: 'ui-ux-design',
        image: '/api/placeholder/800/600',
        title: 'UI/UX 設計',
        description: '專注於創造直觀、高效且令人愉悅的用戶界面和體驗。通過深入的用戶研究和反覆的設計過程，確保每個產品都能滿足用戶需求並超越期望。結合美學和功能性，打造出既美觀又易用的數位產品。',
        specialties: ['用戶研究', '原型設計', '交互設計', '可用性測試']
    }
];

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const modalSpecialties = document.getElementById('modal-specialties');
const closeBtn = document.getElementsByClassName('close')[0];

skills.forEach(skill => {
    const element = document.getElementById(skill.id);
    const bg = element.querySelector('.skill-bg');
    bg.style.backgroundImage = `url('${skill.image}')`;

    element.addEventListener('click', () => {
        modalTitle.textContent = skill.title;
        modalImage.src = skill.image;
        modalImage.alt = `${skill.title} 展示`;
        modalDescription.textContent = skill.description;
        modalSpecialties.innerHTML = skill.specialties.map((s, index) => 
            `<li style="transition-delay: ${index * 0.1}s">${s}</li>`
        ).join('');
        modal.classList.add('show');
    });
});

closeBtn.addEventListener('click', function() {
modal.classList.remove('show');
});

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}