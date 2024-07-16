var app = new Vue({
    el: '#clock',
    data() {
        return {
            time: ''
        }
    }
})

const addZero = (num) => num < 10 ? `0${num}` : num;

function updateTime() {
    const now = new Date();
    app.time = `${addZero(now.getHours())}:${addZero(now.getMinutes())}:${addZero(now.getSeconds())}`;
}

updateTime();
setInterval(updateTime, 1000);