import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';
import { cardStack } from './card-stack.js';
import { timestampMaker } from '../utils/timestamp.js';

const currentDate = timestampMaker();

cardStack();

// dee's notes for setting up transition/animation
// grab the *second* card because the first and last have special styling/classes
const cardBack = document.querySelectorAll('.card-img')[1];

function clickHandler() {
    const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
    const randomCard = nCards(spreadSelection);

    randomCard.forEach(card => {
        renderCard(card, cardBack.cloneNode());
    });
    
    const generatedCards = document.getElementsByClassName('card');
    
    let localStorageCards = getLocalStorage(CARDS) || [];
    
    for (let i = 0; i < randomCard.length; i++) {
        const oneCard = randomCard[i];
        oneCard.timestamp = currentDate;
        localStorageCards.push(oneCard);
    }
    
    setLocalStorage(CARDS, localStorageCards);
}

const onClick = (e) => {
    clickHandler();
    deck.removeEventListener('click', onClick);
    e.target.classList.remove('top');
};

const deck = document.querySelector('.card-img.top');

deck.addEventListener('click', onClick);

