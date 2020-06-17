var name = prompt("What's your name");

var firstchar = name.slice(0, 1);

firstchar = firstchar.toUpperCase();
var restofname = name.slice(1, name.length);
restofname = restofname.toLowerCase();
var Capitalisedname = firstchar + restofname;
alert("Hello " + Capitalisedname + ", feel free to compose music!");
var numberOfPianoButtons = document.querySelectorAll(".key").length;
for (var i = 0; i < numberOfPianoButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function() {
    var keyInnerHTML = this.innerHTML;
    makeSound(keyInnerHTML);

    noteAnimation(keyInnerHTML);

  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  noteAnimation(event.key);

})

function makeSound(key) {
  switch (key) {
    case "a":
      var note1 = new Audio('Notes/C.mp3')
      note1.play();

      break;
    case "z":
      var note2 = new Audio('Notes/Db.mp3')
      note2.play();
      break;
    case "e":
      var note3 = new Audio('Notes/D.mp3')
      note3.play();

      break;
    case "r":
      var note4 = new Audio('Notes/Eb.mp3')
      note4.play();

      break;
    case "t":
      var note5 = new Audio('Notes/E.mp3')
      note5.play();

      break;
    case "y":
      var note6 = new Audio('Notes/F.mp3')
      note6.play();

      break;
    case "u":
      var note7 = new Audio('Notes/Gb.mp3')
      note7.play();

      break;
    case "i":
      var note8 = new Audio('Notes/G.mp3')
      note8.play();

      break;
    case "o":
      var note9 = new Audio('Notes/Ab.mp3')
      note9.play();

      break;
    case "p":

      var note10 = new Audio('Notes/A.mp3')
      note10.play();

      break;
    case "q":
      var note11 = new Audio('Notes/Bb.mp3')
      note11.play();

      break;
    case "s":
      var note12 = new Audio('Notes/B.mp3')
      note12.play();

      break;
    default:
      console.log(key);

  }
}

function noteAnimation(currentKey) {
  document.querySelector("."+currentKey).classList.add("pressed-white");
  setTimeout(function() {
    document.querySelector("." + currentKey).classList.remove("pressed-white");
      }, 400);
}
