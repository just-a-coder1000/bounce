var canvas;
var music;
var plat1, plat2, plat3, plat4;
var square;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges = createEdgeSprites();

    plat1 = createSprite(690,590,200,10);
    plat1.shapeColor = 'red';

    plat2 = createSprite(470,590,200,10);
    plat2.shapeColor = 'orange';

    plat3 = createSprite(250,590,200,10);
    plat3.shapeColor = 'pink';

    plat4 = createSprite(30,590,200,10);
    plat4.shapeColor = 'limeGreen';

    square = createSprite(random(20,750),50,50,50);
    square.shapeColor = 'white';
    square.velocityX = 3;
    square.velocityY = 5;

}

function draw() {
    background('blue');

    square.bounceOff(edges);

    if (square.bounceOff(plat1)){
        square.shapeColor = 'red';
    }
    if(square.bounceOff(plat2)){
        square.shapeColor = 'orange';
        music.play();
    }
    if(square.bounceOff(plat3)){
        square.shapeColor = 'pink';
    }
    if(square.bounceOff(plat4)){
        square.shapeColor = 'chartreuse';
    }

    drawSprites()
}
