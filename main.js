function preload(){
classifier=ml5.imageClassifier('DoodleNet')
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    background("white")
    canvas.mouseReleased(classifycanvas)
    syn=window.speechSynthesis
} 

function clearcanvas(){
    background("white")
}

function draw(){
    strokeWeight(10)
    stroke(0)
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
}

function classifycanvas(){
classifier.classify(canvas,gotresults)
}

function gotresults(error,result){
if(error){
console.error(error);
}
console.log(result)
document.getElementById("label").innerHTML="LABEL :"+result[0].label 
document.getElementById("confidence").innerHTML="CONFIDENCE :"+Math.round(result[0].confidence * 100)+"%"
utterthis=new SpeechSynthesisUtterance(result[0].label)
syn.speak(utterthis)
}

