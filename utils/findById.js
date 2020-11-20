/*
findById takes in an array and an id, and returns the (object)
item in the array that matches the given id
*/
export function findById(givenArray, givenId) {
    return givenArray.find(item => item.id === givenId);
}