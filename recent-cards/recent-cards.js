import { getLocalStorage } from '../utils/localStorage-utils.js';
import { CARDS } from '../utils/constants.js';
import { renderCard } from '../utils/renderCard.js';
import { timestampMaker } from '../utils/timestamp.js';


const clearButton = document.querySelector('.clear-button');
var paragraph = document.getElementById('message');

//NEW STUFF START -Franco
const currentDate = timestampMaker();

console.log(currentDate);

const anchor = document.querySelector('section');

function renderRecentCard(card) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    container.classList.add('card');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    interpretation.textContent = card.interpretation;
    keywords.textContent = card.keyWords;

    container.append(img, title, interpretation, keywords);
    anchor.append(container);
}
//NEW STUFF END -Franco






//create variable to hold card array from local storage
const recentCards = getLocalStorage(CARDS);
console.log(recentCards);

if (recentCards <= [0]) {
    console.log('You have no recent readings');
    paragraph.textContent = 'You have no recent readings. Please navigate back to home.';

} else { 

//loop to cut array down to 9 cards
    while (recentCards.length > 9) {
        recentCards.shift();
    }
    console.log(recentCards);

//loop to render cards in recentCards array
    for (let i = 0; i < recentCards.length; i++) {
        const oneRecentCard = recentCards[i];

        renderRecentCard(oneRecentCard);
    }
}



    
//Button to clear local storage. This button includes a console.log that will need to be removed later.
clearButton.addEventListener('click', () => {
    console.log('Clear button was clicked.');
    localStorage.clear();
  
    window.location.reload();
});




//    interpretation.classList.add('hide');
//    keywords.classList.add('cool');