var Ball;
var position;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    Ball = createSprite(250,250,10,10);
    Ball.shapeColor = "red";
    var Ballposition = database.ref("ball/position")
    Ballposition.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    else if(keyDown(SHIFT)){
        writePosition(0,+10);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
'x': position.x + x,
'y': position.y + y
    })
    
}
function readPosition(data)
{
    position = data.val();
    Ball.x = position.x;
    Ball.y = position.y;
     
}