document.querySelectorAll(".drum").forEach((button, index) => {
  button.addEventListener("click", function () {
    buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var ton1 = new Audio(`sounds/tom-1.mp3`);
      ton1.play();

      break;
    case "a":
      var ton2 = new Audio(`sounds/tom-2.mp3`);
      ton2.play();
      break;
    case "s":
      var ton3 = new Audio(`sounds/tom-3.mp3`);
      ton3.play();
      break;

    case "d":
      var ton4 = new Audio(`sounds/tom-4.mp3`);
      ton4.play();
      break;

    case "j":
      var ton5 = new Audio(`sounds/snare.mp3`);
      ton5.play();
      break;
    case "k":
      var ton6 = new Audio(`sounds/crash.mp3`);
      ton6.play();
      break;
    case "l":
      var ton7 = new Audio(`sounds/kick-bass.mp3`);
      ton7.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 500);
}
