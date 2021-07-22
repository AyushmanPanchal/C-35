var ball, database;
var positions


function setup(){
    createCanvas(500,500);

    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locOfChild = database.ref("ball/positions")
    locOfChild.on("value", readPos, showerr) 
    
}

function draw(){
    background("white");
    if(positions!==undefined){
        if(keyDown(LEFT_ARROW)){
            writePositions(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePositions(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePositions(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePositions(0,+1);
        }
        drawSprites();

    }
    
}

function writePositions(x,y){
    database.ref("ball/positions").set({
        x: ball.x+x,
        y: ball.y+y
    })
}

function readPos(data){
    positions =  data.val();
    ball.x = positions.x;
    ball.y = positions.y;

}

function showerr(){
    console.log("Error"); 

}


