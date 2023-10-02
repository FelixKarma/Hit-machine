const btn = document.querySelector(".btn_lnd");

const theme = document.querySelector("#theme");


btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "../css/accueil.css") {

    theme.href = "../css/dark-accueil.css";

  } else {

    theme.href = "../css/accueil.css";
  }
});