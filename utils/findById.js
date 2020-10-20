export function findById(givenArray, givenId) {
    return givenArray.filter((item) => item.id === givenId)[0];
}