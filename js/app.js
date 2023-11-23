
const timeDisplay = document.getElementById('timeDisplay');

let hours = 0;
let minutes = 0;
let seconds = 0;
const miliseconds = 1000;

let timeIsRunning = false;

const updateDisplay = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        timeDisplay.innerHTML = '00:00:00';
        return;
    }
    const zero = (num) => (num < 10 ? '0' : '');
    timeDisplay.innerHTML = `${zero(hours)}${hours}:${zero(minutes)}${minutes}:${zero(seconds)}${seconds}`;
};
updateDisplay();

function fnIncrementTime() {
    minutes = minutes + 1;
    if (minutes === 60) {
        hours = hours + 1;
        minutes = 0;
    }
    updateDisplay();
}

function fnDecrementTime() {
    if (minutes > 0) {
        minutes = minutes - 1;
    } else {
        if (hours > 0) {
            hours = hours - 1;
            minutes = 59;
        }
    }
    updateDisplay();
}

function fnStart() {
    if (!hours && !minutes || timeIsRunning) return;
    timeIsRunning = true;

    seconds = 60;
    minutes = minutes - 1;

    const interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(interval);
        }
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                }
            }
        }
        updateDisplay();
    }, miliseconds);
}

function fnReset() {
    seconds = 0;
    minutes = 0;
    seconds = 0;
    timeIsRunning = false;
    updateDisplay();
}