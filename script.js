
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//code to get the current date ; used in yearGen, ageCalc
let today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

//code to determine if a year is bissextile ; used in dayGen
let isBissextil = (year) => {
  if((year%4 == 0 && year% 100 !== 0) || year%400 == 0) {
      return "Bissextil";
  } else {
      return "!Bissextil";
  }
}

//code & arrays used to create the days, months, years droplists

//code to generate an array of 100 years from the current year ; used in arrYear
let yearGen = () => {
    let tempArr = [];
    for (let i = currentYear ; i > currentYear - 100 ; i --){
        tempArr.push(i);
    }
    return tempArr;
}

//array containing 100 years from the current one ; used to fill the year droplist content
let arrYear = yearGen();

//code to generate an array of 12 month ; used in arrMonth
let monthGen = () => {
    let tempArr = [];
    for (let i = 0; i < 12 ; i ++){
        tempArr.push(i+1);
    }
    return tempArr;
}

//Array containing 12 months ; used to fill the month droplist content
let arrMonth = monthGen();

//code to generate an array of 12 month ; used in arrMonth
let dayGen = () => {
    let tempArr = [];
    for (let i = 0; i < 12 ; i ++){
        tempArr.push(i+1);
    }
    return tempArr;
}

//Array containing 12 months ; used to fill the month droplist content
let arrDay = dayGen();

//code to generate an array conaining 28 to 31 days ; used in arrDay
//To check
// let dayGen = () => {
//     let tempArr = [];
//     if (document.getElementById("myMonth").value === 4 || document.getElementById("myMonth").value === 6 || document.getElementById("myMonth").value === 9 || document.getElementById("myMonth").value ===11){ //regular month of 30 days
//         for (let i = 0; i < 30 ; i ++){
//             tempArr.push(i+1);
//         }
//     } else if ( document.getElementById("myMonth").value === 2) { //February
//         if (isBissextil(document.getElementById("myYear").value) == true) {//february - leap year
//             for (let i = 0; i < 28 ; i ++){
//                 tempArr.push(i+1);
//             }
//         } else { //february + leap year
//             for (let i = 0; i < 29 ; i ++){
//                 tempArr.push(i+1);
//             }
//         }
//     } else { //regular month of 31 days
//         for (let i = 0; i < 31 ; i ++){
//             tempArr.push(i+1);
// } Snipped the "if" portion to test with a simple 31 days array
//     }
//     return tempArr;
// }

let yearList = document.getElementById("myYear")
//Create and append the options for yearList
for (let i = 0; i < arrYear.length; i++) {
    let option = document.createElement("option");
    option.value = arrYear[i];
    option.text = arrYear[i];
    yearList.appendChild(option);
}

let monthList = document.getElementById("myMonth")
//Create and append the options for monthList
for (let i = 0; i < arrMonth.length; i++) {
    let option = document.createElement("option");
    option.value = arrMonth[i];
    option.text = arrMonth[i];
    monthList.appendChild(option);
}

let dayList = document.getElementById("myday")
// Create and append the options for dayList
for (let i = 0; i < arrDay.length; i++) {
    let option = document.createElement("option");
    option.value = arrDay[i];
    option.text = arrDay[i];
    dayList.appendChild(option);
}

//code to calculate the age
let ageCalc = () => {
    let trueAge = 0;
    //code to acquire the input values with the droplists ; desired method
    let bDay = parseInt(document.getElementById("myDay").value);
    let bMonth = parseInt(document.getElementById("myMonth").value);
    let bYear = parseInt(document.getElementById("myYear").value);
    //code to acquire the input values through inputs ; control method
      // let bDay = parseInt(document.getElementById("day").value);
      // let bMonth = parseInt(document.getElementById("month").value);
      // let bYear = parseInt(document.getElementById("year").value);
    //code to determine wether the birthday already occured this year
    if (currentMonth !== bMonth) {
        if (currentMonth > bMonth) {
            trueAge = currentYear - bYear;
            document.getElementById('yourAge').innerText = trueAge + " ans";
        } else {
            trueAge = currentYear - bYear - 1;
            document.getElementById('yourAge').innerText = trueAge + " ans";
        }
    } else if (currentMonth === bMonth) {
        if (currentDay < bDay) {
              trueAge = currentYear - bYear - 1;
              document.getElementById('yourAge').innerText = trueAge + " ans";
        } else {
              trueAge = currentYear - bYear;
              document.getElementById('yourAge').innerText = trueAge + " ans";
        }
    }
}

//temporary code to
document.getElementById('ageButton').addEventListener('click', () => ageCalc());//control version ; on click
