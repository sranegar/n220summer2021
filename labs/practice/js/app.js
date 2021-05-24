let h = 50; // X offset
let kl = 100; //Vertical Shift
let pol = .1; //Angle (period)
let r = 10; //scaler
let j = 5; //circle spacing


function setup() {
createCanvas(400, 400);

}

function draw()  {
fill(255,0,0);
background(220);

//draws a sine curve
for(let i = 0; i < 50; i++) { //increase circle on x axis by 1 49 times
  let zf = Math.sin(i * pol) * r; //y location
  circle(i * j + h, zf + kl, 20); //(0*10)+50, sf+100  //incrase x axis to the right, y axis 
}

zf = kl + 1; 

}


