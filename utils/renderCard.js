const anchor = document.querySelector('section');

// renderCard function takes a card object, and generates an HTML card with:
// a title (name), image, and an interpretation appended in a div below it

/*
<div class="card"> 
    <img src="https://placekitten.com/200/300" alt="">
    <p>title</p>
    <div>
        interpretation
    </div>
</div>
*/

export function renderCard(card) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const interpretation = document.createElement('div');

    container.classList.add('card');
    // img.src = `${card.id}.png`;
    img.src = "https://placekitten.com/200/300";
    title.textContent = card.name;
    interpretation.textContent = card.interpretation;
    
    container.append(img, title, interpretation);
    anchor.append(container);
}