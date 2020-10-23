import { ONE_OR_THREE } from './utils/constants.js';
import { setLocalStorage } from './utils/localStorage-utils.js';

const beginButton = document.getElementById('beginButton');

beginButton.addEventListener('click', () => {
    const oneOrThree = document.querySelector(':checked');

    // set local storage with the value we get from the selected option
    setLocalStorage(ONE_OR_THREE, oneOrThree.value);
});