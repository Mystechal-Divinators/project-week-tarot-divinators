// cardStack clones the deck back img on an offset
export function cardStack() {
    const cardBack = document.querySelector('.card-back');
    // when you set the parent's position to relative and the child's position to absolute, 
    // any additional positioning will be done relative to the parent element
    cardBack.style.position = 'relative';

    const img = cardBack.firstElementChild;
    const nImgs = 5;

    for (let i = 0; i < nImgs; i++) {
        // creates a shallow clone
        const clone = img.cloneNode(); 
        clone.style.position = 'absolute';

        // offsets each clone so that it looks like a slightly spread deck
        const offset = i * 10;
        clone.style.bottom = toPx(offset / 2);
        clone.style.right = toPx(offset);

        // the last clone we add is at the top
        // giving it a class to be able to select the top card elsewhere
        if (i + 1 === nImgs) {
            clone.classList.add('top');
        }
        cardBack.append(clone);
    }
}

function toPx(size) {
    return `${size}px`;
}
