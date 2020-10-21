import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';
import { timestampMaker } from '../utils/timestamp.js'

const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
const randomCard = nCards(spreadSelection);
const currentDate = timestampMaker();

console.log(currentDate);

// go back to renderCard and update img src when added to data model
randomCard.forEach(card => {
    renderCard(card);
});

let localStorageCards = getLocalStorage(CARDS) || [];

for (let i = 0; i < randomCard.length; i++) {
    const oneCard = randomCard[i];

    oneCard.timestamp = currentDate;

console.log(oneCard);

    localStorageCards.push(oneCard);
}

setLocalStorage(CARDS, localStorageCards);