// 初始化 Typed.js 实例
function initializeTyped(strings) {
    if (typeof typed !== 'undefined') {
        typed.destroy(); // 如果已存在实例，销毁它
    }

    typed = new Typed(".multiple-text", {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

// 切换语言的函数
function switchLanguage(language) {
    fetch(`lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (data[key]) {
                    element.innerHTML = data[key];
                }
            });

            // 更新 Typed.js strings
            if (data.multiple_text_strings) {
                initializeTyped(data.multiple_text_strings);
            }
        });

    document.documentElement.lang = language;

    localStorage.setItem('language', language);
}

// 页面加载完成时，初始化语言
document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('language') || 'en';
    switchLanguage(language);
});

// 语言切换按钮的交互逻辑
document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.querySelector('.language-switcher');
    const languageOptions = document.querySelector('.language-options');
    const languageIcon = document.querySelector('.language-icon');

    languageIcon.addEventListener('click', () => {
        languageOptions.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!languageSwitcher.contains(e.target)) {
            languageOptions.classList.remove('show');
        }
    });

    document.querySelectorAll('.language-options button').forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.id);
        });
    });
});
