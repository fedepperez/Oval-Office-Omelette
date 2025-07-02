// Elementi principali
const splashScreen = document.getElementById("splash-screen");
const gameContainer = document.getElementById("game-container");
const trump = document.getElementById("trump");
const splash = document.getElementById("splash");
const eggCounter = document.getElementById("egg-counter");
const eggMessage = document.getElementById("egg-message");
const bgm = document.getElementById("bgm");

let eggCount = 0;

// CLICK per avviare tutto
splashScreen.addEventListener("click", () => {
  splashScreen.style.display = "none";
  gameContainer.style.display = "block";
  bgm.play().catch(e => console.warn("Audio bloccato:", e));
});

// CLICK ovunque per splash e contatore
document.addEventListener("click", (e) => {
  // evita che il primo click sullo splash screen venga contato
  if (splashScreen.style.display !== "none") return;

  const x = e.clientX;
  const y = e.clientY;

  // Splash grafico
  splash.style.left = `${x - 50}px`;
  splash.style.top = `${y - 50}px`;
  splash.style.opacity = 1;

  setTimeout(() => {
    splash.style.opacity = 0;
  }, 400);

  // Incrementa contatore
  eggCount++;
  eggCounter.textContent = `Eggsecutive Order x${eggCount}`;

  // Se clicca su Trump
  const rect = trump.getBoundingClientRect();
  if (
    x >= rect.left &&
    x <= rect.right &&
    y >= rect.top &&
    y <= rect.bottom
  ) {
    eggMessage.style.opacity = 1;
    setTimeout(() => {
      eggMessage.style.opacity = 0;
    }, 800);
  }
});
