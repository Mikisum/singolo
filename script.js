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
//  Humburger menu

document.getElementById('hamburger_button').addEventListener('click', function() {
    document.getElementById('hamburger_button').classList.toggle('hamburger-active');
    document.querySelector('.navigation-mobile').classList.toggle('navigation-active');
});

let items = document.querySelectorAll('.slider .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('item-active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('item-active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.arrow-left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.arrow-right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

//  Slider. Активация экранов телефонов

const BUTTON_VERTICAL = document.getElementById('button_vertical');
const BUTTON_HORIZONTAL = document.getElementById('button_horizontal');

display_vertical.style.display = 'none';
display_horizontal.style.display = 'none';

BUTTON_VERTICAL.addEventListener('click', (event) => {
    if (display_vertical.style.display === 'none') {
        display_vertical.style.display = 'block';
    }
    else {
        display_vertical.style.display = 'none';
    }
});

BUTTON_HORIZONTAL.addEventListener('click', (event) => {
    if (display_horizontal.style.display === 'none') {
        display_horizontal.style.display = 'block';
    }
    else {
        display_horizontal.style.display = 'none';
    }
});

// Portfolio. Переключение табов

const FILTER = document.getElementById('filter');

FILTER.addEventListener('click', (event) => {
    FILTER.querySelectorAll('.tag').forEach(el => el.classList.remove('tag-selected'));
    event.target.classList.add('tag-selected');
    GALLERY.querySelectorAll('li').forEach(img => img.style.order = Math.floor(Math.random() - 0.5));
    
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
    document.getElementById('form').reset();
});








