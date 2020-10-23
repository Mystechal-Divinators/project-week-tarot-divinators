import { renderCard } from './renderCard.js';
import { nCards } from './logic.js';
import { getLocalStorage, setLocalStorage } from './localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from './constants.js';
import { timestampMaker } from './timestamp.js';

const currentDate = timestampMaker();

/* 
clickHandler ... 
grabs our spreadSelection from localStorage;
generates _n_ cards (matching the number from localStorage);
renders _n_ cards;
initializes the fade-in transition for each generated card;
and adds each new card to localStorage in a loop, because randomCard is an array
*/
export function clickHandler() {
    const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
    const randomCard = nCards(spreadSelection);

    randomCard.forEach(card => {
        renderCard(card);
    });

    const generatedCards = document.getElementsByClassName('card');

    for (let i = 0; i < generatedCards.length; i++) {
        const card = generatedCards[i];
        card.style.opacity = 0;

        setTimeout(() => {
            // in order for the transition to trigger, the transition 
            // property must be set and then changed
            card.style.opacity = 1;
        });
    }
    let localStorageCards = getLocalStorage(CARDS) || [];
    
    for (let i = 0; i < randomCard.length; i++) {
        const oneCard = randomCard[i];
        oneCard.timestamp = currentDate;
        localStorageCards.push(oneCard);
    }   
    setLocalStorage(CARDS, localStorageCards);
}