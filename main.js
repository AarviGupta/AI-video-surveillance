video="";
status="";
objects=[];
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
canvas=createCanvas(600,380);
canvas.center();
}
function draw(){
image(video,0,0,600,380);
if(status!=""){
object.detect(video,gotResult);
for(i=0;i<objects.length;i++){

    document.getElementById("status").innerHTML="status: objects detected";
    document.getElementById("number_of_objects").innerHTML="number of objects detected are "+objects.length;
    fill("#ff0000");
    percent=floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+ "%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("#ff0000");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function start(){
    object=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}
function modelloaded(){
console.log("model loaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}
function gotResult(error,results){
if(error){
    console.error(error);
    }
    console.log(results);
    objects=results;
}
