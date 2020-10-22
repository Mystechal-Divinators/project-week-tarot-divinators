const anchor = document.querySelector('section');

/*
renderCard function takes a card object, and generates an HTML card with:
a title (name), image, and an interpretation appended in a div below it
*/
export function renderCard(card, cardBack) {
    const container = document.createElement('div');
    const frontContainer = document.createElement('div');
    // const backContainer = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

    container.classList.add('card-container');
    frontContainer.classList.add('card');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    
    frontContainer.append(img, title);
    container.append(frontContainer);

    // if (cardBack) {
    //     backContainer.append(cardBack);
    //     container.append(backContainer);
    // }

    // create a transparent div that becomes opaque on click
    // and contains the interpretation and keywords text
    const colorBlock = document.createElement('div');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    colorBlock.classList.add('color-block');

    interpretation.textContent = card.interpretation;
    keywords.textContent = card.keyWords;

    colorBlock.addEventListener('click', e => {
        // 0 is falsey, so we can make a conditional block
        if (Number(colorBlock.style.opacity)) {
            e.target.style.opacity = 0;
        } else {
            e.target.style.opacity = 1;
        }
    });
    colorBlock.append(interpretation, keywords);
    container.append(colorBlock);

    anchor.append(container);
}