var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#inputTxt");
var outputTxt = document.querySelector("#outputTxt");

var serverURL = "https://api.funtranslations.com/translate/minion.json/"

function getTranslateURL(input) {
    return serverURL + "?" + "text=" +input;
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("something went wrong with server! Please try again after sometime");
}

function clickHandler() {
    var input = inputTxt.value;

    fetch(getTranslateURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputTxt.innerText = translatedText;
    }).catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);