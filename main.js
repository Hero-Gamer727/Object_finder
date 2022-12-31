status_model = "";
video = "";
objects = []

    

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createVideo('video.mp4');
    video.hide();
}


function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    value_text = document.getElementById('object_input').value;
}

function modelLoaded(){
    console.log("Model is Loaded!");
     status_model = true;
}

function draw(){
    image(video,0,0,480,380)
    if (status_model != ""){
        objectDetector.detect(video, gotResults);
        for (i=0;i< objects.length; i++){
            document.getElementById("status").innerHTML="Status: Objects Detected";
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + ""+ percent+"%",objects[i].x + 15, objects[i].y+ 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    
    }

}

function gotResults(error, results){
    if (error){
        console.error(error)
    } else{
        console.log(results)
        objects = results
    }
}