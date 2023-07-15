let text = document.getElementById('text');
let leftFront = document.getElementById('leftFront');
let rightFront = document.getElementById('rightFront');
let backest = document.getElementById('backest');
// let rightBack = document.getElementById('rightBack');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    rightFront.style.left = value * 1 + 'px';
    leftFront.style.left = value * -1 + 'px';
    backest.style.top = value * 1 + 'px';
    // rightBack.style.left = value * -1 + 'px';

})
