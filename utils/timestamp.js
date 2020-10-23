/*
timeStampMaker ...
*/
export function timestampMaker() {
    const timestamp = new Date();

    const day = timestamp.toDateString();
    const time = timestamp.toLocaleTimeString();

    const displayDate = `This reading occured on ${day}, ${time}.`;

    return displayDate;
}