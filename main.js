function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    fill("blue")
    circle(570, 430, 80);
    circle(570, 50, 80);
    circle(70, 50, 80);
    circle(70, 430, 80);
    fill("teal")
    rect(54, 89, 30, 302);
    rect(109, 415, 422, 30);
    rect(555, 89, 30, 302);
    rect(109, 38, 422, 30);
}

function draw(){
    image(video, 100, 85, 440, 310);
}

function take_snapshot(){
    save('pictureframe.png');
}

