import { getLocalStorage } from '../utils/localStorage-utils.js';
import { CARDS } from '../utils/constants.js';
// import { renderCard } from '../utils/renderCard.js';
// import { timestampMaker } from '../utils/timestamp.js';

const clearButton = document.querySelector('.clear-button');
var paragraph = document.getElementById('message');
const anchor = document.querySelector('section');


/*
function renderRecentCard(card) {

    // NOTE TO FRANCO:
    // if you're following along in renderCard.js and importing those rules,
    // the only difference might be a classList name --
    // just ask me if it looks super weird on render

    const container = document.createElement('div');
    const oneCard = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    const currentDate = card.timestamp;

    const date = document.createElement('div');
    date.classList.add('timestamp');
    date.classList.add('hide');
    date.textContent = currentDate;

    oneCard.classList.add('card');
    container.classList.add('card-container');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    interpretation.textContent = card.interpretation;
    keywords.textContent = card.keyWords;

    img.classList.add('reveal');
    keywords.classList.add('box1');
    interpretation.classList.add('box2');

    oneCard.append(img, date, title, keywords, interpretation);
    container.append(oneCard);
    
    anchor.append(container);
}
*/



const cardBack = document.querySelectorAll('.card-img')[1];


export function renderRecentCard(card, cardBack) {
    const container = document.createElement('div');
    const frontContainer = document.createElement('div');
    // const backContainer = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

    const currentDate = card.timestamp;
console.log(currentDate);

    const date = document.createElement('div');
    date.classList.add('timestamp');
//    date.classList.add('hide');
    date.textContent = currentDate;

    title.classList.add('reveal');
    //keywords.classList.add('box1');
    //interpretation.classList.add('box2');


    container.classList.add('card-container');
    frontContainer.classList.add('card');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    
    frontContainer.append(img, title, date);
    container.append(frontContainer);

    // if (cardBack) {
    //     backContainer.append(cardBack);
    //     container.append(backContainer);
    // }

    // create a transparent div that becomes opaque on click
    // and contains the interpretation and keywords text
    const colorBlock = document.createElement('div');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    colorBlock.classList.add('color-block');
    keywords.classList.add('keywords');
    interpretation.classList.add('interpretation');

    keywords.textContent = card.keyWords;
    interpretation.textContent = card.interpretation;

    colorBlock.addEventListener('click', () => {
        // 0 is falsey, so we can make a conditional block
        if (Number(colorBlock.style.opacity)) {
            colorBlock.style.opacity = 0;
        } else {
            colorBlock.style.opacity = 1;
        }
    });
    
    colorBlock.append(keywords, interpretation);
    container.append(colorBlock);

    anchor.append(container);
}





//create variable to hold card array from local storage
const recentCards = getLocalStorage(CARDS);
// console.log(recentCards);

if (recentCards <= [0]) {
    // console.log('You have no recent readings');
    paragraph.textContent = 'You have no recent readings. Please navigate back to home.';

} else { 

//loop to cut array down to 9 cards
    while (recentCards.length > 9) {
        recentCards.shift();
    }
    // console.log(recentCards);

//loop to render cards in recentCards array
    for (let i = 0; i < recentCards.length; i++) {
        const oneRecentCard = recentCards[i];
        renderRecentCard(oneRecentCard, cardBack);
    }
}

//Button to clear local storage. This button includes a console.log that will need to be removed later.
clearButton.addEventListener('click', () => {
    // console.log('Clear button was clicked.');
    localStorage.clear();

    window.location.reload();
});