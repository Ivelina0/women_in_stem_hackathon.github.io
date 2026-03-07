// ----------------------------------------
// Home page: countdown logic
// ----------------------------------------
function initCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownGridEl = document.querySelector(".countdown-grid");
  const countdownMessageEl = document.getElementById("countdown-message");

  // If countdown elements are not on this page, skip setup.
  if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !countdownGridEl || !countdownMessageEl) {
    return;
  }

  const countdownTarget = new Date(2026, 2, 11, 14, 30, 0); // 11 March 2026, 2:30 PM

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
    setInterval(updateCountdown, 1000);
  }
}

// ----------------------------------------
// Projects page: cohort selection logic
// ----------------------------------------
function initProjectsCohortPicker() {
  const cohortButtons = document.querySelectorAll("[data-cohort]");
  const switchButtons = document.querySelectorAll("[data-switch]");
  const chooseAgainBtn = document.getElementById("choose-again");
  const kittensGallery = document.getElementById("kittens-projects");
  const lionessesGallery = document.getElementById("lionesses-projects");
  const pickMessage = document.getElementById("pick-message");
  const tools = document.getElementById("selection-tools");
  const selectedText = document.getElementById("selected-cohort-text");

  // If project picker elements are not on this page, skip setup.
  if (!cohortButtons.length || !kittensGallery || !lionessesGallery || !pickMessage || !tools || !selectedText) {
    return;
  }

  function setSelectedButtonState(activeCohort) {
    cohortButtons.forEach((button) => {
      const isActive = button.dataset.cohort === activeCohort;
      button.classList.toggle("selected", isActive);
      button.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function showCohort(cohort) {
    const showKittens = cohort === "kittens";

    kittensGallery.hidden = !showKittens;
    lionessesGallery.hidden = showKittens;
    kittensGallery.classList.toggle("is-hidden", !showKittens);
    lionessesGallery.classList.toggle("is-hidden", showKittens);

    pickMessage.hidden = true;
    pickMessage.classList.add("is-hidden");
    tools.hidden = false;
    tools.classList.remove("is-hidden");

    setSelectedButtonState(cohort);

    selectedText.textContent = showKittens
      ? "You picked Kittens 🐾 Beginner-friendly ideas unlocked!"
      : "You picked Lionesses 🦁 Bold challenges unlocked!";
  }

  function resetSelection() {
    kittensGallery.hidden = true;
    lionessesGallery.hidden = true;
    kittensGallery.classList.add("is-hidden");
    lionessesGallery.classList.add("is-hidden");

    pickMessage.hidden = false;
    pickMessage.classList.remove("is-hidden");
    tools.hidden = true;
    tools.classList.add("is-hidden");

    selectedText.textContent = "";
    setSelectedButtonState(null);
  }

  cohortButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showCohort(button.dataset.cohort);
      document.getElementById("projects-display")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  switchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showCohort(button.dataset.switch);
    });
  });

  chooseAgainBtn?.addEventListener("click", resetSelection);

  // Guarantee initial state: no cohort gallery shown until user chooses.
  resetSelection();
}

initCountdown();
initProjectsCohortPicker();
