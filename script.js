const splash = document.getElementById("splash");

let eggCount = 0;
const eggCounter = document.getElementById("egg-counter");

document.addEventListener("click", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  // Splash
  splash.style.left = `${x - 50}px`;
  splash.style.top = `${y - 50}px`;
  splash.style.opacity = 1;

  setTimeout(() => {
    splash.style.opacity = 0;
  }, 400);

  // Incrementa e aggiorna contatore
  eggCount++;
  eggCounter.textContent = `Eggsecutive Order x${eggCount}`;
});