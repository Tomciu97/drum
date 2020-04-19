document.addEventListener("keydown", function (event) {
   makeSound(event.key);
   buttonAnimation(event.key);
})

document.querySelectorAll(".drum").forEach(button => {
   button.addEventListener("click", function () {
      let button_innner = this.innerHTML;
      makeSound(button_innner);
      buttonAnimation(button_innner);
   });
});

function makeSound(key) {
   switch (key) {
      case "w":
         const tom_1 = new Audio("sounds/tom-1.mp3");
         tom_1.play();
         break;
      case "a":
         const tom_2 = new Audio("sounds/tom-2.mp3");
         tom_2.play();
         break;
      case "s":
         const tom_3 = new Audio("sounds/tom-3.mp3");
         tom_3.play();
         break;
      case "d":
         const tom_4 = new Audio("sounds/tom-4.mp3");
         tom_4.play();
         break;
      case "j":
         const snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;
      case "k":
         const crash = new Audio("sounds/crash.mp3");
         crash.play();
         break;
      case "l":
         const kick_bass = new Audio("sounds/kick-bass.mp3");
         kick_bass.play();
         break;
      default:
         console.log(button_innner);
   }
}

function buttonAnimation(current_key) {
   let active_button = document.querySelector("." + current_key);
   active_button.classList.add("pressed");
   active_button.style.color = "white";
   setTimeout(function () {
      active_button.classList.remove("pressed");
      active_button.style.color = "#DA0463";
   }, 200);
}