document.addEventListener("DOMContentLoaded", function () {
    const sections = [
        { element: document.querySelector(".about_me"), targetPage: "about.html" },
        { element: document.querySelector(".work"), targetPage: "work.html" },
        { element: document.querySelector(".contact"), targetPage: "contact.html" },
        { element: document.querySelector(".qa"), targetPage: "qa.html" }
    ];

    sections.forEach(section => {
        if (section.element) {
            section.element.style.cursor = "pointer";
            section.element.addEventListener("click", function () {
                showLoadingAndRedirect(section.targetPage);
            });
        }
    });

    function showLoadingAndRedirect(targetPage) {
        // 顯示loading動畫
        const loaderHtml = `
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>叠方块loading加载动画</title>
                <style>
                    *{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body{
                        width: 100vw;
                        height: 100vh;
                        background-color: rgb(255, 248, 237);
                        color: #222;
                        font-size: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        opacity: 1;
                        transition: opacity 1s ease-in-out;
                    }
                    .loader{
                        position: relative;
                        width: 160px;
                        height: 160px;
                    }
                    .loader::before,.loader::after{
                        content: "";
                        background-color: currentColor;
                        width: 25%;
                        height: 25%;
                        position: absolute;
                        top: 75%;
                        left: 50%;
                        transform-origin: 100% 100%;
                        animation: ani-before 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
                    }
                    .loader::after{
                        animation-name: ani-after;
                    }

                    @keyframes ani-before {
                        from{
                            transform: rotate(0) translate(-100%, -100%) rotate(-90deg);
                        }
                        20%{
                            transform: rotate(0) translate(-100%, -100%) rotate(90deg);
                        }
                        40%{
                            transform: rotate(0) translate(-300%, -100%) rotate(90deg);
                        }
                        60%{
                            transform: rotate(90deg) translate(-300%, -100%) rotate(-90deg);
                        }
                        80%{
                            transform: rotate(90deg) translate(-100%, -100%) rotate(-90deg);
                        }
                        to{
                            transform: rotate(90deg) translate(-100%, 100%) rotate(90deg);
                        }
                    }
                    @keyframes ani-after {
                        from, 20%{
                            transform: rotate(0) scale(1, 1);
                        }
                        40%{        
                            transform: rotate(0) scale(3, 1);
                        }
                        60%{
                            transform: rotate(90deg) scale(3, 1);
                        }
                        80%{
                            transform: rotate(90deg) scale(1, 1);
                        }
                        to{
                            transform: rotate(90deg) scale(1, 1) translate(0, 200%);
                        }
                    }
                </style>
            </head>
            <body>
                <div class="loader"></div>
            </body>
            </html>
        `;
        document.open();
        document.write(loaderHtml);
        document.close();

        // 在指定時間後跳轉到目標頁面
        setTimeout(() => {
            document.body.style.opacity = 0; // 逐漸隱藏
            setTimeout(() => {
                window.location.href = targetPage;
            }, 1000); // 等待過渡動畫完成
        }, 800); // 顯示loading動畫2.5秒後開始隱藏
    }
});
