import './style.css';
import ninjas from './ninjas.json';

// HEADER TITLE
const title = document.createElement('header');
title.textContent = "I'M A NINJA";
title.className = 'main-title';
document.body.appendChild(title);

// MAIN SECTION
const ninjaSection = document.createElement('section');
ninjaSection.className = 'ninja-section';

// TEXT PANEL
const textContainer = document.createElement('div');
textContainer.className = 'text-container';

const ninjaTitle = document.createElement('h1');
ninjaTitle.className = 'ninja-title';

const ninjaText = document.createElement('p');
ninjaText.className = 'ninja-text';

textContainer.appendChild(ninjaTitle);
textContainer.appendChild(ninjaText);

// IMAGE
const ninjaImage = document.createElement('img');
ninjaImage.src = 'assets/images/little_substance.png';
ninjaImage.alt = 'Ninja Image';
ninjaImage.className = 'ninja-image';

ninjaSection.appendChild(textContainer);
ninjaSection.appendChild(ninjaImage);
document.body.appendChild(ninjaSection);

// SLIDE NUMBER
const slideNumber = document.createElement('div');
slideNumber.className = 'slide-number';
document.body.appendChild(slideNumber);

// BUTTONS
const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';

const prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.className = 'button';

const nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.className = 'button';

buttonContainer.appendChild(prevButton);
buttonContainer.appendChild(nextButton);
document.body.appendChild(buttonContainer);


// SLIDES
let slide = 0;

function updateSlide() {
    if (!ninjas.ninjas || ninjas.ninjas.length === 0) {
        console.error('No ninja data available.');
        return;
    }
     
    // update the title and text 
    ninjaTitle.textContent = ninjas.ninjas[slide].title;
    ninjaText.textContent = ninjas.ninjas[slide].text;

    slideNumber.textContent = String(slide + 1).padStart(2, '0');

    prevButton.disabled = slide === 0;
    nextButton.disabled = slide === ninjas.ninjas.length - 1;
}

prevButton.addEventListener('click', () => {
    if (slide > 0) {
        slide--;
        updateSlide();
    }
});

nextButton.addEventListener('click', () => {
    if (slide < ninjas.ninjas.length - 1) {
        slide++;
        updateSlide();
    }
});

updateSlide();
