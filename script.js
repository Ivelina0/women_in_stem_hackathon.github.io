const countdownTarget = new Date(2026, 2, 11, 14, 30, 0); // 11 March 2026, 2:30 PM (local time)

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const countdownGridEl = document.querySelector(".countdown-grid");
const countdownMessageEl = document.getElementById("countdown-message");

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = countdownTarget.getTime() - now.getTime();

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    countdownGridEl.setAttribute("aria-hidden", "true");
    countdownGridEl.style.display = "none";

    countdownMessageEl.hidden = false;
    return true;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);

  return false;
}

const hasReachedTarget = updateCountdown();

if (!hasReachedTarget) {
  setInterval(() => {
    updateCountdown();
  }, 1000);
}
