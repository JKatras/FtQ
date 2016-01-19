// var body = document.getElementById("body"); 
var canvas, hex;

var draw = function(){
	var canvas = document.getElementById("mainCanvas");
        if (canvas.getContext){
          var ctx = canvas.getContext('2d');
        }else{
        	body.insert("");
        }

}

document.body.on('load', draw());