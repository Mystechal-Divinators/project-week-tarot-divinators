import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';

const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
const randomCard = nCards(spreadSelection);


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

//Get timestamp
const timeStamp = new Date();
console.log(timeStamp);

//Timestamp in milliseconds
const timeStamp2 = Math.floor(Date.now() / 1000);
console.log(timeStamp2);
