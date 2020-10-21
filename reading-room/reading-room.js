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

// randomCard is an array, so pushing it into an array doesn't work correctly
localStorageCards.push(randomCard);

setLocalStorage(CARDS, localStorageCards);