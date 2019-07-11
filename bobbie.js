//var audio = new Audio('happy.mp3'); // define your audio
const audio = new Audio();
const button = document.querySelector('button');
button.addEventListener('click', playSound);
// var myAudio = document.getElementById("sound");
function playSound() {
  audio.src = "https://www.youtube.com/watch?v=nEf2ML7wkBE&t=43s";
  audio.play();
}
document.addEventListener("click", function(){
  console.log('event handler invoked');
  audio.then(function(response) {
    console.log(response);
  })
  //button.click();
  //   console.log('hello world');
  //   console.log();
  //   document.getElementById("sound").play().catch(function() {
  //     console.log(audio);
  // });
    // document.getElementById("#bobbie2").innerHTML = "repeat this";
});