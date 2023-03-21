Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lCyl5f967/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_object_name").innerHTML = results[0].label;

        gesture = results[0].label;

        toSpeak = "";

        if (gesture == "Boa") {
            toSpeak = "PREENCHER";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#129305;";
        }
        else if (gesture == "Rock") {
            toSpeak = "PREENCHER";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#129304;";
        }
        else if (gesture == "Sofretii") {
            toSpeak = "PREENCHER";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128133;";
        }
        else if (gesture == "Joinha") {
            toSpeak = "PREENCHER";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
        }
        else if (gesture == "Paz") {
            toSpeak = "PREENCHER";
            document.getElementById("result_object_gesture_icon").innerHTML = "&#9996;";
        }
        speak();
    }
}


function speak() {
    var synth = window.speechSynthesis;

    speak_data = toSpeak;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

}
