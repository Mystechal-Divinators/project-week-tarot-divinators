import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';
import { cardStack } from './card-stack.js';
import { timestampMaker } from '../utils/timestamp.js';


const cardDesc = document.getElementById('card-desc');
const refreshButton = document.querySelector('#refreshButton');
const currentDate = timestampMaker();

cardStack();

// dee's notes for setting up transition/animation
// grab the *second* card because the first and last have special styling/classes
const cardBack = document.querySelectorAll('.card-img')[1];

function clickHandler() {
    const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
    const randomCard = nCards(spreadSelection);

    randomCard.forEach(card => {
        // renderCard(card, cardBack.cloneNode());
        renderCard(card);
    });

    const generatedCards = document.getElementsByClassName('card');

    for (let i = 0; i < generatedCards.length; i++) {
        const card = generatedCards[i];
        card.style.opacity = 0;

        setTimeout(() => {
            card.style.opacity = 1;
        }, 800);
    }

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

    cardDesc.textContent = 'click card below to reveal interpretation';

    refreshButton.style.visibility = 'visible';


    const audio = document.querySelector('#audio-one');
    audio.volume = 0.1;
    audio.play();
    
};

const deck = document.querySelector('.card-img.top');

deck.addEventListener('click', onClick);


refreshButton.addEventListener('click', () => {
    // console.log('reset button was clicked.');
    window.location.reload();
});
