//Timestamp function START
export function timestampMaker() {

    const timestamp = new Date();
    const day = timestamp.toDateString();
    const time = timestamp.toLocaleTimeString();

        console.log(day);
        console.log(time);
    

    const displayDate = `This reading occured on ${day}, ${time}.`;
    console.log(displayDate);

    return displayDate;

}