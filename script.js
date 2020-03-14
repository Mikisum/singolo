const NAVIGATION = document.getElementById('navigation');

NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// let counter = 0;
// let interval = setInterval(function() {
//     document.querySelectorAll('.slider').forEach((phone_slide) => {
//         if (phone_slide.style.left === '-1020px') {
//             clearInterval(interval);
//             return;
//         }
//         counter -= 1;
//         phone_slide.style.left = `${counter}px`; 
//     });    
// }, 5);

const ARROW_LEFT = document.getElementById('left');
const ARROW_RIGHT = document.getElementById('right');
const SLIDER = document.getElementsByClassName('slider');

ARROW_LEFT.addEventListener('click', (event) => {
    let counter = 0;
    let interval = setInterval(function() {
        document.querySelectorAll('.slider').forEach((phone_slide) => {
            if (phone_slide.style.left === '-1020px') {
                clearInterval(interval);
                return;
            }
            counter -= 10;
            phone_slide.style.left = `${counter}px`; 
        });
    }, 1);
});

ARROW_RIGHT.addEventListener('click', (event) => {
    let counter = -1020;
    let interval = setInterval(function() {
        document.querySelectorAll('.slider').forEach((phone_slide) => {
            if (phone_slide.style.left === '0px') {
                clearInterval(interval);
                return;
            }
            counter += 10;
            phone_slide.style.left = `${counter}px`; 
        });
    }, 1);
});

