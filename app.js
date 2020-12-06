var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#inputTxt");
var outputTxt = document.querySelector("#outputTxt");

var serverURL = "https://api.funtranslations.com/translate/minion.json/"

function clickHandler() {
    console.log("Clicked");
    outputTxt.innerText = "asjklg " + inputTxt.value;
};

btnTranslate.addEventListener("click", clickHandler);