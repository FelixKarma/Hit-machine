const btn = document.querySelector(".btn_lnd");

const theme = document.querySelector("#theme");


btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "../css/contact.css") {

    theme.href = "../css/dark-contact.css";

  } else {

    theme.href = "../css/contact.css";
  }
});

//Constantes
const btnfr = document.querySelector("#fr");
const btneng = document.querySelector("#eng");
const btnleet = document.querySelector("#leet");

// Class trad header/footer
class trads {
  constructor(
    trad_ins,
    trad_conn,
    trad_nv1,
    trad_nv2,
    trad_nv3,
    trad_nv4,
    trad_nv5,
    href1,
    href2,
    href3,
    trad_srch,
    trad_btn,
    trad_ttc,
    trad_f1,
    trad_f2,
    trad_f3,
    trad_f4
  ) {
    this.trad_ins = trad_ins;
    this.trad_conn = trad_conn;
    this.trad_nv1 = trad_nv1;
    this.trad_nv2 = trad_nv2;
    this.trad_nv3 = trad_nv3;
    this.trad_nv4 = trad_nv4;
    this.trad_nv5 = trad_nv5;
    this.href1 = href1;
    this.href2 = href2;
    this.href3 = href3;
    this.trad_srch = trad_srch;
    this.trad_btn = trad_btn;
    this.trad_ttc = trad_ttc;
    this.trad_f1 = trad_f1;
    this.trad_f2 = trad_f2;
    this.trad_f3 = trad_f3;
    this.trad_f4 = trad_f4;
  }
}

// Les différentes trads sous objets
let tradfr = new trads(
  "S'inscrire",
  "Se connecter",
  "Accueil",
  "Blogs",
  "Profils",
  "Chat",
  "Plus",
  "Soutenez-nous",
  "Signaler un Bug",
  "Contacts",
  "Recherche",
  "Recherche",
  "Contactez-nous",
  "Contactez-nous",
  "CGU",
  "Signaler un Bug",
  "Soutenez-nous"
);

let tradeng = new trads(
  "Register",
  "Login",
  "Home",
  "Blogs",
  "Profiles",
  "Chat",
  "More",
  "Support us",
  "Report a Bug",
  "Contacts",
  "Search",
  "Search",
  "Contact us",
  "Contact us",
  "GUT",
  "Report a Bug",
  "Support us"
);

let tradleet = new trads(
  "5'1N5Cr1r3",
  "53 C0NN3C73r",
  "4CCU311",
  "81065",
  "Pr0F115",
  "CH47",
  "P1U5",
  "50U73N3Z-N0U5",
  "516N413r UN 8U6",
  "C0N74C75",
  "R3CH3rCH3",
  "R3CH3rCH3",
  "C0N74C73Z-N0U5",
  "C0N74C73Z-N0U5 ",
  "C6U",
  "516N413r UN 8U6",
  "50U73N3Z-N0U5"
);

/*Fonctions*/
// J'ai divisé mes traductions en objets que j'applique en fonction du bouton appuyé

btnfr.addEventListener("click", function () {
  document.getElementById("btnins").innerText = tradfr.trad_ins;
  document.getElementById("btnconn").innerText = tradfr.trad_conn;
  document.getElementById("btnac").innerText = tradfr.trad_nv1;
  document.getElementById("btnblg").innerText = tradfr.trad_nv2;
  document.getElementById("btnprof").innerText = tradfr.trad_nv3;
  document.getElementById("btnchat").innerText = tradfr.trad_nv4;
  document.getElementById("btnpls").innerText = tradfr.trad_nv5;
  document.getElementById("href1").innerText = tradfr.href1;
  document.getElementById("href2").innerText = tradfr.href2;
  document.getElementById("href3").innerText = tradfr.href3;
  document.getElementById("s").placeholder = tradfr.trad_srch;
  document.getElementById("search").innerText = tradfr.trad_btn;
  document.getElementById("ttc").innerText = tradfr.trad_ttc;
  document.getElementById("f1").innerText = tradfr.trad_f1;
  document.getElementById("f2").innerText = tradfr.trad_f2;
  document.getElementById("f3").innerText = tradfr.trad_f3;
  document.getElementById("f4").innerText = tradfr.trad_f4;
});

btneng.addEventListener("click", function () {
  document.getElementById("btnins").innerText = tradeng.trad_ins;
  document.getElementById("btnconn").innerText = tradeng.trad_conn;
  document.getElementById("btnac").innerText = tradeng.trad_nv1;
  document.getElementById("btnblg").innerText = tradeng.trad_nv2;
  document.getElementById("btnprof").innerText = tradeng.trad_nv3;
  document.getElementById("btnchat").innerText = tradfr.trad_nv4;
  document.getElementById("btnpls").innerText = tradeng.trad_nv5;
  document.getElementById("href1").innerText = tradeng.href1;
  document.getElementById("href2").innerText = tradeng.href2;
  document.getElementById("href3").innerText = tradeng.href3;
  document.getElementById("s").placeholder = tradeng.trad_srch;
  document.getElementById("search").innerText = tradeng.trad_btn;
  document.getElementById("ttc").innerText = tradeng.trad_ttc;
  document.getElementById("f1").innerText = tradeng.trad_f1;
  document.getElementById("f2").innerText = tradeng.trad_f2;
  document.getElementById("f3").innerText = tradeng.trad_f3;
  document.getElementById("f4").innerText = tradeng.trad_f4;
});

btnleet.addEventListener("click", function () {
  document.getElementById("btnins").innerText = tradleet.trad_ins;
  document.getElementById("btnconn").innerText = tradleet.trad_conn;
  document.getElementById("btnac").innerText = tradleet.trad_nv1;
  document.getElementById("btnblg").innerText = tradleet.trad_nv2;
  document.getElementById("btnprof").innerText = tradleet.trad_nv3;
  document.getElementById("btnchat").innerText = tradleet.trad_nv4;
  document.getElementById("btnpls").innerText = tradleet.trad_nv5;
  document.getElementById("href1").innerText = tradleet.href1;
  document.getElementById("href2").innerText = tradleet.href2;
  document.getElementById("href3").innerText = tradleet.href3;
  document.getElementById("s").placeholder = tradleet.trad_srch;
  document.getElementById("search").innerText = tradleet.trad_btn;
  document.getElementById("ttc").innerText = tradleet.trad_ttc;
  document.getElementById("f1").innerText = tradleet.trad_f1;
  document.getElementById("f2").innerText = tradleet.trad_f2;
  document.getElementById("f3").innerText = tradleet.trad_f3;
  document.getElementById("f4").innerText = tradleet.trad_f4;
});
