//incomplete
function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);

function getRandom(range) {
  return Math.floor(Math.random() * range);
}

function changeColour() {
  let rndCol = 'rgb(' + getRandom(255) + ',' + getRandom(255) + ',' + getRandom(255) + ')';
  return rndCol;
}


// create and return a div with style
function createStyledBox(style, myNum = -1) {
  let b = document.createElement("div");
  b.classList.add(style);
  b.innerHTML = "<p>" + myNum + "</p>"; // should use createElement("p")...

  return b;
}

// draw num boxes inside a div 
function drawBoxes(selector, num = 10) {
  let container = document.querySelector(selector);

  for (let i = 0; i < num; i++) {
    let box = createStyledBox("boxes-style", i);
    // append to container

    /* can change the style here */
    box.style.backgroundColor = changeColour();

    container.appendChild(box);
  }
}
drawBoxes("#timestable", 100); /* changed to 100 */
const timeField = document.querySelector("p#theTime"); // p#theTime

// window timer event
var myTimerEvt = setInterval(myTimer, 1000); // 1 second

function myTimer() {
  var d = new Date();
  timeField.innerHTML = d.toLocaleTimeString();
}


const bStart = document.querySelector("#btnStart");
const bStop = document.querySelector("#btnStop");

const btn1 = document.querySelector('#btnStop');
btn1.addEventListener("click", stopTime);

const btn2 = document.querySelector('#btnStart');
btn2.addEventListener("click", startTime);

//* animateTimer */
var animateTimer;

function startTime() {
  if (!animateTimer) { // check that myTimerEvt is cleared
    animateTimer = setInterval(doAnimate, 100); // .1 second
    
  }
}
function doAnimate(){
  const boxCollection = document.querySelectorAll("#timestable div");

  for (let i = 0; i < boxCollection.length; i++) {
    var randomL = Math.random() * 100;
    var randomT = Math.random() * 100;
    // animate each item
    boxCollection[i].style.left = randomL+"px";
    boxCollection[i].style.top = randomT+"px";
    }
}

function stopTime() {
  stopAnimate();
  clearInterval(animateTimer);

  animateTimer = null; // clear
}
function stopAnimate() {
  const boxCollection = document.querySelectorAll("#timestable div");

  for (let box of boxCollection ) {
  box.style.left = "0px"; // return to origin
  box.style.top = "0px";
  }
}