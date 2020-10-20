const clearButton = document.querySelector('.clear-button')




// List of potention JavaScript functions and other code \\

//function to get local storage (that has recent reading cards).

//function to render cards (that may have a findById function inside it).

//a loop that works with the renderCard function to render each card in local storage; maybe the renderCard function goes inside the loop.




//Button to clear local storage. This button includes a console.log that will need to be removed later.
clearButton.addEventListener('click', () => {
    console.log('Clear button was clicked.');
    localStorage.clear();
})