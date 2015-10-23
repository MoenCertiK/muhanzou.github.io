var c = document.getElementById("my-canvas"),
    ctx = c.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight,
    pr = window.devicePixelRatio || 1;

c.width = width*pr;
c.height = height*pr;
ctx.scale(pr, pr);
ctx.globalAlpha = 0.6;

var pointer,
    colors = ["#ffa62f", "#f660ab", "98ff98", "#43c6db", "1589ff", "5c5858", "c36241", "c48189", "#8e35bf", "ff0000", "#7fffd4", "#ffff00", "#00ff00"];

function factor(param) {
  if(param < 0) {
    return 0.1;
  } else if(param > height) {
    return 0.9;
  } else {
    return 0.5;
  }
}

function paint() {
  initialY = Math.random()*height;
  pointer = [{x: 0, y: initialY+20}, {x: 0, y: initialY-20}];
  ctx.clearRect(0,0,width,height);
  var x, y;
  while(pointer[1].x < width) {
    ctx.beginPath();
    ctx.moveTo(pointer[0].x, pointer[0].y);
    ctx.lineTo(pointer[1].x, pointer[1].y);
    x = pointer[1].x+Math.random()*50;
    y = pointer[1].y+(Math.random()-factor(pointer[1].y))*100;
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.fillStyle = colors[Math.floor(Math.random()*14)];
    ctx.fill();
    pointer[0] = pointer[1];
    pointer[1] = {x: x, y: y};
  };

};
document.onclick = paint;
paint();
