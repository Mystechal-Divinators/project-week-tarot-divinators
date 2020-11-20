const anchor = document.querySelector('section');

/*
renderCard takes a card object, and generates an HTML card with:
a title (name), image, and an overlay div containing the card's keywords 
and indications
*/
export function renderCard(card) {
    const container = document.createElement('div');
    const frontContainer = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

    container.classList.add('card-container');
    frontContainer.classList.add('card');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    
    frontContainer.append(img, title);
    container.append(frontContainer);

    const colorBlock = document.createElement('div');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    colorBlock.classList.add('color-block');
    keywords.classList.add('keywords');
    interpretation.classList.add('interpretation');

    keywords.textContent = card.keyWords;
    interpretation.textContent = card.interpretation;

    colorBlock.addEventListener('click', () => {
        // 0 is falsey, so we can make a conditional block
        // nice condition!
        if (Number(colorBlock.style.opacity)) {
            colorBlock.style.opacity = 0;
        } else {
            colorBlock.style.opacity = 1;
            const audio = document.querySelector('#audio-two');
            audio.volume = 0.07;
            audio.play();
        }
    });
    colorBlock.append(keywords, interpretation);
    container.append(colorBlock);

    anchor.append(container);
}