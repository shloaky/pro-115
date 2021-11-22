
function preload(){
    mustach = loadImage('https://postimg.cc/vDT9FbMF')
    }
    
    function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose_net = ml5.poseNet(video,modelloaded);
    pose_net.on('pose',gotpose); 
    }
    
    function gotpose(results){
    if (results.length > 0){
        console.log(results);
        console.log("stache x = "+results[0].stache.nose.x);
        console.log("stache y = "+results[0].stache.nose.y);
        console.log("stache x = "+ stacheX);
        console.log("stache y = "+ stacheY);
    }
    }
    
    function modelloaded(){
        console.log('posenet is initialized');
    }
    
    function draw(){
    image(video,0,0,300,300);
    fill(255,0,0)
    stroke(255.0,0)
    circle(stacheX,stacheY,20);
    image(mustache, stacheX, stacheY,30,30);
    }
    function takephoto(){
        save('mustache.png');
    }
    