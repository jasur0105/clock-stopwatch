let sec = document.querySelector('.s');
let hour = document.querySelector('.h');
let minute = document.querySelector('.m');
let hourNum = document.querySelector('.hours');
let minuteNum = document.querySelector('.minutes');

function clock() {
    let time = new Date()
    let secondDeg = 6 * time.getSeconds();
    let minuteDeg = 6 * time.getMinutes();
    let hoursDeg = 30 * time.getHours();
    sec.style.transform = `rotate(${secondDeg}deg)`
    hour.style.transform = `rotate(${hoursDeg}deg)`
    minute.style.transform = `rotate(${minuteDeg}deg)`
    hourNum.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    minuteNum.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    setTimeout(() => { clock() }, 1000);
}
clock()
var links = document.querySelectorAll(".tabsItem")
var tabs = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        e.preventDefault()
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove("active");
            tabs[x].classList.remove("active");
        }
        tab(this, tabs[i])
    })
}

function tab(x, y) {
    x.classList.add("active");
    y.classList.add("active");
}

// Секундомер

let elipse = document.querySelector('.tabsLink__span');
let startBtn = document.querySelector('.stopwatch__btn');
let watchSecond = document.querySelector('.stopwatch__seconds');
let watchMinute = document.querySelector('.stopwatch__minutes');
let watchHours = document.querySelector('.stopwatch__hours');

startBtn.addEventListener("click", function () {
    if ("start" == startBtn.innerHTML) {
        startBtn.innerHTML = "stop";
        elipse.classList.add("active");
        let i = 0;
        watchStart(this, i)
    } else if ("stop" == startBtn.innerHTML) {
        startBtn.innerHTML = "clear";
        elipse.classList.remove("active");
        elipse.classList.add("active_clear");
    } else {
        startBtn.innerHTML = "start";
        elipse.classList.remove("active_clear");
        watchSecond.innerHTML = 0;
        watchMinute.innerHTML = 0;
        watchHours.innerHTML = 0;
    }
})

function watchStart(btn, sec) {
    if ("stop" == btn.innerHTML) {
        if (sec == 60) {
            sec = 0;
            watchSecond.innerHTML = sec;
            if (watchMinute == 59) {
                watchMinute.innerHTML = 0;
                watchHours.innerHTML++
            } else {
                watchMinute.innerHTML++
            }
        } else {
            watchSecond.innerHTML = sec++;
        }
        setTimeout(() => { watchStart(btn, sec) }, 1000);
    }
}