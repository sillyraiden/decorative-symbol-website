document.addEventListener("DOMContentLoaded", function () {
    var symbolBoxes = document.querySelectorAll("#box div");
    symbolBoxes.forEach(function (box) {
        box.addEventListener("click", function () {
            copyToClipboard(box.textContent.trim());
        });
    });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied: " + text);
            console.log("Text copied to clipboard");
        })
        .catch(err => {
            console.error("Unable to copy text to clipboard", err);
        });
}
