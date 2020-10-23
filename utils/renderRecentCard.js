export function renderRecentCard(card, cardBack) {
    const anchor = document.querySelector('section');
    const container = document.createElement('div');
    const frontContainer = document.createElement('div');
    // const backContainer = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');

//console.log(container);

    const currentDate = card.timestamp;

    const date = document.createElement('div');
    date.classList.add('timestamp');
    date.classList.add('hide');
    date.textContent = currentDate;

//    container.classList.add('reveal');
//    frontContainer.classList.add('reveal');
//    img.classList.add('reveal');
//    title.classList.add('reveal');


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
    keywords.classList.add('keywords');
    interpretation.classList.add('interpretation');

    keywords.textContent = card.keyWords;
    interpretation.textContent = card.interpretation;

    colorBlock.addEventListener('click', () => {
        // 0 is falsey, so we can make a conditional block
        if (Number(colorBlock.style.opacity)) {
            colorBlock.style.opacity = 0;
        } else {
            colorBlock.style.opacity = 1;
        }
    });
    
    colorBlock.classList.add('reveal');
console.log(colorBlock);
console.log(date);

    colorBlock.append(keywords, interpretation);
    container.append(colorBlock, date);

    anchor.append(container);
}
