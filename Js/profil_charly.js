// Classes
class bands {
  constructor(band_name, band_img, genre, band_desc, song_name, song) {
    this.band_name = band_name;
    this.band_img = band_img;
    this.genre=genre;
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
  "Mon gros caca",
  "ENORME",
  `/audio/Latin Lingo.mp3`
);
let grp2 = new bands(
  "Balthazar",
  "/Img/profil_charly/Balthazar.jpg",
  "Indie Pop/Rock",
  "Mes gros caca",
  "ENORMEE",
  `/audio/Balthazar.mp3`
);
let grp3 = new bands(
  "Odezenne",
  "/Img/profil_charly/Odezenne.jpg",
  "Electro/Rap/Alt",
  "Nos gros caca",
  "ENORMEEE",
  `/audio/Odezenne.mp3`
);
let grp4 = new bands(
  "Puppetmastaz",
  "/Img/profil_charly/Puppetmastaz.jpg",
  "Hip-Hop/Rap/Funk/Electro",
  "Nos gros caca",
  "ENORMEEE",
  `/audio/Puppetmastaz.mp3`
);

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
  } else if (groups == "grp3"){
    document.getElementById("bname").innerHTML = grp3.band_name;
    document.getElementById("bimg").src = grp3.band_img;
    document.getElementById("genre").innerHTML = grp3.genre;
    document.getElementById("bdesc").innerHTML = grp3.band_desc;
    document.getElementById("sname").innerHTML = grp3.song_name;
    document.getElementById("song").src = grp3.song;
  }else{
    document.getElementById("bname").innerHTML = grp4.band_name;
    document.getElementById("bimg").src = grp4.band_img;
    document.getElementById("genre").innerHTML = grp4.genre;
    document.getElementById("bdesc").innerHTML = grp4.band_desc;
    document.getElementById("sname").innerHTML = grp4.song_name;
    document.getElementById("song").src = grp4.song;
  }
}
