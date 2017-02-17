// Built using Codepen tutorial https://codepen.io/P3R0/pen/MwgoKv

// Grabs element from the DOM and sets up canvas context to 2D
let c = document.querySelector('#matrix');
let ctx = c.getContext('2d');

// Resizes the height of the canvas to the height of the screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// Placeholder for future scraper results
let baronFig = "BARONFIGBARONFIGBARONFIG";
baronFig = baronFig.split('');

// Sets fonts and creates columns based on font size
let fontSize = 10;
let columns = c.width/fontSize;

let drops = [];

// For each column it sets up a drop on 1st pixel
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Creates the canvas draw function
function draw() {
  // Fills the canvas with a color of dark purple and fills it inside the Rect
  ctx.fillStyle = "rgba(37,13,24,.07)";
  ctx.fillRect(0, 0, c.width, c.height);

  // Sets the font color, size, and font style
  ctx.fillStyle = '#fbbc00';
  ctx.font = fontSize + 'px arial';

  // For each value in the drop array
  for(let y = 0; y < drops.length; y++) {
    // Take the baron fig text, randomize the order and drop it.
    let text = baronFig[Math.floor(Math.random()*baronFig.length)];
    ctx.fillText(text, y*fontSize, drops[y]*fontSize);

    // Once the text has dropped to the bottom, have it go back to
    // the top of the y axis as a random point and drop again
    if(drops[y]*fontSize > c.height && Math.random() > 0.975)
      drops[y] = 0;

    drops[y]++;
  }
}

setInterval(draw, 40);
