import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE } from '../utils/constants.js';

const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
const randomCard = nCards(spreadSelection);

// go back to renderCard and update keywords and img src when added to data model
randomCard.forEach(card => {
    renderCard(card);
});
