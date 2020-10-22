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
    const backContainer = document.createElement('div');
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
    const colorBlock = document.createElement('div');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

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

    colorBlock.addEventListener('click', e => {
        if (Number(e.target.style.opacity)) {
            e.target.style.opacity = 0;
        } else {
            e.target.style.opacity = 1;
        }
    });

    colorBlock.append(interpretation, keywords);
    container.append(colorBlock);
    // END EXPERIMENT
    //


    anchor.append(container);
}