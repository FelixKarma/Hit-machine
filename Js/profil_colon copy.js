class band {
  constructor(band_name, band_logo, band_description, song_name, band_audio) {
    this.band_name = band_name;
    this.band_logo = band_logo;
    this.band_description = band_description;
    this.song_name = song_name;
    this.band_audio = band_audio;
  }
}

let grp1 = new band(
  "Fluisteraars",
  "/Img/profil_colon/bands/Fluisteraars.jpg",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem quaerat asperiores vitae facere fugiat libero? Dignissimos accusamus commodi rem, totam quidem magni eius ea voluptate quia amet eligendi consequatur alias, cumque dolor. Facere facilis debitis omnis laudantium, culpa, quis doloremque maxime, ullam cupiditate blanditiis iusto voluptatem aut laboriosam voluptate officia dolorum fugiat ducimus. Debitis beatae distinctio corporis cupiditate. Amet nobis voluptates beatae laborum officiis excepturi voluptate pariatur esse, quaerat tempora harum minus atque nemo fugiat dignissimos exercitationem aut provident ut deleniti. Nobis delectus obcaecati eos blanditiis error! Aut eius a exercitationem sunt velit corporis deleniti recusandae illum explicabo quidem voluptates eligendi libero, ratione cum nostrum facere ipsum officiis eos minus consequatur debitis illo! Veritatis ipsa, obcaecati ratione similique voluptatibus tempore illo quia quos sit mollitia maiores eos pariatur vero suscipit error distinctio quam, dolor aut nam sapiente soluta dolorem molestiae minima. Atque nostrum ex est quae consequuntur esse aut fugiat ducimus! Fugiat beatae, a mollitia molestias ex ullam! Necessitatibus, accusamus vel temporibus nobis dolore facilis, distinctio, cupiditate itaque omnis delectus et. Suscipit vero consectetur voluptate veritatis blanditiis. Dolorem repudiandae, odio id accusamus tempore necessitatibus est distinctio sapiente ipsum laborum voluptatem consequuntur a odit quisquam culpa debitis quo. Suscipit, ducimus.",
  "Titre : 'De Doornen' Album : 'Dromers'",
  "/audio/De Doornen.mp3"
);

let grp2 = new band();

let grp3 = new band();

/*Fonctions*/

function setBand(groups) {
  if (groups == "grp1") {
    document.getElementById("bname").innerHTML = grp1.band_name;
    document.getElementById("bimg").src = grp1.band_logo;
    document.getElementById("bimg").alt = grp1.band_name;
    document.getElementById("bdesc").innerHTML = grp1.band_description;
    document.getElementById("sname").innerHTML = grp1.song_name;
    document.getElementById("song").src = grp1.band_audio;
  } else if (groups == "grp2") {
    document.getElementById("bname").innerHTML = grp2.band_name;
    document.getElementById("bimg").innerHTML = grp2.band_logo;
    document.getElementById("bdesc").innerHTML = grp2.band_description;
    document.getElementById("sname").innerHTML = grp2.song_name;
    document.getElementById("song").innerHTML = grp2.band_audio;
  } else {
    document.getElementById("bname").innerHTML = grp3.band_name;
    document.getElementById("bimg").innerHTML = grp3.band_logo;
    document.getElementById("bdesc").innerHTML = grp3.band_description;
    document.getElementById("sname").innerHTML = grp3.song_name;
    document.getElementById("song").innerHTML = grp3.band_audio;
  }
}
