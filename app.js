var btnTranslate = document.querySelector("#btnToTranslate");
var txtInput = document.querySelector("#Input-txt");
var txtOutput = document.querySelector("#output-txt")

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function clickHandler() {
    // txtOutput.innerText = "sdjjnc " + txtInput.value;
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;

        })
}

btnTranslate.addEventListener("click", clickHandler)