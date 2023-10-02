class band {
  constructor(
    band_name,
    genre,
    band_logo,
    band_description,
    song_name,
    band_audio,
    bandcamp
  ) {
    this.band_name = band_name;
    this.band_logo = band_logo;
    this.genre = genre;
    this.band_description = band_description;
    this.song_name = song_name;
    this.band_audio = band_audio;
    this.bandcamp = bandcamp;
  }
}

let grp1 = new band(
  "Fluisteraars",
  "Post Black Metal",
  "/Img/profil_colon/bands/Fluisteraars.jpg",
  "Fluisteraars est un groupe hollandais de Black Atmosphérique. Actif depuis 2009, ce n'est qu'en 2014 que voit le jour le premier album, suivi par un rythme régulier de sorties parues chez Eisenwald. En 2018 paraît un split avec Turia, autre groupe majeur du Black Metal hollandais des années 2010, centré sur un fleuve présent dans la région natale des deux groupes.  ",
  "Titre : 'De Doornen'",
  "/audio/De Doornen.mp3",
  "https://fluisteraars.bandcamp.com/music"
);

let grp2 = new band(
  "Midnight",
  "Black'n'Roll",
  "/Img/profil_colon/bands/midnight2.png",
  "Midnight est un groupe de Black n' Roll/Speed Metal rappelant Motorhead, Venom ou Bathory venu de Cleveland, Ohio. Fondé en 2003 comme un projet solo par Athenar sans autre ambition que de sortir quelques EPs, le one-man band s'étoffe d'un batteur (SS) et d'un guitariste (Commandor Vanik) pour les concerts. Un premier opus remarqué, Satanic Royalty, sort chez Hells Headbangers Records en 2011 tandis que son successeur No Mercy For Mayhem (titre hommage à Venom) paraît trois ans plus tard dans la même écurie. En 2017, c'est l'EP Shox Of Violence (agrémenté de live et de nombreuses reprises) qui est annoncé pour le début d'année. ",
  "Titre : 'You can't stop steel'",
  "/audio/You Can't Stop Steel.mp3",
  "https://midnight-ohio.bandcamp.com/album/rebirth-by-blasphemy"
);

let grp3 = new band(
  "Lamp Of Murmuur",
  "Raw Black Metal",
  "/Img/profil_colon/bands/lamp_of_murmuur.jpg",
  "Les projets de black metal brut ne manquent pas à travers le monde, mais la façon dont M. aborde le genre place Lamp of Murmuur sur une voie différente de celle de beaucoup de ses contemporains. Le nouvel album Submission and Slavery développe davantage l’amour de Lamp of Murmuur pour le goth et le post-rock, y compris une reprise de Christian Death et un hommage à Sisters of Mercy avec ses illustrations. Musicalement, il fait allusion aux influences heavy metal et hard rock sans compromettre le noyau extrême du projet.",
  "Titre : 'Nocturnal Vengeance'",
  "/audio/Nocturnal Vengeance.m4a",
  "https://lampofmurmuur.bandcamp.com/"
);

let grp4 = new band(
  "Dödsrit",
  "Black Metal/Crust",
  "/Img/profil_colon/bands/dodsrit.jpg",
  "Dödsrit est le projet Black / Crust de Christoffer Öster, ancien guitariste de Totem Skin. L'écriture du premier album éponyme démarra juste après l'annonce, en mars 2017, de la séparation de sa précédente formation. Sorti chez Alerta Antifascista, ce premier LP propose un dynamique mélange de Blackened Hardcore, de Crust mélodique et d'ambiances plus atmosphériques.",
  "Titre : 'Shallow Graves'",
  "/audio/Shallow Graves.mp3",
  "https://dodsrit.bandcamp.com/album/mortal-coil"
);

