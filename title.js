if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = ["A", "AU", "AUR", "AURU", "AURUM", "AURUM C", "AURUM CO", "AURUM COI", "AURUM COIN", "AURUM COI", "AURUM CO", "AURUM C", "AURUM", "AURU", "AUR", "AU", "A"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
