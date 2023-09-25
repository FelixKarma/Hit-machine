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
  "Hit-machineImgprofil_colon\bandsFluisteraars.jpg",
  "???????????????????????????????????",
  "De Dormen",
  "Hit-Machine\vidéosTrololo.mp4"
);

let grp2 = new band();

let grp3 = new band();

function set_band(bands) {
  if (bands == "grp1") {
    document.getElementById("bname").innerHTML = grp1.band_name;
  }else if (bands =="grp2") {
    document.getElementById("bname").innerHTML = grp2.band_name;

  }else if (bands == "grp3") {
    document.getElementById("bname").innerHTML = grp3.band_name;
  }else (bands == "grp4") {
    
  }
}
