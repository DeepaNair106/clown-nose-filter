xPosition = 0;
yPosition = 0;


function preload(){
    img = loadImage("https://i.postimg.cc/kg0Hwspf/red-nose.png");
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' ,gotPoses);

}

function draw(){
    image(video , 0,0, 300,300);

dropdown = document.getElementById("dropdown").value;
value = eval(dropdown);
if(value == BLUR||value == POSTERIZE){
    filter(value,7);
}else{
    filter(value);
}
     
    image(img , xPosition,yPosition,30,30);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y);
        xPosition = results[0].pose.nose.x -15;
        yPosition = results[0].pose.nose.y -15;

    }

}

function take_snapshot(){
    save('MyImage.png');
}


    