let grp5 = new band(
  "Wood Of Ypres",
  "Blackened Doom Metal",
  "/Img/profil_colon/bands/woodofypres.jpg",
  "Woods Of Ypres se forme en 2002 à Windsor dans l'Ontario en 2002 sous l'impulsion de David Gold (Batterie) qui recrute Aaron Palmer (Basse / Chant), Robin Cross (Chant) et Brian McManus (Guitare). Le quatuor enregistre alors tout de suite son premier ep Against The Seasons: Cold Winter Songs From The Dead Summer Heat. Mais en 2004, David déménage à Toronto. Il poursuit son projet en s'occupant également du chant et devient multi-instrumentiste. Il recrute alors de nouveaux musiciens : Jessica Rose (Claviers), Connor Sharpe (Basse) et Steve Jones (Guitare) pour travailler sur le premier album, Pursuit Of The Sun&Allure Of The Earth, qui sort sur son propre label Krankenhaus Records. Woods Of Ypres y dévoile un Black Metal / Doom Metal de haute volée proche de certains travaux d'Agalloch, Ulver, Primordial ou Enslaved. Pour le second album, David s'entoure toujours de Jessica Rose (Claviers), puis de Dan Hulse (Basse) pour l'enregistrement de Woods III: The Deepest Roots And Darkest Blues. Celui-ci sort en 2007 et dévoile de nouvelles orientations musicales plus sombres pour le groupe. L'année suivante, le musicien revient dans sa ville natale, Sault Ste. Marie dans l'Ontario et commence à travailler sur Woods 4: The Green Album. Bryan Belleau (Guitare), Evan Madden (Batterie) et Shane Madden (Basse) viennent l'épauler et le disque parait chez Practical Art Records. Une compilation nommée Independent Nature 2002-2007 est également éditée la même année par le label de David. En 2010, de fausses rumeurs circulent sur le split de Woods Of Ypres qui signe néanmoins chez Earache Records pour une plus large distribution de Woods 4: The Green Album. En août 2011, David et Joel Violette (Guitare / Basse / Piano) enregistrent Woods 5: Grey Skies&Electric Light, mais David décède brutalement le 21 décembre dans un accident de voiture. Le quatrième album studio sort pourtant chez Earache Records début 2012 comme album posthume et épitaphe du projet de David Gold. ",
  "Titre : 'I was buried in Mount Pleasant Cemetery'",
  "/audio/woodofypres.mp3",
  "https://woods-of-ypres.bandcamp.com/music"
);

document.getElementById("bname").innerHTML = grp1.band_name;
    document.getElementById("bimg").src = grp1.band_logo;
    document.getElementById("bimg").alt = grp1.band_name;
    document.getElementById("genre").innerHTML = grp1.genre;
    document.getElementById("bdesc").innerHTML = grp1.band_description;
    document.getElementById("sname").innerHTML = grp1.song_name;
    document.getElementById("song").src = grp1.band_audio;
    document.getElementById("bandcamp").href = grp1.bandcamp;

/*Fonctions*/

function setBand(groups) {
  if (groups == "grp1") {
    document.getElementById("bname").innerHTML = grp1.band_name;
    document.getElementById("bimg").src = grp1.band_logo;
    document.getElementById("bimg").alt = grp1.band_name;
    document.getElementById("genre").innerHTML = grp1.genre;
    document.getElementById("bdesc").innerHTML = grp1.band_description;
    document.getElementById("sname").innerHTML = grp1.song_name;
    document.getElementById("song").src = grp1.band_audio;
    document.getElementById("bandcamp").href = grp1.bandcamp;
  } else if (groups == "grp2") {
    document.getElementById("bname").innerHTML = grp2.band_name;
    document.getElementById("bimg").src = grp2.band_logo;
    document.getElementById("bimg").alt = grp2.band_name;
    document.getElementById("genre").innerHTML = grp2.genre;
    document.getElementById("bdesc").innerHTML = grp2.band_description;
    document.getElementById("sname").innerHTML = grp2.song_name;
    document.getElementById("song").src = grp2.band_audio;
    document.getElementById("bandcamp").href = grp2.bandcamp;
  } else if (groups == "grp3") {
    document.getElementById("bname").innerHTML = grp3.band_name;
    document.getElementById("bimg").src = grp3.band_logo;
    document.getElementById("bimg").alt = grp3.band_name;
    document.getElementById("genre").innerHTML = grp3.genre;
    document.getElementById("bdesc").innerHTML = grp3.band_description;
    document.getElementById("sname").innerHTML = grp3.song_name;
    document.getElementById("song").src = grp3.band_audio;
    document.getElementById("bandcamp").href = grp3.bandcamp;
  } else if (groups == "grp4") {
    document.getElementById("bname").innerHTML = grp4.band_name;
    document.getElementById("bimg").src = grp4.band_logo;
    document.getElementById("bimg").alt = grp4.band_name;
    document.getElementById("genre").innerHTML = grp4.genre;
    document.getElementById("bdesc").innerHTML = grp4.band_description;
    document.getElementById("sname").innerHTML = grp4.song_name;
    document.getElementById("song").src = grp4.band_audio;
    document.getElementById("bandcamp").href = grp4.bandcamp;
  }
  if (groups == "grp5") {
    document.getElementById("bname").innerHTML = grp5.band_name;
    document.getElementById("bimg").src = grp5.band_logo;
    document.getElementById("bimg").alt = grp5.band_name;
    document.getElementById("genre").innerHTML = grp5.genre;
    document.getElementById("bdesc").innerHTML = grp5.band_description;
    document.getElementById("sname").innerHTML = grp5.song_name;
    document.getElementById("song").src = grp5.band_audio;
    document.getElementById("bandcamp").href = grp5.bandcamp;
  }
}




// DOMContentLoaded   event

addEventListener

