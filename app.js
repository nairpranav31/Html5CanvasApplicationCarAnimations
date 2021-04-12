const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const moveCarUp = document.getElementById('moveCarUp');
moveCarUp.addEventListener("click", upCar, drawCar);

const moveCarDown = document.getElementById('moveCarDown');
moveCarDown.addEventListener("click", downCar, drawCar);

const moveCarRight = document.getElementById('moveCarRight');
moveCarRight.addEventListener("click", incrementCar, drawCar);

const moveCarLeft = document.getElementById('moveCarLeft');
moveCarLeft.addEventListener("click", decrementCar, drawCar);

document.onkeydown = checkKey;


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      upCar();
        // up arrow
    }
    else if (e.keyCode == '40') {
      downCar();
        // down arrow
    }
    else if (e.keyCode == '37') {
      decrementCar();
       // left arrow
    }
    else if (e.keyCode == '39') {
      incrementCar();
       // right arrow
    }

}

var xr1 = 375
var yr1 = 150

var xr2 = 300
var yr2 = 225

var xa1 = 375
var ya1 = 300

var xa2 = 525
var ya2 = 300

function clearScrn() {
  // ctx.globalCompositeOperation = 'destination-out'
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function decrementCar () {
  console.log("Function decrementCar accessed");
  xr1 = xr1 - 5;
  xr2 = xr2 - 5;
  xa1 = xa1 - 5;
  xa2 = xa2 - 5;
  clearScrn();
  drawCar();
}

function upCar () {
  console.log("Function decrementCar accessed");
  yr1 = yr1 - 5;
  yr2 = yr2 - 5;
  ya1 = ya1 - 5;
  ya2 = ya2 - 5;
  clearScrn();
  drawCar();
}

function downCar () {
  console.log("Function decrementCar accessed");
  yr1 = yr1 + 5;
  yr2 = yr2 + 5;
  ya1 = ya1 + 5;
  ya2 = ya2 + 5;
  clearScrn();
  drawCar();
}

function incrementCar () {
  console.log("Function incrementCar accessed");
  xr1 = xr1 + 5;
  xr2 = xr2 + 5;
  xa1 = xa1 + 5;
  xa2 = xa2 + 5;
  clearScrn();
  drawCar();
}

drawCar()

  function drawCar() {

    console.log("car drawn");
    
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(xr1,yr1,150,75);
    
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xr2,yr2,300,75);

    ctx.beginPath();

    ctx.fillStyle = "#000000"
    ctx.arc(xa1, ya1, 40, 3.14, 0, true)
    ctx.fillStyle = "#000000"
    ctx.arc(xa2, ya2, 40, 3.14, 0, true)

    ctx.closePath();

    ctx.fill();
  }
