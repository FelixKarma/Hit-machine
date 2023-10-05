//Constantes
const btn = document.querySelector(".btn_lnd");
const theme = document.querySelector("#theme");

// Classes
class bands {
  constructor(band_name, band_img, genre, band_desc, song_name, song) {
    this.band_name = band_name;
    this.band_img = band_img;
    this.genre = genre;
    this.band_desc = band_desc;
    this.song_name = song_name;
    this.song = song;
  }
}

// Les différents groupes sous objets
let grp1 = new bands(
  "Cypress Hill",
  "/Img/profil_charly/cypress.jpg",
  "Hip-Hop",
  "Cypress Hill est un groupe de hip-hop latino-américain, originaire de Los Angeles, en Californie. Le gorupe est composé par Sen Dog, Mellow Man Ace, Muggs et B-Real. Je recommande fortement la compil d'album \"The Essential Cypress Hill\" qui regroupe leurs plus gros hits.",
  "Latin Lingo",
  `/audio/Latin Lingo.mp3`
);
let grp2 = new bands(
  "Balthazar",
  "/Img/profil_charly/Balthazar.jpg",
  "Indie Pop/Rock",
  "Balthazar est un groupe belge de rock alternatif formé en 2004 par des musiciens originaires de la région de Courtrai, en Flandre-Occidentale. Je recommande personellement leur premier Album \"Applause\". :D ",
  "I'll Stay Here",
  `/audio/Balthazar.mp3`
);
let grp3 = new bands(
  "Odezenne",
  "/Img/profil_charly/Odezenne.jpg",
  "Electro/Rap/Alt",
  "Odezenne est un groupe français de musique alternative, originaire de Bordeaux. Il est formé par Alix Caillet, Jacques Cormary et Mattia Lucchini. Je recommanderais ici l'album \"1200 mètres en tout\".",
  "Caprice",
  `/audio/Odezenne.mp3`
);
let grp4 = new bands(
  "Puppetmastaz",
  "/Img/profil_charly/Puppetmastaz.jpg",
  "Hip-Hop/Rap/Funk/Electro",
  "Puppetmastaz est un groupe de hip-hop allemand fondé dans les années 1990 dans lequel les membres sont représentés par des marionnettes. Les artistes derrières ces marionnettes incluent: AD Hawk, Chilly Gonzales, Mocky, Dave Szigeti, David Skiba, N1tro, Patric Cremer et Blake Worrell. L'inventeur et Bandleader de ces Puppetmastaz: Paul Affeld (aka Paul PM - Mister Maloke).",
  "Do the Swamp",
  `/audio/Puppetmastaz.mp3`
);

//Par défault sur le premier groupe
document.getElementById("bname").innerHTML = grp1.band_name;
document.getElementById("bimg").src = grp1.band_img;
document.getElementById("genre").innerHTML = grp1.genre;
document.getElementById("bdesc").innerHTML = grp1.band_desc;
document.getElementById("sname").innerHTML = grp1.song_name;
document.getElementById("song").src = grp1.song;

/*Fonctions*/

function setBand(groups) {
  if (groups == "grp1") {
    document.getElementById("bname").innerHTML = grp1.band_name;
    document.getElementById("bimg").src = grp1.band_img;
    document.getElementById("genre").innerHTML = grp1.genre;
    document.getElementById("bdesc").innerHTML = grp1.band_desc;
    document.getElementById("sname").innerHTML = grp1.song_name;
    document.getElementById("song").src = grp1.song;
  } else if (groups == "grp2") {
    document.getElementById("bname").innerHTML = grp2.band_name;
    document.getElementById("bimg").src = grp2.band_img;
    document.getElementById("genre").innerHTML = grp2.genre;
    document.getElementById("bdesc").innerHTML = grp2.band_desc;
    document.getElementById("sname").innerHTML = grp2.song_name;
    document.getElementById("song").src = grp2.song;
  } else if (groups == "grp3") {
    document.getElementById("bname").innerHTML = grp3.band_name;
    document.getElementById("bimg").src = grp3.band_img;
    document.getElementById("genre").innerHTML = grp3.genre;
    document.getElementById("bdesc").innerHTML = grp3.band_desc;
    document.getElementById("sname").innerHTML = grp3.song_name;
    document.getElementById("song").src = grp3.song;
  } else {
    document.getElementById("bname").innerHTML = grp4.band_name;
    document.getElementById("bimg").src = grp4.band_img;
    document.getElementById("genre").innerHTML = grp4.genre;
    document.getElementById("bdesc").innerHTML = grp4.band_desc;
    document.getElementById("sname").innerHTML = grp4.song_name;
    document.getElementById("song").src = grp4.song;
  }
}

btn.addEventListener("click", function () {
  // Si notre URL contient le light-mode (ici inscription)
  if (theme.getAttribute("href") == "../css/charly.css") {
    // Puis on switch au dark-mode
    theme.href = "../css/dark-charly.css";
    // Sinon
  } else {
    // Retour au  "charly.css"
    theme.href = "../css/charly.css";
  }
});
