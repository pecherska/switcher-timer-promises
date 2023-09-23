import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector("#datetime-picker");
const date = document.querySelector("[data-days]");
const hour = document.querySelector("[data-hours]");
const minut = document.querySelector("[data-minutes]");
const second = document.querySelector("[data-seconds]");
const startBtn = document.querySelector("[data-start]");

let choosenDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    choosenDate = selectedDates[0];
    startBtn.disabled = false;
    if (choosenDate < new Date()) {
      startBtn.disabled = true;
      return alert("Дата в минулому");

    }
    
    // console.log(options.defaultDate);
  },
};

flatpickr(input, options);


startBtn.addEventListener('click', startTimer);


function startTimer() {
  console.log(choosenDate);
  setInterval(() => {
    const deltaTime = choosenDate - new Date();
    console.log(convertMs(deltaTime));
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    date.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minut.textContent = addLeadingZero(minutes);
    second.textContent = addLeadingZero(seconds);


  }, 1000);
  
  
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0")
}







function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

