var str = 'Lorem <span class="copy_color">ipsum</span> dolor <span class="italic">sit</span> <span class="copy_color">amet, consectetur</span> adipiscing elit. Aliquam <span class="italic">convallis tellus ligula,</span> id malesuada <span class="copy_color">lacus posuere</span> non.';

function onAnimComplete() {
    console.log('fin');
}

function animElement(target, chunks, index, callback) {
    var letters = chunks[index].nodeName.toLowerCase() == '#text'
        ? chunks[index].nodeValue.split('')
        : chunks[index].innerHTML.split('');

    letters.forEach(function (letter, i) {
        (function () {
            var span = document.createElement('span');
            span.innerHTML = letter;
            span.classList.add('letter');
            if (chunks[index].className) span.className += ' ' + chunks[index].className;
            target.appendChild(span);

            setTimeout(function () {
                span.classList.add('anim');
            }, i * 100);
        })();
    });

    setTimeout(anim, letters.length * 100, target, chunks, ++index, callback);
}

function anim(target, chunks, index, callback) {
    if (index < chunks.length) {
        animElement(target, chunks, index, callback);
    } else {
        if (callback) callback.call();
    }
};

function initCopyAnim(string, target, callback) {
    var
        dummy = document.createElement('div'),
        chunks = [];

    dummy.innerHTML = string;
    chunks = dummy.childNodes;

    anim(target, chunks, 0, callback);
};

initCopyAnim(str, document.querySelector('.output'), onAnimComplete);