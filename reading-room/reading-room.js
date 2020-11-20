import { cardStack } from '../utils/card-stack.js';
import { makeAndRenderCards } from '../utils/makeAndRenderCards.js';

const cardDesc = document.getElementById('card-desc');
const refreshButton = document.querySelector('#refreshButton');

cardStack();

const onClick = (e) => {
    // nice way to separate processes! would have liked to see a more explicit name, since onClick is technically the click handler.
    makeAndRenderCards();
    // removeEventListener only works if the function is _not_ anonymous
    deck.removeEventListener('click', onClick);
    e.target.classList.remove('top');

    cardDesc.textContent = 'click card below to reveal interpretation';
    
    refreshButton.style.visibility = 'visible';
    refreshButton.scrollIntoView({ behavior: 'smooth' });

    const audio = document.querySelector('#audio-one');
    audio.volume = 0.1;
    audio.play();
};

const deck = document.querySelector('.card-img.top');

deck.addEventListener('click', onClick);

refreshButton.addEventListener('click', () => {
    window.location.reload();
});
