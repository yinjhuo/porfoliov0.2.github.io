document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.getElementById('lang-options');

    // 初始化语言切换按钮事件
    document.getElementById('en-button').addEventListener('click', function() {
        setLanguage('en');
    });

    document.getElementById('zh-button').addEventListener('click', function() {
        setLanguage('zh');
    });

    document.getElementById('jp-button').addEventListener('click', function() {
        setLanguage('jp');
    });

    // 设置语言
    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        
        // Add fade-out effect
        elements.forEach(element => {
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });

        // Wait for the fade-out effect to complete
        setTimeout(() => {
            elements.forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
                // Remove fade-out effect and trigger fade-in
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }, 500); // Match the CSS transition duration
    }


    // 翻譯對象
    const translations = {
        en: {
            portfolio: 'PORTFOLIO',
            all: 'All Works',
            web: 'Web Design',
            drawing: 'Drawing',
            graphic: 'Graphic Design',
            webDesign1: 'SWIFT-xi Web Design Work',
            webDesignDesc1: 'REBUILD in MY VIEW',
            drawing1: 'Series Paintings',
            drawingDesc1: 'Smile',
            graphicDesign1: 'Portfolio Main Visual',
            graphicDesignDesc1: 'REMIX MIX MIXED',
            graphicDesign2: 'Character Introduction Poster',
            graphicDesignDesc2: 'Gray Scale X Layout',
            graphicDesign3: 'Business Card Design',
            graphicDesignDesc3: 'Hello, nice to meet you',
            graphicDesign4: 'SWIFT-xi Poster Design',
            graphicDesignDesc4: '120% Tech Style',
            webDesign2: 'Character Webpage',
            webDesignDesc2: 'Joker',
            graphicDesign5: 'Flyer Design',
            graphicDesignDesc5: 'May Festival',
            drawing2: 'Personal Image',
            drawingDesc2: 'Cyberpunk X ME',
            graphicDesign6: 'Constellation Design',
            graphicDesignDesc6: 'Theme: Smile',
            graphicDesign7: 'SWIFT-xi Foldable Navigation',
            graphicDesignDesc7: 'Three-fold navigation',
            modalTitle1: 'Website Redesign',
            modalDesc1: 'Based on mainstream technology websites, trying to design a modern aesthetic website.',
            modalTitle2: 'Main Visual Image',
            modalDesc2: 'Personal work mix, embedded with self-designed fonts, aiming to create a layered visual effect.',
            modalTitle3: 'Original Paintings',
            modalDesc3: 'Everyday with a mask.',
            modalTitle4: 'Character Introduction Poster',
            modalDesc4: 'Using grayscale and simple layout, making the poster content clear and visible.',
            modalTitle5: 'Business Card Design',
            modalDesc5: 'Creating a three-dimensional sense on a flat surface.',
            modalTitle6: 'SWIFT-xi Poster Design',
            modalDesc6: 'Introducing the features of my redesigned website with a poster, echoing the website style, with a focus on tech elements.',
            modalTitle7: 'Character Webpage',
            modalDesc7: 'Character introduction webpage, using Joker’s representative colors to create a dark atmosphere.',
            modalTitle8: 'Flyer Design',
            modalDesc8: 'Using high-saturation warm colors to create a festive atmosphere.',
            modalTitle9: 'Personal Image',
            modalDesc9: 'Cyberpunk X ME.',
            modalTitle10: 'Constellation Design',
            modalDesc10: 'Creating my own style of constellation design.',
            modalTitle11: 'SWIFT-xi Foldable Navigation',
            modalDesc11: 'Echoing the style of the redesigned website, the navigation cover uses the companys trademark color. The overall layout aims to balance text, images, and white space, ensuring comfortable reading while conveying information accurately.',
        },
        zh: {
            portfolio: '作品集',
            all: '所有作品',
            web: '網頁設計',
            drawing: '繪畫',
            graphic: '平面設計',
            webDesign1: 'SWIFT-xi 網頁設計作業',
            webDesignDesc1: '重建我的視角',
            drawing1: '系列畫作',
            drawingDesc1: '笑容',
            graphicDesign1: '作品集展示頁面-主視覺圖片',
            graphicDesignDesc1: '混合再混合',
            graphicDesign2: '人物介紹海報',
            graphicDesignDesc2: '灰階 X 排版',
            graphicDesign3: '名片設計',
            graphicDesignDesc3: '你好，初次見面',
            graphicDesign4: 'SWIFT-xi 海報設計',
            graphicDesignDesc4: '科技感120%',
            webDesign2: '角色網頁',
            webDesignDesc2: '小丑',
            graphicDesign5: '傳單設計',
            graphicDesignDesc5: '五月祭典',
            drawing2: '個人意象圖',
            drawingDesc2: '賽博朋克 X 我',
            graphicDesign6: '星座設計',
            graphicDesignDesc6: '主題：笑容',
            graphicDesign7: 'SWIFT-xi 折疊導覽',
            graphicDesignDesc7: '三折導覽單',
            modalTitle1: '翻新網頁',
            modalDesc1: '根據主流科技網站作為範本，盡可能設計出符合現代審美的網站。',
            modalTitle2: '主視覺圖片',
            modalDesc2: '個人作品混合，嵌入個人設計字體，想創造出有層次的視覺效果。',
            modalTitle3: '原創畫作',
            modalDesc3: '帶著面具的每一天。',
            modalTitle4: '人物介紹海報',
            modalDesc4: '用灰階跟簡單的排版，讓海報版面資訊清楚可見。',
            modalTitle5: '名片設計',
            modalDesc5: '想在平面上創建出立體的空間感。',
            modalTitle6: 'SWIFT-xi 海報設計',
            modalDesc6: '用一張海報介紹我的翻新網站的特點，呼應網站風格，設計語言也是以科技風為主。',
            modalTitle7: '角色網頁',
            modalDesc7: '角色簡介網站，運用小丑的代表顏色，營造出網站陰暗的氛圍。',
            modalTitle8: '傳單設計',
            modalDesc8: '用飽和度高的暖色，讓畫面有祭典的氣氛。',
            modalTitle9: '個人意象圖',
            modalDesc9: '賽博朋克 X 我。',
            modalTitle10: '星座設計',
            modalDesc10: '創造出自我風格的星座設計。',
            modalTitle11: 'SWIFT-xi 折疊導覽',
            modalDesc11: '呼應了翻新網站的風格，導覽封面運用了該公司的商標顏色。整體佈局盡量達到文字跟圖片還有留白的平衡，在閱讀舒適上也能正確傳遞資訊。',
        },
        jp: {
            portfolio: 'ポートフォリオ',
            all: 'すべての作品',
            web: 'ウェブデザイン',
            drawing: '絵画',
            graphic: 'グラフィックデザイン',
            webDesign1: 'SWIFT-xi ウェブデザイン作業',
            webDesignDesc1: '私の視点で再構築',
            drawing1: 'シリーズ絵画',
            drawingDesc1: '笑顔',
            graphicDesign1: '展示ページ - メインビジュアル',
            graphicDesignDesc1: 'リミックス混合',
            graphicDesign2: 'キャラクタ紹介ポスター',
            graphicDesignDesc2: 'グレースケール X レイアウト',
            graphicDesign3: '名刺デザイン',
            graphicDesignDesc3: 'こんにちは、はじめまして',
            graphicDesign4: 'SWIFT-xi ポスターデザイン',
            graphicDesignDesc4: 'テクノロジースタイル120%',
            webDesign2: 'キャラクターウェブページ',
            webDesignDesc2: 'ジョーカー',
            graphicDesign5: 'チラシデザイン',
            graphicDesignDesc5: '五月祭り',
            drawing2: '個人イメージ',
            drawingDesc2: 'サイバーパンク X 私',
            graphicDesign6: '星座デザイン',
            graphicDesignDesc6: 'テーマ: 笑顔',
            graphicDesign7: 'SWIFT-xi 折りたたみナビ',
            graphicDesignDesc7: '三つ折りナビゲーション',
            modalTitle1: 'ウェブサイトの再設計',
            modalDesc1: '主流の技術サイトに基づいて、現代の美的なウェブサイトをデザインしようとしています。',
            modalTitle2: 'メインビジュアル',
            modalDesc2: '個人の作品を混ぜ合わせ、自己デザインのフォントを埋め込み、層状の視覚効果を創り出そうとしています。',
            modalTitle3: 'オリジナル絵画',
            modalDesc3: '毎日マスクをつけて。',
            modalTitle4: 'キャラクタ紹介ポスター',
            modalDesc4: 'グレースケールとシンプルなレイアウトを使用して、ポスターの内容をはっきりと見せています。',
            modalTitle5: '名刺デザイン',
            modalDesc5: '平面に立体感を創り出そうとしています。',
            modalTitle6: 'SWIFT-xi ポスターデザイン',
            modalDesc6: '再設計したウェブサイトの特徴をポスターで紹介し、ウェブサイトのスタイルに合わせて、テクノロジー要素を中心としたデザイン言語を使用しています。',
            modalTitle7: 'キャラクターウェブページ',
            modalDesc7: 'キャラクター紹介ウェブページで、ジョーカーの代表色を使用して、暗い雰囲気を作り出しています。',
            modalTitle8: 'チラシデザイン',
            modalDesc8: '高飽和の暖色を使用して、祭りの雰囲気を創り出しています。',
            modalTitle9: '個人イメージ',
            modalDesc9: 'サイバーパンク X 私。',
            modalTitle10: '星座デザイン',
            modalDesc10: '自分のスタイルの星座デザインを創り出そうとしています。',
            modalTitle11: 'SWIFT-xi 折りたたみナビ',
            modalDesc11: '再設計したウェブサイトのスタイルに合わせて、ナビゲーションカバーには会社の商標色を使用しています。全体のレイアウトは、テキスト、画像、ホワイトスペースのバランスを取り、読みやすさと情報伝達の正確さを両立させています。',
        }
    };

    // 預設語言
    setLanguage('jp');
});
