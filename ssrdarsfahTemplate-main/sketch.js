var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(288,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(496,580,200,30);
    block3.shapeColor = "purple";

    block4 = createSprite(703,580,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 5
    ball.velocityY = 5
}

function draw() {
    background(rgb(200,200,200));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball)){
        ball.shapeColor = "blue";
        ball.velocityX = 5
        ball.velocityY = 5
        ball.boumceOff(block1)
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 5
        ball.velocityY = 5
        ball.bounceOff(block2)
        //write code to stop music
    }

    //write code to bounce off ball from the block3
    if(block3.isTouching(ball)){
        ball.shapeColor = "purple";
        ball.velocityX = -5
        ball.velocityY = 5
        ball.bounceOff(block3)
    }
    //write code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        ball.shapeColor = "yellow";
        ball.velocityX = 5
        ball.velocityY = 5
        ball.bounceOff(block4)
    }
    drawSprites();
}
