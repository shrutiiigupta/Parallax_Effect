let text = document.getElementById('text');
let leftFront = document.getElementById('leftFront');
let rightFront = document.getElementById('rightFront');
let backest = document.getElementById('backest');
// let rightBack = document.getElementById('rightBack');
let cloudr = document.getElementById('cloudr');
let cloudrlow = document.getElementById('cloudrlow');
let cloudleft = document.getElementById('cloudleft');
let cloudlow = document.getElementById('cloudlow');
let cloudm = document.getElementById('cloudm');
let clouds = document.getElementById('clouds');

window.addEventListener('scroll',() => {
    let value = window.scrollY;
    if(value< 1000){
        text.style.marginTop = value * 2.5 + 'px';
        rightFront.style.left = value * 1 + 'px';
        leftFront.style.left = value * -1 + 'px';
        backest.style.top = value * 1 + 'px';
    }
    
    // rightBack.style.left = value * -1 + 'px';

})
window.addEventListener('scroll',() => {
    let value = window.scrollY;
    if(value > 1000 && value< 2000){
        cloudlow.style.top = value * -1.5 + 'px';
        // rightFront.style.left = value * 1 + 'px';
        // leftFront.style.left = value * -1 + 'px';
        // backest.style.top = value * 1 + 'px';
    }
    
    // rightBack.style.left = value * -1 + 'px';

})
