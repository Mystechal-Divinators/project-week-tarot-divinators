/*
renderRecentCard takes a card object, and generates an HTML card with:
a title (name), image, and an overlay div containing the card's keywords 
and indications as well as a timestamp on hover
*/ 
export function renderRecentCard(card) {
    const anchor = document.querySelector('section');
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

    // create a transparent div that becomes opaque on click
    // and contains the interpretation and keywords text
    const colorBlock = document.createElement('div');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');
    const date = document.createElement('div');
    const currentDate = card.timestamp;

    colorBlock.classList.add('color-block');
    colorBlock.classList.add('reveal');
    keywords.classList.add('keywords');
    interpretation.classList.add('interpretation');
    date.classList.add('timestamp');
    date.classList.add('hide');

    keywords.textContent = card.keyWords;
    interpretation.textContent = card.interpretation;
    date.textContent = currentDate;

    colorBlock.addEventListener('click', () => {
        // 0 is falsey, so we can make a conditional block
        if (Number(colorBlock.style.opacity)) {
            colorBlock.style.opacity = 0;
        } else {
            colorBlock.style.opacity = 1;
        }
    });
    colorBlock.append(keywords, interpretation);
    container.append(colorBlock, date);

    // For the sake of testing and pue functions, I would have liked to see this return the anchor, then do the mutation in the file that calls this function.
    anchor.append(container);
}