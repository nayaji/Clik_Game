// Sélection des éléments du DOM
const connectButton = document.getElementById("connectButton");
const statusMessage = document.getElementById("statusMessage");
const menu = document.getElementById("menu");

// Fonction pour afficher le menu de jeux directement
function accessGameDirectly() {
  try {
    // Afficher le menu de jeux
    menu.style.display = "block";
    connectButton.style.display = "none"; // Cacher le bouton de connexion
    statusMessage.textContent = "Accès direct au jeu autorisé.";
  } catch (error) {
    statusMessage.textContent = "Erreur : " + error.message;
  }
}

// Ajouter un écouteur d'événements au bouton de connexion
connectButton.addEventListener("click", accessGameDirectly);
