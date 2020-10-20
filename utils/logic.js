import { majorArcana } from '..card-data.js';

/* 
getRandomCard takes in our data model (array) and returns
an object at a random index
*/
function getRandomCard(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

/*
isRepeat checks if the selected card object is inside a given array
*/
function isRepeat(obj, arr) {
    return Boolean(arr.find((item) => item === obj));
}

/*
nCards takes in a number and returns an array of that many (non-duplicating) 
cards needs to be fed with the raw card data array
*/
function nCards(n) {
    let arr = [];
    while (n > 0) {
        const nextCard = getRandomCard(majorArcana);

        // is true, card is a repeat; so retry the loop.
        if (isRepeat(nextCard, arr)) {
            continue;
        } else {
            // if false, card is not a repeat; so add to array:
            arr.push(nextCard);
            n--;
        }
    }
    return arr;
}