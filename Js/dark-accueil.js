const btn = document.querySelector(".btn_lnd");
// On prend le stylesheet <link>
const theme = document.querySelector("#theme");

// On écoute en cas de click sur le boutton
btn.addEventListener("click", function() {
  // Si notre URL contient le light-mode (ici inscription)
  if (theme.getAttribute("href") == "../css/accueil.css") {
    // Puis on switch au "dark-inscription.css"
    theme.href = "../css/dark-accueil.css";
  // Sinon
  } else {
    // Retour au  "inscription.css"
    theme.href = "../css/accueil.css";
  }
});