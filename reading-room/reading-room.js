import { renderCard } from '../utils/renderCard.js';
// import { majorArcana } from '../card-data.js';

/*
the card array is a placeholder for now;
the end goal is to generate nCards from
our raw majorArcana data model
*/
const card = {
    name: 'title',
    id: 'placeholder',
    interpretation: 'interpretation',
};
console.log(card);
console.log(card);

/*
renderCard function runs on page load
using placeholder images and data for now
it'll be rendered with a .forEach() loop
it'll be dependent on the user selection from the home page
^ this will be grabbed from localStorage

*/
renderCard(card);
renderCard(card);
renderCard(card);

/*
we'll have to pull ONE_OR_THREE from localStorage, parse it and convert it to a number
we'll save thisValue to a variable
then call nCards(thisValue) to generate /thisValue/ (one or three) random and non-duplicating cards
nCards returns an array of cards
we'll use renderCard to loop through this array (using a .forEach()) to render cards to the page
*/
