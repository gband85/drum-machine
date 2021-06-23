var drum_pads=document.querySelectorAll(".drum-pad")
document.addEventListener("keyup", function() {
  drum_pads.forEach((element) => {
    element.style.backgroundColor="darkblue"
  })
})
document.addEventListener("mouseup", function() {
  drum_pads.forEach((element) => {
    element.style.backgroundColor="darkblue"
  })
})
document.addEventListener("keydown",function(e) {
  // console.log(drum_pads)
var audio2=  document.getElementById(e.code.replace("Key",""))

audio2.play()
audio2.parentElement.style.backgroundColor="orange"
updateDisplay(audio2.parentElement.id)
  })
drum_pads.forEach((element) => {
  
  element.addEventListener("mousedown",function() {
    
  var audio1= document.getElementById(element.firstElementChild.id)
  element.style.backgroundColor="orange"
  audio1.play()
    updateDisplay(element.id)
  })
})
 var display=document.getElementById("display");

function updateDisplay(name) {
  display.innerHTML=name;
  // drum_pads.style.backgroundColor="grey"
  }