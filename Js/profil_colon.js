// Classes
class bands {
  constructor(band_name, band_img, band_desc, song_name, song) {
    this.band_name = band_name;
    this.band_img = band_img;
    this.band_desc = band_desc;
    this.song_name = song_name;
    this.song = song;
  }
}

// Les différents groupes sous objets
let grp1 = new bands(
  "Groupe1",
  "/Img/logo.png",
  "Mon gros caca",
  "ENORME",
  `/C:/Users/nurserie1/Desktop/Projet Fil Rouge/fart.mp3`
);
let grp2 = new bands(
  "Groupe2",
  "/Img/logo.png",
  "Mes gros caca",
  "ENORMEE",
  `/C:/Users/nurserie1/Desktop/Projet Fil Rouge/fart.mp3`
);
let grp3 = new bands(
  "Groupe3",
  "../Img/logo.png",
  "Nos gros caca",
  "ENORMEEE",
  `/C:/Users/nurserie1/Desktop/Projet Fil Rouge/fart.mp3`
);

/*Fonctions*/

function setBand(groups) {
  if (groups == "grp1") {
    document.getElementById("bname").innerHTML = grp1.band_name;
    document.getElementById("bimg").innerHTML = grp1.band_img;
    document.getElementById("bdesc").innerHTML = grp1.band_desc;
    document.getElementById("sname").innerHTML = grp1.song_name;
    document.getElementById("song").innerHTML = grp1.song;
  } else if (groups == "grp2") {
    document.getElementById("bname").innerHTML = grp2.band_name;
    document.getElementById("bimg").innerHTML = grp2.band_img;
    document.getElementById("bdesc").innerHTML = grp2.band_desc;
    document.getElementById("sname").innerHTML = grp2.song_name;
    document.getElementById("song").innerHTML = grp2.song;
  } else {
    document.getElementById("bname").innerHTML = grp3.band_name;
    document.getElementById("bimg").innerHTML = grp3.band_img;
    document.getElementById("bdesc").innerHTML = grp3.band_desc;
    document.getElementById("sname").innerHTML = grp3.song_name;
    document.getElementById("song").innerHTML = grp3.song;
  }
}
