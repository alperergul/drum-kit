document.querySelectorAll(".drum").forEach((button) => {
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
      let ton1 = new Audio(`sounds/tom-1.mp3`);
      ton1.play();

      break;
    case "a":
      let ton2 = new Audio(`sounds/tom-2.mp3`);
      ton2.play();
      break;
    case "s":
      let ton3 = new Audio(`sounds/tom-3.mp3`);
      ton3.play();
      break;

    case "d":
      let ton4 = new Audio(`sounds/tom-4.mp3`);
      ton4.play();
      break;

    case "j":
      let ton5 = new Audio(`sounds/snare.mp3`);
      ton5.play();
      break;
    case "k":
      let ton6 = new Audio(`sounds/crash.mp3`);
      ton6.play();
      break;
    case "l":
      let ton7 = new Audio(`sounds/kick-bass.mp3`);
      ton7.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 500);
}
