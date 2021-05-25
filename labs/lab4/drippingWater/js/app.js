let dObj = {x:200, y:0, velocityY: 5}
yPositions = [10];
let gravity = .2;

function setup () {
    createCanvas(400,400);
}

function draw () {
    background(0);
    fill (191, 255, 255);

    // for(var i = 0; i < yPosition.length; i++) {
    //     circle(dObj.x, dObj.y, 10);
    //     dObj.y += dObj.velocityY;
    //     dObj.velocityY += gravity;
    // }

    circle(dObj.x, dObj.y, 10);
    dObj.y += dObj.velocityY;
    dObj.velocityY += gravity;

    if(yPositions > 10) {
        circle(dObj.x, dObj.y, 10);
    }

    // for(var i = 0; i > yPositions; i++) { 
    //     circle(dObj.x, yPositions[i], 10); 
        
    // }
}