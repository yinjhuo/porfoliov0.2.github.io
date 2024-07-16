// Back to top button functionality
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    const toggleVisibility = () => {
        if (window.scrollY > 500) {
            if (!backToTopButton.classList.contains("show")) {
                backToTopButton.classList.remove("hide");
                requestAnimationFrame(() => {
                    backToTopButton.classList.add("show");
                });
            }
        } else {
            if (backToTopButton.classList.contains("show")) {
                backToTopButton.classList.remove("show");
                requestAnimationFrame(() => {
                    backToTopButton.classList.add("hide");
                });
            }
        }
    };

    window.addEventListener("scroll", toggleVisibility);

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        // Ensure to hide the button after smooth scroll ends
        setTimeout(() => {
            toggleVisibility();
        }, 500); // This delay should match the smooth scroll duration
    });
});

// Console log to ensure JavaScript file loaded correctly
console.log("JavaScript file loaded correctly.");

// Side menu and overlay functionality
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");
    const menuHandler = document.getElementById('menu-handler');
    const sideMenu = document.getElementById('side-menu');
    const mainContent = document.getElementById('main-content');
    const overlay = document.getElementById('overlay');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    menuHandler.addEventListener('click', function () {
        sideMenu.classList.toggle('open');
        mainContent.classList.toggle('shifted');
        menuHandler.classList.toggle('active');
        overlay.classList.toggle('visible');

        if (sideMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                document.body.style.overflow = '';
            }, 500); // This delay should match the transition duration
        }
    });

    overlay.addEventListener('click', function () {
        sideMenu.classList.remove('open');
        mainContent.classList.remove('shifted');
        menuHandler.classList.remove('active');
        overlay.classList.remove('visible');

        setTimeout(() => {
            document.body.style.overflow = '';
        }, 500); // This delay should match the transition duration
    });

    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            sideMenu.classList.remove('open');
            mainContent.classList.remove('shifted');
            menuHandler.classList.remove('active');
            overlay.classList.remove('visible');

            setTimeout(() => {
                document.body.style.overflow = '';
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 500); // This delay should match the transition duration
        });
    });
});

// Typed.js initialization function
let typed; // Ensure typed is globally accessible

function initializeTyped(strings) {
    if (typed) {
        typed.destroy(); // Destroy the existing instance if it exists
    }

    typed = new Typed(".multiple-text", {
        strings: strings,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

// Update dynamic content
function updateDynamicContent(language) {
    fetch(`./lang/${language}.json`)
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
}

// Initialize Typed.js on page load
document.addEventListener("DOMContentLoaded", () => {
    const language = localStorage.getItem('language') || 'en';
    fetch(`./lang/${language}.json`)
        .then(response => response.json())
        .then(data => {
            if (data.multiple_text_strings) {
                initializeTyped(data.multiple_text_strings);
            }
            // Initialize page content
            updateDynamicContent(language);
        });
});

// Interests carousel and modals
const interests = [
    { id: 'painting', title_key: 'painting', description_key: 'painting_description', image: './pic/paint.png' },
    { id: 'music', title_key: 'music', description_key: 'music_description', image: './pic/music.webp' },
    { id: 'movies', title_key: 'movies', description_key: 'movies_description', image: './pic/movie-1.jpeg' },
    { id: 'nba', title_key: 'nba', description_key: 'nba_description', image: './pic/basketball.webp' },
    { id: 'games', title_key: 'games', description_key: 'games_description', image: './pic/game-1.webp' }
];

const wrapper = document.getElementById('interests-wrapper');
const itemWidth = 450; // Width of each item including padding
let currentIndex = interests.length;

function createInterestItem(interest) {
    return `
        <div class="interest-item" onclick="openModal('${interest.id}')">
            <div class="interest-content">
                <img src="${interest.image}" alt="${interest.title_key}">
                <div class="interest-text">
                    <div class="interest-title" data-key="${interest.title_key}"></div>
                    <div class="interest-description" data-key="${interest.description_key}"></div>
                </div>
            </div>
        </div>
    `;
}

function initializeCarousel() {
    // Create five sets of items for smooth infinite scroll
    const allItems = [...interests, ...interests, ...interests];
    wrapper.innerHTML = allItems.map(createInterestItem).join('');
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    const language = localStorage.getItem('language') || 'en';
    updateDynamicContent(language);
}

function scrollCarousel(direction) {
    currentIndex += direction;
    const totalItems = interests.length;

    // Update the transform immediately for smooth animation
    wrapper.style.transition = 'transform 0.5s ease';
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // After the animation, check if we need to reset the position
    setTimeout(() => {
        if (currentIndex < totalItems) {
            currentIndex += totalItems;
            wrapper.style.transition = 'none';
            wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        } else if (currentIndex >= totalItems * 2) {
            currentIndex -= totalItems;
            wrapper.style.transition = 'none';
            wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }, 500); // This should match the transition duration
}

function openModal(id) {
    const modal = document.getElementById(id + '-modal');
    modal.classList.add('active');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = 1; // Ensure the modal fades in
    }, 10);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.opacity = 0; // Trigger fade-out animation

    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('active');
    }, 300); // Delay should match the transition duration
}

