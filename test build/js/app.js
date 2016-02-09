// var body = document.getElementById("body"); 
var canvas = document.getElementById("mainCanvas"); 
var ctx = canvas.getContext('2d');
function drawMap(){
	console.log('fuck you, world');
}

var drawMap = function(){	
 var map = [
 	[1,0,1,1,0],
 	[1,0,1,0,1],
 	[1,1,1,0,0]
 ];


//var ctx = document.getElementById('mainCanvas').getContext('2d');

 for (i = 0; i < map.length; i++) {
        for (j = 0; j < map[i].length; j++) {
    
            // Check if the value is a 1, represeting a graphic should be drawn.
            if (map[i][j] === 1) {
                // Draw a rectangle at i & j position * 20 pixels so that
                // our 20x20 pixel squares are correctly positioned.
                ctx.fillStyle = '#FF0000';
                ctx.fillRect(j * 20, i * 20, 20, 20);
            }
    
        }
    }
}

// var newSprite = function(sprite, width, height){
// 	canvas.addChild
// }

document.body.on('load', drawMap());