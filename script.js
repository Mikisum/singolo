document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const links = document.querySelectorAll('.navigation a');
    
    document.querySelectorAll('section').forEach( el => {

        if (el.offsetTop - 100 <= curPos && (el.offsetTop + el.offsetHeight - 100) > curPos) {
            links.forEach(a => {
                a.classList.remove('active');
                if (el.firstElementChild.getAttribute('name') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active'); 
                }
            })
        }

    }); 
}

// Slider. Переключение слайдов

const ARROW_LEFT = document.getElementById('left');
const ARROW_RIGHT = document.getElementById('right');
const SLIDER = document.getElementsByClassName('slider');
SLIDER[0].style.flexDirection = 'row';
let counter = 0;

ARROW_LEFT.addEventListener('click', (event) => {
    if (counter === -document.body.clientWidth) {
        counter = 0;

        if (SLIDER[0].style.flexDirection === 'row') {
            SLIDER[0].style.flexDirection = 'row-reverse';
        }else SLIDER[0].style.flexDirection = 'row';

        document.querySelectorAll('.slider').forEach((phone_slide) => {
            phone_slide.style.left = `${counter}px`;
        });
    }

    if (counter === 0) {
        let interval = setInterval(function() {
            document.querySelectorAll('.slider').forEach((phone_slide) => {
                if (phone_slide.style.left === `-${document.body.clientWidth}px`) {
                    clearInterval(interval);
                    return;
                }
                counter -= 1;
                phone_slide.style.left = `${counter}px`; 
            });
        }, 1);
    }
});

ARROW_RIGHT.addEventListener('click', (event) => {

    if (counter === 0) {
        counter = -document.body.clientWidth;
        if (SLIDER[0].style.flexDirection === 'row') {
            SLIDER[0].style.flexDirection = 'row-reverse';
        }else SLIDER[0].style.flexDirection = 'row';

        document.querySelectorAll('.slider').forEach((phone_slide) => {
            phone_slide.style.left = `${counter}px`;
        });
    }

    if (counter === -document.body.clientWidth) {
        let interval = setInterval(function() {
            document.querySelectorAll('.slider').forEach((phone_slide) => {
                if (phone_slide.style.left === '0px') {
                    clearInterval(interval);
                    return;
                }
                counter += 1;
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
    GALLERY.querySelectorAll('li').forEach(img => img.style.order = Math.floor(Math.random() - 0.5));
    
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

let modalForm = document.getElementById('form');
let modal = document.getElementById('modal');
let modalSubject = document.getElementById('modal-subject');
let modalDescription = document.getElementById('modal-description');
let modalButton = document.getElementById('modal_button'); 

modalSubject.innerHTML = '';
modalDescription.innerHTML = '';


document.getElementById('submit').addEventListener('click', (event) => {
    if (document.getElementById('name').checkValidity()) {
        if (document.getElementById('email').checkValidity()) {
            event.preventDefault();
            let subject = document.getElementById('subject').value;
            subject = subject === '' ? 'Without subject' : 'Subject: ' + subject;
            let description = document.getElementById('description').value;
            description = description === '' ? 'Without description' : 'Description: ' + description;
            
            modalSubject.innerHTML = subject;
            modalDescription.innerHTML = description;
            modal.style.display = 'block';
        }
    }
});

modalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});








