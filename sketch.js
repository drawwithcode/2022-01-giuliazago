// define the list colors
const colorList = ['#5e8044','#8c4e86','#ebb501',
'#c94517', '#ad8a75', '#354898'
];

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES); // Use degrees for rotations, not radiance
  frameRate(1.5);
  }

function draw() {
// create the grid
for (let x = 0; x < 800; x += 200) {
  for (let y = 0; y < 800; y += 200) {

// define the shape
  rect(x, y, 200,200);
  stroke('white');
  strokeWeight(0.3);

// fill the rectangles with a random color from the list
let colorName = random(colorList);
fill(color(colorName));
    }
  }

// create an ellipse in the center of each rectangle
push()
noStroke();
fill('#edcd38');
translate(100,100);
rotate(frameCount*500);
ellipse(0,0, 150, 130);
pop()

push()
noStroke();
fill('#d63318');
translate(300,100);
rotate(frameCount*800);
ellipse(4,0, 150, 130);
pop()

push()
noStroke();
fill('#2e3889');
translate(500,100);
rotate(frameCount*600);
ellipse(2,5, 150, 130);
pop()

push()
noStroke();
fill('#69295c');
translate(700,100);
rotate(frameCount*850);
ellipse(3,2, 150, 130);
pop()

push()
noStroke();
fill('#26303f');
translate(100,300);
rotate(frameCount*400);
ellipse(2,8, 150, 130);
pop()

push()
noStroke();
fill('#dd8b06');
translate(300,300);
rotate(frameCount*630);
ellipse(1,6, 150, 130);
pop()

push()
noStroke();
fill('#e26e4b');
translate(500,300);
rotate(frameCount*200);
ellipse(0,0, 150, 130);
pop()

push()
noStroke();
fill('#2c2a33');
translate(700,300);
rotate(frameCount*580);
ellipse(6,2, 150, 130);
pop()

push()
noStroke();
fill('#c75371');
translate(100,500);
rotate(frameCount*640);
ellipse(7,4, 150, 130);
pop()

push()
noStroke();
fill('#56836d');
translate(300,500);
rotate(frameCount*390);
ellipse(9,3, 150, 130);
pop()

push()
noStroke();
fill('#bc3918');
translate(500,500);
rotate(frameCount*580);
ellipse(5,6, 150, 130);
pop()

push()
noStroke();
fill('#5b806f');
translate(700,500);
rotate(frameCount*860);
ellipse(2,8, 150, 130);
pop()

// create two concentric circles in the center of each rectangle
const amount = 2
for (let i = 1; i <= amount; i++) {
  for (let x = 100; x < 800; x += 200) {
    for (let y = 100; y < 800; y += 200) {
  const elWidth = 40*i;
  const elHeight = 40*i

// define the shapes' color
push()
if(i == 1){
 fill('#ffffff');
 noStroke();
} else {
  noFill();
  stroke('black');
  strokeWeight(18);
}

// define the shape
ellipse(x,y, elWidth, elHeight);
pop()
      }
    }
  }

//stop the loop after a certain value of the frameCount
  if (frameCount == 8){
    noLoop();
}
}