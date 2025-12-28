const quotes = [
  "Breathe. This moment matters.",
  "You are exactly where you need to be.",
  "Slow down. You’re doing fine.",
  "Peace begins with a single breath.",
  "Nothing is urgent right now."
];

const quoteEl = document.getElementById("quote");
const instruction = document.getElementById("instruction");
const skipBtn = document.getElementById("skip");

quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];

let inhale = true;

setInterval(() => {
  instruction.textContent = inhale ? "Exhale..." : "Inhale...";
  inhale = !inhale;
}, 3000);

skipBtn.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});
