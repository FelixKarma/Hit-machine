class band {
  constructor(
    band_name,
    genre,
    band_logo,
    band_description,
    song_name,
    band_audio
  ) {
    this.band_name = band_name;
    this.band_logo = band_logo;
    this.genre = genre;
    this.band_description = band_description;
    this.song_name = song_name;
    this.band_audio = band_audio;
  }
}

let grp1 = new band(
  "Fluisteraars",
  "Post Black Metal",
  "/Img/profil_colon/bands/Fluisteraars.jpg",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quaerat asperiores vitae facere fugiat libero? Dignissimos accusamus commodi rem, totam quidem magni eius ea voluptate quia amet eligendi consequatur alias, cumque dolor. Facere facilis debitis omnis laudantium, culpa, quis doloremque maxime, ullam cupiditate blanditiis iusto voluptatem aut laboriosam voluptate officia dolorum fugiat ducimus. Debitis beatae distinctio corporis cupiditate. Amet nobis voluptates beatae laborum officiis excepturi voluptate pariatur esse, quaerat tempora harum minus atque nemo fugiat dignissimos exercitationem aut provident ut deleniti. Nobis delectus obcaecati eos blanditiis error! Aut eius a exercitationem sunt velit corporis deleniti recusandae illum explicabo quidem voluptates eligendi libero, ratione cum nostrum facere ipsum officiis eos minus consequatur debitis illo! Veritatis ipsa, obcaecati ratione similique voluptatibus tempore illo quia quos sit mollitia maiores eos pariatur vero suscipit error distinctio quam, dolor aut nam sapiente soluta dolorem molestiae minima. Atque nostrum ex est quae consequuntur esse aut fugiat ducimus! Fugiat beatae, a mollitia molestias ex ullam! Necessitatibus, accusamus vel temporibus nobis dolore facilis, distinctio, cupiditate itaque omnis delectus et. Suscipit vero consectetur voluptate veritatis blanditiis. Dolorem repudiandae, odio id accusamus tempore necessitatibus est distinctio sapiente ipsum laborum voluptatem consequuntur a odit quisquam culpa debitis quo. Suscipit, ducimus.",
  "Titre : 'De Doornen' Album : 'Dromers'",
  "/audio/De Doornen.mp3"
);

let grp2 = new band(
  "Midnight",
  "Black'n'Roll",
  "/Img/profil_colon/bands/midnight.jpg",
  "??????????",
  "You can't stop steel",
  "/audio/You Can't Stop Steel.mp3"
);

let grp3 = new band(
  "Lamp Of Murmuur",
  "Black Metal",
  "/Img/profil_colon/bands/lamp_of_murmuur.jpg",
  "?????????",
  "Nocturnal Vengeance",
  "/audio/"
);

let grp4 = new band(
  "Dödsrit",
  "Black Metal/Crust",
  "/Img/profil_colon/bands/.jpg",
  "????????????",
  "song name",
  "/audio/.mp3"
);

let grp5 = new band(
  "Wood Of Ypres",
  "Blackened Doom Metal",
  "/Img/profil_colon/bands/.jpg",
  "????????",
  "???",
  "/audio/.mp3"
);

document.getElementById("bname").innerHTML = grp1.band_name;
    document.getElementById("bimg").src = grp1.band_logo;
    document.getElementById("bimg").alt = grp1.band_name;
    document.getElementById("genre").innerHTML = grp1.genre;
    document.getElementById("bdesc").innerHTML = grp1.band_description;
    document.getElementById("sname").innerHTML = grp1.song_name;
    document.getElementById("song").src = grp1.band_audio;

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
  } else if (groups == "grp2") {
    document.getElementById("bname").innerHTML = grp2.band_name;
    document.getElementById("bimg").src = grp2.band_logo;
    document.getElementById("bimg").alt = grp2.band_name;
    document.getElementById("genre").innerHTML = grp2.genre;
    document.getElementById("bdesc").innerHTML = grp2.band_description;
    document.getElementById("sname").innerHTML = grp2.song_name;
    document.getElementById("song").src = grp2.band_audio;
  } else if (groups == "grp3") {
    document.getElementById("bname").innerHTML = grp3.band_name;
    document.getElementById("bimg").src = grp3.band_logo;
    document.getElementById("bimg").alt = grp3.band_name;
    document.getElementById("genre").innerHTML = grp3.genre;
    document.getElementById("bdesc").innerHTML = grp3.band_description;
    document.getElementById("sname").innerHTML = grp3.song_name;
    document.getElementById("song").src = grp3.band_audio;
  } else if (groups == "grp4") {
    document.getElementById("bname").innerHTML = grp4.band_name;
    document.getElementById("bimg").src = grp4.band_logo;
    document.getElementById("bimg").alt = grp4.band_name;
    document.getElementById("genre").innerHTML = grp4.genre;
    document.getElementById("bdesc").innerHTML = grp4.band_description;
    document.getElementById("sname").innerHTML = grp4.song_name;
    document.getElementById("song").src = grp4.band_audio;
  }
  if (groups == "grp5") {
    document.getElementById("bname").innerHTML = grp5.band_name;
    document.getElementById("bimg").src = grp5.band_logo;
    document.getElementById("bimg").alt = grp5.band_name;
    document.getElementById("genre").innerHTML = grp5.genre;
    document.getElementById("bdesc").innerHTML = grp5.band_description;
    document.getElementById("sname").innerHTML = grp5.song_name;
    document.getElementById("song").src = grp5.band_audio;
  }
}




// DOMContentLoaded   event

addEventListener

