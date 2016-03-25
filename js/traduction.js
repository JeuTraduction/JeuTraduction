/**
 * Created by Moncef on 25/03/2016.
 */


var baseUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=sourceLang&tl=targetLang&dt=t&q=sourceText";



var xmlhttp;

var treatTraaductionCallback = function()
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        var result = xmlhttp.responseText.substr(4);
        result = result.substr(0, result.indexOf("\""));
        //alert(result);

        //...
    }
}

function askForTraduction()
{
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    var url = baseUrl.replace("sourceLang", "fr");
    url = url.replace("targetLang", "en");
    url = url.replace("sourceText", encodeURI("bonjour"));

    xmlhttp.onreadystatechange=traiteTraaductionCallback;
    xmlhttp.open("GET", url, false );
    xmlhttp.send();
}


var verbesList;
function loadFile(file){

    var httpReq;

    if (window.XMLHttpRequest)
    {
        httpReq=new XMLHttpRequest();
    }
    else
    {
        httpReq=new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpReq.onreadystatechange=function () {
        if (httpReq.readyState==4 && httpReq.status==200)
        {
            verbesList = httpReq.responseText.split("\n");
            //alert(verbesList[0]);
        }
    };

    httpReq.open("GET", file, false );
    httpReq.send();

}

loadFile("./resources/verbes.txt");
askForTraduction();







