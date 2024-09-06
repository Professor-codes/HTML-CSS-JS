let d = new Date();
const box = document.querySelector('.box');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

box.textContent = d.getDate();

function daysInThisMonth() {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

leftArrow.addEventListener('click', decreaseValue);
rightArrow.addEventListener('click', increaseValue);

function decreaseValue() {
    if (box.textContent > 1) {
        box.textContent -= 1;
    } else {
        limitAnim();
    }
}

function increaseValue() {
    if (box.textContent < daysInThisMonth()) {
        box.textContent = parseInt(box.textContent) + 1;
    } else {
        limitAnim();
    }
}

function limitAnim() {
    if (box.classList.contains('shake-horizontal')) {
        return
    } else {
        box.classList.add("shake-horizontal");
        box.addEventListener('animationend', e => {
            e.target.classList.remove('shake-horizontal');
        });
    }
}