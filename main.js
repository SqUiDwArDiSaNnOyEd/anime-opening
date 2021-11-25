var mha = 0;
var m_h_a = 0;
var Ded_not = 0;
var ren_cir = 0;
var deal_devil = 0;
var guren = 0;
var background_noise = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7c-qYhbou/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "The Day"){
            imgsrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wJTUVUTvG3gBwyvTOZe2EOyRJFECGXDAcQ&usqp=CAU";
            mha = mha+1;
            document.getElementById("detected").innerHTML = "Detected The Day - "+ mha;
        }
        else if(results[0].label == "Odd Future"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wJTUVUTvG3gBwyvTOZe2EOyRJFECGXDAcQ&usqp=CAU"
            m_h_a = m_h_a+1;
            document.getElementById("detected").innerHTML = "Detected Odd Future - "+ m_h_a;
        }
        else if(results[0].label == "The World"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRt3jmKdfUb_5z3uaOT68ETQmuQ5eUuTbpA&usqp=CAU"
            Ded_not = Ded_not+1;
            document.getElementById("detected").innerHTML = "Detected The World - "+ Ded_not;
        }
        else if(results[0].label == "Renai Circulation"){ 
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdH43_DQ6-3w3soG5QZG7mRQf2jx-f_l-7w&usqp=CAU";
            ren_cir = ren_cir+1;
            document.getElementById("detected").innerHTML = "Detected Renai Circulation - "+ ren_cir;
        }

        else if(results[0].label == "Deal with the Devil"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1e166dGZkqjbKDO_sRzVPXrFE61rK07kWaQ&usqp=CAU";
            deal_devil = deal_devil+1;
            document.getElementById("detected").innerHTML = "Detected Deal with the Devil - "+ deal_devil;
        }

        else if(results[0].label == "Guren No Yumia"){
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6VGHVmzusyXUgn1oYxXhS869FWTVbIVW7w&usqp=CAU"
            guren = guren+1;
            document.getElementById("detected").innerHTML = "Detected Guren No Yumia"+ guren;
        }
        else{
            img.src = "";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}