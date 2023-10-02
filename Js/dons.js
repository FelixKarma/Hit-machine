const radioButtons = document.querySelectorAll('input[name="dons"]');

for (const radioButton of radioButtons) {
  if (radioButton != radioButton.checked) {
    document.getElementById("my-div").style.visibility = "hidden";
  } else {
    let myDiv = document.getElementById("my-div");

    const move = (e) => {
      //   //Try, catch to avoid any errors for touch screens (Error thrown when user doesn't move his finger)
      try {
        //     //PageX and PageY return the position of client's cursor from top left of screen
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
      } catch (e) {}
      //set left and top of div based on mouse position
      myDiv.style.left = x - 50 + "px";
      myDiv.style.top = y - 50 + "px";
    };
    //For mouse
    document.addEventListener("mousemove", (e) => {
      move(e);
    });
    // //For touch
    // document.addEventListener("touchmove", (e) => {
    //   move(e);
    // });
  }
}

//Detect touch device
// function isTouchDevice() {
//   try {
//     //We try to create TouchEvent. It would fail for desktops and throw error
//     document.createEvent("TouchEvent");

//     return true;
//   } catch (e) {
//     return false;
//   }
// }

function clickRadio() {
  document.location.reload();
}
