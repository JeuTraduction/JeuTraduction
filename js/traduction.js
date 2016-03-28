/**
 * Created by pro on 25/03/2016.
 */


var baseUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=en&dt=t&q=sourceText";

var word, traduction;
var score;
var win = false;
var xmlhttp;

var instructionsDiv
    , gameDiv
    , wordNode
    , lengthOfTraduction
    , scoreNode
    , responseDiv
    , traductionInput
    , correcteResponseDiv
    , correcteResponse
    , loseDiv
    , winDiv;


var treatTraaductionCallback = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = xmlhttp.responseText.substr(4);
        traduction = result.substr(0, result.indexOf("\""));


        initTraduction();
    }
}


function askForTraduction() {
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    var url = baseUrl.replace("sourceText", encodeURI(word));

    xmlhttp.onreadystatechange = treatTraaductionCallback;
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}


var verbesList;
function loadFile(file) {

    var httpReq;

    if (window.XMLHttpRequest) {
        httpReq = new XMLHttpRequest();
    }
    else {
        httpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {
            verbesList = httpReq.responseText.split("\n");
            //alert(verbesList[0]);
        }
    };

    httpReq.open("GET", file, false);
    httpReq.send();

}

function randomWord() {
    var random = Math.floor((Math.random() * verbesList.length) + 1);
    return verbesList[random];
}

loadFile("./resources/verbes.txt");


function findWordAndTraduction() {
    word = randomWord();
    document.getElementById("word").innerHTML = word;
    askForTraduction();
}

function startGame() {

    instructionsDiv = document.getElementById("instructionsDiv");
    gameDiv = document.getElementById("gameDiv");
    wordNode = document.getElementById("word");
    lengthOfTraduction = document.getElementById("lengthOfTraduction");
    scoreNode = document.getElementById("score");
    responseDiv = document.getElementById("responseDiv");
    traductionInput = document.getElementById("traduction");
    correcteResponseDiv = document.getElementById("correcteResponseDiv");
    correcteResponse = document.getElementById("correcteResponse");
    loseDiv = document.getElementById("loseDiv");
    winDiv = document.getElementById("winDiv");

    findWordAndTraduction();

    instructionsDiv.classList.add("hidden");
    gameDiv.classList.remove("hidden");
    loseDiv.classList.add("hidden");
    winDiv.classList.add("hidden");

    setScore(10);
}


function setScore(s) {
    score = s;
    scoreNode.innerHTML = score;
}

function initTraduction() {

    lengthOfTraduction.innerHTML = traduction.length;
    traductionInput.value = traduction[0];
    correcteResponse.innerHTML = traduction;
}

function validate() {
    var response = traductionInput.value;
    if (response == traduction) {
        setScore(score + 1);
        continueGame();
    }
    else {

        setScore(score - 1);
        showCorrecteResponse();
    }

}

function continueGame() {
    if (testFin())
        EndOfGame();
    else {
        findWordAndTraduction();
    }
}

function showResponseDiv() {
    responseDiv.classList.remove("hidden");
    correcteResponseDiv.classList.add("hidden");
    continueGame();
}
function showCorrecteResponse() {
    responseDiv.classList.add("hidden");
    correcteResponseDiv.classList.remove("hidden");
}

function testFin() {
    if (score >= 20) {
        win = true;
        return true;
    }
    else {
        if (score == 0) {
            win = false;
            return true;
        }
        else {
            return false;
        }
    }
}

function EndOfGame() {
    if (win) {
        winDiv.classList.remove("hidden");
    }
    else {
        loseDiv.classList.remove("hidden");
    }
    gameDiv.classList.add("hidden");
}

function traductionChange() {
    var tr = traductionInput;
    if (tr.value.length == 0) {
        traductionInput.value = traduction[0];
    }
    if (tr.value.length > traduction.length) {
        tr.value = tr.value.substr(0, traduction.length);
    }
}