window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.interest-details-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});

document.addEventListener('DOMContentLoaded', initializeCarousel);

// Skills modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        {
            id: "digital-art",
            title_key: "digital_art",
            description_key: "digital_art_description",
            image: "./pic/skill-paint.jpg",
            description: "運用先進的數位工具和技術，創造出令人驚嘆的視覺藝術作品。從概念設計到最終呈現，每一個作品都充滿創意和獨特性。通過精湛的技巧和豐富的想像力，將抽象的想法轉化為具體的視覺享受。",
            specialties: ["digital_painting", "character_design", "concept_art", "illustration"]
        },
        {
            id: "web-design",
            title_key: "web_design",
            description_key: "web_design_description",
            image: "./pic/skill-3.1.png",
            description: "設計並開發現代化、響應式的網站，確保在各種設備上都能提供出色的用戶體驗。結合美學設計與功能性，創造既吸引眼球又易於使用的網頁。注重細節，優化性能，打造流暢的網絡體驗。",
            specialties: ["responsive_design", "html_css", "javascript", "wordpress"]
        },
        {
            id: "graphic-design",
            title_key: "graphic_design",
            description_key: "graphic_design_description",
            image: "./pic/skill-4.png",
            description: "通過視覺元素傳達信息和情感，創作出引人注目的平面設計作品。從品牌識別到印刷品，每件作品都經過精心設計，以達到最大的視覺衝擊力。善於利用色彩、排版和圖像元素，創造出富有表現力的設計。",
            specialties: ["branding_design", "typography", "packaging_design", "poster_design"]
        },
        {
            id: "ui-ux-design",
            title_key: "ui_ux_design",
            description_key: "ui_ux_design_description",
            image: "./pic/skill-4.jpg",
            description: "專注於創造直觀、高效且令人愉悅的用戶界面和體驗。通過深入的用戶研究和反覆的設計過程，確保每個產品都能滿足用戶需求並超越期望。結合美學和功能性，打造出既美觀又易用的數位產品。",
            specialties: ["user_research", "prototyping", "interaction_design", "usability_testing"]
        }
    ];

    const modals = {
        "digital-art-modal": document.getElementById("digital-art-modal"),
        "web-design-modal": document.getElementById("web-design-modal"),
        "graphic-design-modal": document.getElementById("graphic-design-modal"),
        "ui-ux-design-modal": document.getElementById("ui-ux-design-modal"),
    };

    skills.forEach(skill => {
        const element = document.getElementById(skill.id);
        const bg = element.querySelector('.skill-bg');
        bg.style.backgroundImage = `url('${skill.image}')`;

        element.addEventListener('click', () => {
            const modal = modals[`${skill.id}-modal`];
            const modalTitle = modal.querySelector("#modal-title");
            const modalImage = modal.querySelector(".modal-image img");
            const modalDescription = modal.querySelector(".modal-text p");
            const modalSpecialties = modal.querySelector(".modal-text ul");

            modalTitle.setAttribute('data-key', skill.title_key);
            modalImage.src = skill.image;
            modalImage.alt = `${skill.title} 展示`;
            modalDescription.setAttribute('data-key', skill.description_key);
            modalSpecialties.innerHTML = skill.specialties.map((s, index) =>
                `<li style="transition-delay: ${index * 0.1}s" data-key="${s}">${s}</li>`
            ).join('');

            modal.classList.add('show');
            updateDynamicContent(localStorage.getItem('language') || 'en'); // 初始化模態窗口內容
        });
    });

    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            closeBtn.closest(".modal").classList.remove('show');
        });
    });

    window.addEventListener("click", (event) => {
        Object.values(modals).forEach(modal => {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    });

    const language = localStorage.getItem('language') || 'en';
    updateDynamicContent(language);
});

// Switch language function
function switchLanguage(language) {
    localStorage.setItem('language', language);
    updateDynamicContent(language);
}
