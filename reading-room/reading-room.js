import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';

const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
const randomCard = nCards(spreadSelection);

// go back to renderCard and update img src when added to data model
randomCard.forEach(card => {
    renderCard(card);
});

let localStorageCards = getLocalStorage(CARDS) || [];

for (let i = 0; i < randomCard.length; i++) {
    const oneCard = randomCard[i];
    localStorageCards.push(oneCard);
}

setLocalStorage(CARDS, localStorageCards);


//Get timestamp
const timeStamp = new Date();
console.log(timeStamp);

//Timestamp in milliseconds
const timeStamp2 = Math.floor(Date.now() / 1000);
console.log(timeStamp2);
