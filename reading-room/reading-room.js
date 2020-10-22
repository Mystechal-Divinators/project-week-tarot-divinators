import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';
import { timestampMaker } from '../utils/timestamp.js';

const currentDate = timestampMaker();

function clickHandler() {
    const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
    const randomCard = nCards(spreadSelection);

    randomCard.forEach(card => {
        renderCard(card);
    });
    
    // const generatedCards = document.getElementsByClassName('card');

    // generatedCards[0].classList.add('animation-one');
    // generatedCards[1].classList.add('animation-two');
    // generatedCards[2].classList.add('animation-three');
    
    let localStorageCards = getLocalStorage(CARDS) || [];
    
    for (let i = 0; i < randomCard.length; i++) {
        const oneCard = randomCard[i];
        oneCard.timestamp = currentDate;
        localStorageCards.push(oneCard);
    }
    
    setLocalStorage(CARDS, localStorageCards);
}

const onClick = () => {
    clickHandler();
    deck.removeEventListener('click', onClick);
};

const deck = document.querySelector('img');

deck.addEventListener('click', onClick);

