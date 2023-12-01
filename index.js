document.addEventListener("DOMContentLoaded", function () {
    var symbolBoxes = document.querySelectorAll("#box div");
    symbolBoxes.forEach(function (box) {
        box.addEventListener("click", function () {
            copySymbol(box.textContent.trim());
        });
    });
});

function copySymbol(symbol) {
    document.getElementById("textInput").value = symbol;
}

function copyToClipboard() {
    var copyText = document.getElementById("textInput");

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            alert("Copied: " + copyText.value);
            console.log("Text copied to clipboard");
        })
        .catch(err => {
            console.error("Unable to copy text to clipboard", err);
        });
}
