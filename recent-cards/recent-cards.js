import { getLocalStorage } from '../utils/localStorage-utils.js';
import { CARDS } from '../utils/constants.js';
import { renderRecentCard } from '../utils/renderRecentCard.js'

const clearButton = document.querySelector('.clear-button');
var paragraph = document.getElementById('message');
const cardBack = document.querySelectorAll('.card-img')[1];

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