// import { renderCard } from '../utils/renderCard.js';
import { nCards } from '../utils/logic.js';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage-utils.js';
import { ONE_OR_THREE, CARDS } from '../utils/constants.js';

const anchor = document.querySelector('section');

function renderCard(card) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    container.classList.add('card');
    // container.classList.add('animation');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    interpretation.textContent = card.interpretation;
    keywords.textContent = card.keyWords;
    
    container.append(img, title, interpretation, keywords);
    anchor.append(container);
}

function clickHandler() {
    const spreadSelection = Number(getLocalStorage(ONE_OR_THREE));
    const randomCard = nCards(spreadSelection);

    randomCard.forEach(card => {
        renderCard(card);
    });

    const generatedCards = document.getElementsByClassName('card');

    generatedCards[0].classList.add('animation-one');
    generatedCards[1].classList.add('animation-two');
    generatedCards[2].classList.add('animation-three');
    
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


// need to figure out how to disable click handler after one click