
// Detecting button click(add event listner to each specific button to respond to click)
var numOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i=0 ; i< numOfDrumButtons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
  var buttoninnerHTML= this.innerHTML; // this refers to HTML element object that triggered the event
  makeSound(buttoninnerHTML);
  buttonAnamation(buttoninnerHTML);
})
}

// Detecting keyboard press
document.addEventListener("keypress",function(event)/** document. adds event listner on entire page to respond to any keypress **/
{  // event is th event object
  var keypressed=event.key; // event.key returns value of key that is pressed
  makeSound(keypressed);
  buttonAnamation(keypressed);
})

function makeSound(key)
{
    switch (key) {
    case "w":
    var audiocrash=new Audio("sounds/crash.mp3");
    audiocrash.play();
    break;

    case "a":
    var audiokickbass=new Audio("sounds/kick-bass.mp3");
    audiokickbass.play();
    break;

    case "s":
    var audiotom1=new Audio("sounds/snare.mp3");
    audiotom1.play();
    break;

    case "d":
    var audiotom1=new Audio("sounds/tom-1.mp3");
    audiotom1.play();
    break;

    case "j":
    var audiotom2=new Audio("sounds/tom-2.mp3");
    audiotom2.play();
    break;

    case "k":
    var audiotom3=new Audio("sounds/tom-3.mp3");
    audiotom3.play();
    break;

    case "l":
    var audiotom4=new Audio("sounds/tom-4.mp3");
    audiotom4.play();
    break;
    default:console.log(buttoninnerHTML);

  }
}
function buttonAnamation(currentKey)
{
   var  activeButton =document.querySelector("."+ currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },100)
}

/**
js objects and classes /keyword this/constructors/event addEventListener
Note :1 which element- button select by query querySelector
2.when -mouse clicked or keyboard pressed(events)
3.what action-play sound and animations
***/
