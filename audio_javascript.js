var audio = new Audio('https://www.youtube.com/watch?v=nEf2ML7wkBE&t=43s'); // define your audio
var myAudio = document.getElementById("sound");
document.addEventListener("click", function(){
    console.log('hello world');
    audio.play().catch(function() {
      console.log(audio);
  });
    // document.getElementById("#bobbie2").innerHTML = "repeat this";
});