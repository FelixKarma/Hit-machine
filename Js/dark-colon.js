const btn = document.querySelector(".btn_switch");
// On prend le stylesheet <link>
const theme = document.querySelector("#theme");

// On écoute en cas de click sur le boutton
btn.addEventListener("click", function() {
  // Si notre URL contient le light-mode (ici inscription)
  if (theme.getAttribute("href") == "../css/Header_footer.css") {
    // Puis on switch au "dark-inscription.css"
    theme.href = "../css/Header_footer_dark.css";
  // Sinon
  } else {
    // Retour au  "inscription.css"
    theme.href = "../css/Header_footer.css";
  }
});