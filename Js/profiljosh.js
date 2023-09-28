class musics{
    constructor(music_name, artist, genre, music_img, music_audio){
        this.music_name = music_name;
        this.artist = artist;
        this.genre = genre;
        this.music_img = music_img;
        this.music_audio = music_audio;
    }
}


let mus1 = new musics(
    "Astronomia", 
    "Vicetone & Tony Igy",
    "Electro Music",
    "/Img/profiljosh/imgastro.jpg",
    "/audio/Astronomia.mp3"
    );

let mus2 = new musics(
    "It Went",
    "S3RL ft Tamika",
    "Hardcore",
    "/Img/profiljosh/imgitwent.jpg",
    "/audio/ItWent.mp3"
);

let mus3 = new musics(
    "Substitution",
    "Purple Machine Disco et Kungs",
    "Electro Music",
    "/Img/profiljosh/imgsubstitution.jpg",
    "/audio/Substitution.mp3"
);



document.getElementById("mname").innerHTML = mus1.music_name;
document.getElementById("aname").innerHTML = mus1.artist;
document.getElementById("genre").innerHTML = mus1.genre;
document.getElementById("mimg").src  = mus1.music_img;
document.getElementById("mimg").alt  = mus1.music_name;
document.getElementById("music_audio").src = mus1.music_audio;

function setMusics(groups) {
    if(groups == "mus1") {
        document.getElementById("mname").innerHTML = mus1.music_name;
        document.getElementById("aname").innerHTML = mus1.artist;
        document.getElementById("genre").innerHTML = mus1.genre;
        document.getElementById("mimg").src  = mus1.music_img;
        document.getElementById("mimg").alt  = mus1.music_name;
        document.getElementById("music_audio").src = mus1.music_audio;
    }

        else if (groups == "mus2") {
            document.getElementById("mname").innerHTML = mus2.music_name;
            document.getElementById("aname").innerHTML = mus2.artist;
            document.getElementById("genre").innerHTML = mus2.genre;
            document.getElementById("mimg").src  = mus2.music_img;
            document.getElementById("mimg").alt  = mus2.music_name;
            document.getElementById("music_audio").src = mus2.music_audio;
            }
                else if (groups == "mus3") { 
                    document.getElementById("mname").innerHTML = mus3.music_name;
                    document.getElementById("aname").innerHTML = mus3.artist;
                    document.getElementById("genre").innerHTML = mus3.genre;
                    document.getElementById("mimg").src  = mus3.music_img;
                    document.getElementById("mimg").alt  = mus3.music_name;
                    document.getElementById("music_audio").src = mus3.music_audio;
            }
}
