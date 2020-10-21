//Timestamp function START
export function timeStampMaker() {

const timeStamp = new Date();

console.log(timeStamp);

    const year = timeStamp.getFullYear();
    let month = timeStamp.getMonth();
    const date = timeStamp.getDate();
    let day = timeStamp.getDay();

    console.log('The year is ' + year);
    console.log('The month is ' + month);
    console.log('The date is ' + date);
    console.log('The day is ' + day);

    if (day === 0) {
        day = 'Sun';
    } else if  (day === 1) {
        day = 'Mon';
    } else if (day === 2) {
        day = 'Tue';
    } else if  (day === 3) {
        day = 'Wed';
    } else if  (day === 4) {
        day = 'Thurs';
    } else if  (day === 5) {
        day = 'Fri';
    } else if  (day === 6) {
        day = 'Sat';
    }

    if (month === 0) {
        month = 'January';
    } else if  (month === 1) {
        month = 'February';
    } else if (month === 2) {
        month = 'March';
    } else if  (month === 3) {
        month = 'April';
    } else if  (month === 4) {
        month = 'May';
    } else if  (month === 5) {
        month = 'June';
    } else if  (month === 6) {
        month = 'July';
    } else if  (month === 7) {
        month = 'August';
    } else if (month === 8) {
        month = 'September';
    } else if  (month === 9) {
        month = 'October';
    } else if  (month === 10) {
        month = 'Novemeber';
    } else if  (month === 11) {
        month = 'December';
    }

    const displayDate = `This reading occured on ${day}, ${month} ${date}, ${year}.`;

console.log(displayDate);

return displayDate;

}
//Timestamp function END


/*
import { timeStampMaker } from './timestamp.js';

    const currentDate = timeStampMaker();

    const timeBox = document.createElement('div');
    timeBox.textContent = currentDate;


    container.append(img, title, interpretation, keywords, timeBox);
    anchor.append(container);
}
*/
