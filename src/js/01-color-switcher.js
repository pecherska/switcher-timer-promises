const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop");
const body = document.querySelector("body")
console.dir(startBtn);
console.dir(stopBtn);
console.dir(body);
let switcher = null;


startBtn.addEventListener('click', () => {
    switcher = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, 1000);

});
stopBtn.addEventListener('click', () => {
    clearInterval(switcher);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    });

function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    };


