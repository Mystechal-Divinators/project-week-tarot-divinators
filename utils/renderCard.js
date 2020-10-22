const anchor = document.querySelector('section');

/*
renderCard function takes a card object, and generates an HTML card with:
a title (name), image, and an interpretation appended in a div below it
*/

/*
<div class="card"> 
    <img src="https://placekitten.com/200/300" alt="">
    <p>title</p>
    <div>
        interpretation
    </div>
</div>
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


    //
    // EXPERIMENT: interpretation styling
    // create a transparent div that becomes opaque on click
    // and contains the interpretation and keywords text
    const colorBlock = document.createElement('div');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    // translate these styling tests to a css class
    colorBlock.style.width = '240px';
    colorBlock.style.height = '425px';
    colorBlock.style.backgroundColor = 'red';

    container.style.position = 'relative';
    colorBlock.style.position = 'absolute';
    colorBlock.style.top = 0;
    colorBlock.style.opacity = 0;
    colorBlock.style.borderRadius = '12px';
    colorBlock.style.transition = '0.5s ease-in-out';

    interpretation.textContent = card.interpretation;
    keywords.textContent = card.keyWords;

    // will need to align the text better with more testing

    colorBlock.addEventListener('click', e => {
        // 0 is falsey
        // so this sets it up to become transparent (opacity 0) if it's opaque
        if (Number(colorBlock.style.opacity)) {
            e.target.style.opacity = 0;
        } else {
            // and this sets it up to become opaque (opacity 1) if it's transparent
            e.target.style.opacity = 1;
        }
    });
    colorBlock.append(interpretation, keywords);
    container.append(colorBlock);
    // END EXPERIMENT
    //

    anchor.append(container);
}