const audio = document.querySelector("#audio");
audio.load();
const picture = document.querySelector("#picture");

picture.addEventListener("click", (e) => {
  audio.play();
});



