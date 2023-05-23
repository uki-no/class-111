var prediction_1= ""
var prediction_2= ""

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById('camera');
Webcam.attach('#camera');

function capture_s(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id=""cap_img" src="'+data_uri+'"/>'
    })
}

console.log("ml5 version=",ml5.version)

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2yJbfF9mx/model.json',modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function speak(){
 var synth= window.speechSynthesis
 speak_data_1='My first prediction is'+prediction_1
 speak_data_2='My second prediction is'+prediction_2
 var utterThis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
 synth.speak(utterThis)
}