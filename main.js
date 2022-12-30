status_model = "";
video = "";


    

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

}