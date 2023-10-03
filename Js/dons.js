const radioButtons = document.querySelectorAll('input[name="dons"]');

for (const radioButton of radioButtons) {
  if (radioButton.checked) {
    let myDiv = document.getElementById("my-div");

    const move = (e) => {
      try {
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
      } catch (e) {}

      myDiv.style.left = x - 50 + "px";
      myDiv.style.top = y - 50 + "px";
    };

    document.addEventListener("mousemove", (e) => {
      move(e);
    });
  }
}

function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");

    return true;
  } catch (e) {
    return false;
  }
}

function clickRadio() {
  document.location.reload();
}
