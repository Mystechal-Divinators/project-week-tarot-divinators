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

export function renderCard(card) {
    const container = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('p');
    const interpretation = document.createElement('div');
    const keywords = document.createElement('div');

    const timeStamp = new Date();
//    const timeBox = document.createElement('section');
console.log(timeStamp);

    const year = timeStamp.getFullYear();
    const month = timeStamp.getMonth();
    const date = timeStamp.getDate();
    let day = timeStamp.getDay();

    if (day === 0) {
console.log('Sunday')
        day = 'Sun';
    } else if  (day === 1) {
console.log('Monday')
        day = 'Mon';
} else if (day === 2) {
console.log('Tuesday')
        day = 'Tue';
    } else if  (day === 3) {
console.log('Wednesday')
        day = 'Wed';
    } else if  (day === 4) {
console.log('Thursday')
        day = 'Thurs';
} else if  (day === 5) {
    console.log('Friday')
        day = 'Fri';
} else if  (day === 6) {
    console.log('Saturday')
        day = 'Sat';
}

console.log('The year is ' + year);
console.log('The month is ' + month);
console.log('The date is ' + date);
console.log('The day is ' + day);
console.log('This reading occured on ' + day + ' ' + month + ' ' + date + ' ' + year);



//    timeBox.textContent = timeStamp;



container.classList.add('card');
    img.src = `../assets/major-arcana/${card.id}.png`;
    title.textContent = card.name;
    interpretation.textContent = card.interpretation;
    keywords.textContent = card.keyWords;
    
    container.append(img, title, interpretation, keywords);
    anchor.append(container);
}
