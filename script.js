const NAVIGATION = document.getElementById('navigation');

NAVIGATION.addEventListener('click', (event) => {
    NAVIGATION.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// Slider. Переключение слайдов

const ARROW_LEFT = document.getElementById('left');
const ARROW_RIGHT = document.getElementById('right');
const SLIDER = document.getElementsByClassName('slider');

let counter = 0;

ARROW_LEFT.addEventListener('click', (event) => {

    if (counter === 0) {
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
    }
    if (counter === -1020) {
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
    }
});

ARROW_RIGHT.addEventListener('click', (event) => {

    if (counter === -1020) {
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
    }
    if (counter === 0) {
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
    }
});

//  Slider. Активация экранов телефонов

const BUTTON_VERTICAL = document.getElementById('button_vertical');
const BUTTON_HORIZONTAL = document.getElementById('button_horizontal');

display_vertical.style.visibility = 'hidden';
display_horizontal.style.visibility = 'hidden';

BUTTON_VERTICAL.addEventListener('click', (event) => {
    if (display_vertical.style.visibility === 'hidden') {
        display_vertical.style.visibility = 'visible';
    }
    else {
        display_vertical.style.visibility = 'hidden';
    }
});

BUTTON_HORIZONTAL.addEventListener('click', (event) => {
    if (display_horizontal.style.visibility === 'hidden') {
        display_horizontal.style.visibility = 'visible';
    }
    else {
        display_horizontal.style.visibility = 'hidden';
    }
});

// Portfolio. Переключение табов

const FILTER = document.getElementById('filter');

FILTER.addEventListener('click', (event) => {
    FILTER.querySelectorAll('.tag').forEach(el => el.classList.remove('tag-selected'));
    event.target.classList.add('tag-selected');
    GALLERY.querySelectorAll('img').forEach(img => img.style.order = Math.floor(Math.random() - 0.5));
    
    // let elements = GALLERY.childNodes;
    // for (let i = 0; i < elements.length; i++) {
    //     GALLERY.appendChild(elements[i]);
    // }
});



// Portfolio. Взаимодействие с картинками

const GALLERY = document.getElementById('gallery');

GALLERY.addEventListener('click', (event) => {
    GALLERY.querySelectorAll('img').forEach(el => el.classList.remove('item_active'));
    event.target.classList.add('item_active');  
});

// Get a quote

document.getElementById('submit').addEventListener('click', (event) => {
    if (document.getElementById('name').checkValidity()) {
        if (document.getElementById('email').checkValidity()) {
            event.preventDefault();
            let subject = document.getElementById('subject').value;
            subject = subject === '' ? 'Without subject' : 'Subject: ' + subject;
            let description = document.getElementById('description').value;
            description = description === '' ? 'Without description' : 'Description: ' + description;
            let message = 'The letter was sent \n'+subject+'\n'+description;
            alert(message);

        }
    }
});








