const answer = document.getElementById("copyResult");
const copy = document.getElementById("copyButton");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("textToCopy")

copy.addEventListener('click', function (e) {
    range.selectNodeContents(textToCopy);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if (successful) {
        answer.innerHTML = 'Copied!';
    } else {
        answer.innerHTML = 'Unable to copy!';
    }
    window.getSelection().removeAllRanges()
});