let score = 0;
let timeLeft = 10;
let gameStarted = false; // Variable pour vérifier si le jeu a démarré
const clickButton = document.getElementById("clickButton");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

// Événement pour incrémenter le score et démarrer le jeu
clickButton.addEventListener("click", () => {
  if (!gameStarted) {  // Si le jeu n'a pas encore démarré
    gameStarted = true; // Démarre le jeu
    startGame(); // Lancer le compte à rebours
  }
  score++; // Incrémenter le score à chaque clic
  scoreDisplay.textContent = `Score : ${score}`; // Afficher le score
});

// Fonction pour démarrer le compte à rebours
function startGame() {
  const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Temps restant : ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      clickButton.disabled = true; // Désactiver le bouton après la fin du jeu
      console.log(`Temps écoulé ! Votre score final est : ${score}`);

      // Redirection vers la page d'ajout du token avec les paramètres
      window.location.href = `index.html?score=${score}`;
    }
  }, 1000);
}
