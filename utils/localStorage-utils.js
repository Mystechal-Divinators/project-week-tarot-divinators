/* 
getLocalStorage /gets/ a parsed item from localStorage when passed a key lookup
*/
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

/* 
setLocalStorage /sets/ an item into localStorage, ensuring it's a string
*/
export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}