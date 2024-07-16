document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const portfolioItemsContainer = document.getElementById('portfolio-grid');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close-btn');

    const animations = [
        'fade-in',
        'blur-fade-in',
        'zoom-fade-in',
        'rotate-fade-in',
        'slide-in-left',
        'scale-up',
        'slide-in-right'
    ];

    const categoryBackgrounds = {
        'all': '',
        'web': 'web',
        'drawing': 'drawing',
        'graphic': 'graphic'
    };

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的 active 类
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 添加当前点击按钮的 active 类
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            // 设置背景颜色
            portfolioItemsContainer.className = 'portfolio-grid';
            if (categoryBackgrounds[category]) {
                portfolioItemsContainer.classList.add(categoryBackgrounds[category]);
            }

            // 清空当前容器内容
            portfolioItemsContainer.innerHTML = '';

            // 根据分类重新排列作品项
            const sortedItems = Array.from(portfolioItems).filter(item => {
                const itemCategory = item.getAttribute('data-category');
                item.classList.remove('web', 'drawing', 'graphic'); // 清除所有分类类
                item.classList.remove(...animations); // 移除所有动画类

                if (category === 'all' || itemCategory === category) {
                    const animationClass = animations[Math.floor(Math.random() * animations.length)];
                    item.classList.add('show');
                    item.classList.add(animationClass);
                    item.classList.add(itemCategory); // 添加对应的分类类
                    return true;
                } else {
                    item.classList.remove('show');
                    return false;
                }
            });

            // 将排序后的元素重新添加到容器中
            sortedItems.forEach(item => {
                portfolioItemsContainer.appendChild(item);
            });
        });
    });

    // 初始状态显示所有作品项
    showAllPortfolioItems();

    function showAllPortfolioItems() {
        portfolioItems.forEach(item => {
            item.classList.add('show');
            const animationClass = animations[Math.floor(Math.random() * animations.length)];
            item.classList.add(animationClass);
            item.classList.add(item.getAttribute('data-category')); // 添加对应的分类类
            portfolioItemsContainer.appendChild(item); // 将元素添加到容器中
        });
    }

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            const modal = document.getElementById(target);
            if (modal) {
                modal.classList.add('modal-show');
                modal.classList.remove('modal-hide');
                modal.style.display = 'block';
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.classList.add('modal-hide');
            modal.classList.remove('modal-show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Match the duration of the fade-out animation
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.classList.add('modal-hide');
                modal.classList.remove('modal-show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300); // Match the duration of the fade-out animation
            }
        });
    });
});


