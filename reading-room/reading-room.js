import { cardStack } from '../utils/card-stack.js';
import { clickHandler } from '../utils/clickHandler.js';

const cardDesc = document.getElementById('card-desc');
const refreshButton = document.querySelector('#refreshButton');

cardStack();

const onClick = (e) => {
    clickHandler();
    // removeEventListener only works if the function is _not_ anonymous
    deck.removeEventListener('click', onClick);
    e.target.classList.remove('top');

    cardDesc.textContent = 'click card below to reveal interpretation';
    refreshButton.style.visibility = 'visible';

    refreshButton.scrollIntoView({ behavior: 'smooth', duration: '10s' });

    const audio = document.querySelector('#audio-one');
    audio.volume = 0.1;
    audio.play();
};

const deck = document.querySelector('.card-img.top');

deck.addEventListener('click', onClick);

refreshButton.addEventListener('click', () => {
    window.location.reload();
});
