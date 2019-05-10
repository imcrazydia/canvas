let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

let i = 12;

function thanos() {

    //ear
context.beginPath();
context.arc(80,210,50,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(204, 0, 255, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(204, 0, 255, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(204, 0, 255, 0)";
} else {
context.fillStyle = "rgb(204, 0, 255)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//ear
context.beginPath();
context.arc(320,210,50,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(204, 0, 255, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(204, 0, 255, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(204, 0, 255, 0)";
} else {
context.fillStyle = "rgb(204, 0, 255)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Body
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(204, 0, 255, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(204, 0, 255, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(204, 0, 255, 0)";
} else {
context.fillStyle = "rgb(204, 0, 255)";
context.stroke();
}
context.fill();
context.lineWidth=1;

//chin line 1
context.moveTo(190,350);
context.lineTo(195,200);
context.lineWidth=3;
context.stroke();

//chin line 2
context.moveTo(230,345);
context.lineTo(210,200);
context.lineWidth=3;
context.stroke();

//chin line 3
context.moveTo(270,331);
context.lineTo(220,200);
context.lineWidth=3;
context.stroke();

//chin line 4
context.moveTo(150,340);
context.lineTo(180,200);
context.lineWidth=3;
context.stroke();

//EyeLid
context.beginPath();
context.arc(130,130,50,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(204, 0, 255, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(204, 0, 255, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(204, 0, 255, 0)";
} else {
context.fillStyle = "rgb(204, 0, 255)";
context.stroke();
}
context.fill();
context.lineWidth=2;


//Eye
context.beginPath();
context.arc(130,130,50,0,1*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(0, 0, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(0, 0, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(0, 0, 0, 0)";
} else {
context.fillStyle = "rgb(0, 0, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//EyeLid
context.beginPath();
context.arc(290,130,50,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(204, 0, 255, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(204, 0, 255, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(204, 0, 255, 0)";
} else {
context.fillStyle = "rgb(204, 0, 255)";
context.stroke();
}
context.fill();
context.lineWidth=2;


//Eye
context.beginPath();
context.arc(290,130,50,0,1*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(0, 0, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(0, 0, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(0, 0, 0, 0)";
} else {
context.fillStyle = "rgb(0, 0, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Mouth
context.beginPath();
context.arc(210,200,60,0,1*Math.PI);
context.closePath();
context.fillStyle = "white";
context.fill();
context.lineWidth=2;
context.stroke();

//chin line 4
context.moveTo(157,227);
context.lineTo(262,227);
context.lineWidth=2;
context.stroke();

//gauntlet thumb-bottom
context.beginPath();
context.rotate(15 * Math.PI / 180);
context.rect(400,190,50,100);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();


//gauntlet thumb-top
context.beginPath();
context.rotate(-12 * Math.PI / 180);
context.rect(350,240,50,35);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();


//gauntlet middle up
context.beginPath();
if (i == 5 || i == 6 || i == 7) {
    context.rotate(-95 * Math.PI / 180);
    context.rect(-245,250,40,120);
} else {
context.rotate(-70 * Math.PI / 180);
context.rect(-110,330,40,120);
}
if (i < 3 || i > 7) {
    context.fillStyle = "rgb(230, 138, 0 , 0)";
} else if (i == 3) {
context.fillStyle = "#e68a00";
}
context.fill();
if (i == 3 || i == 4 || i == 5 || i == 6 || i == 7 ) {
context.stroke();
}



//gauntlet base
context.beginPath();
if (i == 5 || i == 6 || i == 7) {
context.rotate(95 * Math.PI / 180);
} else {
context.rotate(70 * Math.PI / 180);
}
context.rect(180,250,160,190);
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();


//gauntlet pointer
context.beginPath();
context.rotate(0 * Math.PI / 180);
context.rect(300,160,40,90);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();

//gauntlet Middle
context.beginPath();
context.rotate(0 * Math.PI / 180);
if (i == 0 || i >= 10 ) {
context.rect(260,160,40,90); 
} else if (i == 1 || i == 9) {
context.rect(260,190,40,60);
} else if (i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8 ) {
context.rect(260,220,40,30);
}
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();

//gauntlet Ring
context.beginPath();
context.rotate(0 * Math.PI / 180);
if (i == 0 || i >= 10) {
context.rect(220,160,40,90);
} else if (i > 0) {
context.rect(220,190,40,60);
} 
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();


//gauntlet Pink
context.beginPath();
context.rotate(0 * Math.PI / 180);
if (i == 0 || i >= 10) {
context.rect(180,160,40,90);
} else if (i > 0) {
context.rect(180,190,40,60);
}
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(230, 138, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(230, 138, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(230, 138, 0, 0)";
} else {
context.fillStyle = "rgb(230, 138, 0)";
context.stroke();
}
context.fill();


//Green stone
context.beginPath();
context.arc(365,330,15,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(0, 204, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(0, 204, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(0, 204, 0, 0)";
} else {
context.fillStyle = "rgb(0, 204, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Purple stone
context.beginPath();
context.arc(322,280,15,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(153, 0, 204, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(153, 0, 204, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(153, 0, 204, 0)";
} else {
context.fillStyle = "rgb(153, 0, 204)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Blue stone
context.beginPath();
context.arc(280,280,15,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(0, 0, 255, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(0, 0, 255, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(0, 0, 255, 0)";
} else {
context.fillStyle = "rgb(0, 0, 255)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Red stone
context.beginPath();
context.arc(240,280,15,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(255, 0, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(255, 0, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(255, 0, 0, 0)";
} else {
context.fillStyle = "rgb(255, 0, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Orange stone
context.beginPath();
context.arc(200,280,15,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(255, 102, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb(255, 102, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(255, 102, 0, 0)";
} else {
context.fillStyle = "rgb(255, 102, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;


//Yellow stone
context.beginPath();
context.arc(260,350,30,0,2*Math.PI);
context.closePath();
if (i == 11) {
    context.fillStyle = "rgb(255, 255, 0, 0.6)";
    context.stroke();
} else if (i == 12) {
    context.fillStyle = "rgb255, 255, 0, 0.4)";
    context.stroke();
} else if (i == 13) {
    context.fillStyle = "rgb(255, 255, 0, 0)";
} else {
context.fillStyle = "rgb(255, 255, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;



//Snap effect
context.beginPath();
if (i == 4) {
 context.arc(375,245,32,0,2*Math.PI);
} else if (i == 5) {
 context.arc(375,245,50,0,2*Math.PI);
} else if (i == 6) {
 context.arc(375,245,70,0,2*Math.PI);
} else if (i == 7) {
 context.arc(375,245,600,0,2*Math.PI);  
}
context.closePath();
if (i == 4) {
 context.fillStyle = "rgb(255, 255, 255, 0.9)";
} else if (i == 5) {
 context.fillStyle = "rgb(255, 255, 255, 0.5)";
} else if (i == 6) {
 context.fillStyle = "rgb(255, 255, 255, 0.3)";
}  else if (i > 6 ){
 context.fillStyle = "rgb(255, 153, 51, 0)";
}
context.fill();
context.lineWidth=1;

//Erased
context.beginPath();
context.arc(200,280,1000,0,2*Math.PI);
context.closePath();
if (i == 13) {
    context.fillStyle = "rgb(255, 255, 255)";
    context.stroke();
} else {
context.fillStyle = "rgb(255, 102, 0, 0)";
context.stroke();
}
context.fill();
context.lineWidth=1;

}

thanos();

 i = 0;
setInterval( function() {
    
    context.clearRect (0, 0, 600, 600);
    context.resetTransform();
    thanos();

    i++;

    if (i == 14) {
        i = 0;
    }
}, 350); 