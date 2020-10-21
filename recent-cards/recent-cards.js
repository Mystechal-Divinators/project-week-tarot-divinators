import { getLocalStorage } from '../utils/localStorage-utils.js'

const clearButton = document.querySelector('.clear-button')

/*
const recentCards = getLocalStorage(CARDS);
console.log(recentCards);

while (recentCards.length > 10) {
    recentCards.shift();
}

*/

//These are test arrays to test the noMoreThanTen() function
const array1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
const array2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
const array3 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
console.log(array1, array2, array3)


while (array3.length > 10) {
    array3.shift();
}

console.log(array3);


/* recents logic: checks length of localStorage array and splices it if it's over 10 items

limit the recent cards to 10 cards (on load, check localStorage and splice it if it's longer than 10 items)

then loop through renderCard using the localStorage array
*/

//get local storage *CHECK*
//check lengthy of array to see if it is over 10 items *CHECK*
////if over 10 item, remove the oldest/first until there are only 10 items (loop?) *CHECK*
//loop thru renderCard using localStorage array


//Button to clear local storage. This button includes a console.log that will need to be removed later.
clearButton.addEventListener('click', () => {
    console.log('Clear button was clicked.');
    localStorage.clear();
})





// List of potention JavaScript functions and other code \\

//function to get local storage (that has recent reading cards).

//function to render cards (that may have a findById function inside it).

//a loop that works with the renderCard function to render each card in local storage; maybe the renderCard function goes inside the loop.

