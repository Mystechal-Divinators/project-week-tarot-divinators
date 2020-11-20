import { getLocalStorage } from '../utils/localStorage-utils.js';
import { CARDS } from '../utils/constants.js';
import { renderRecentCard } from '../utils/renderRecentCard.js';

const clearButton = document.querySelector('.clear-button');
const paragraph = document.getElementById('message');
const cardBack = document.querySelectorAll('.card-img')[1];

//create variable to hold card array from local storage
const recentCards = getLocalStorage(CARDS);

if (recentCards <= [0]) {
    paragraph.textContent = 'You have no recent readings. Please navigate back to home.';
} else { 
//loop to cut array down to 9 cards
    while (recentCards.length > 9) {
        recentCards.shift();
    }
//loop to render cards in recentCards array
    for (let i = 0; i < recentCards.length; i++) {
        const oneRecentCard = recentCards[i];
        renderRecentCard(oneRecentCard, cardBack);
    }
}

//button to clear local storage.
clearButton.addEventListener('click', () => {
    localStorage.clear();

    window.location.reload();
});
