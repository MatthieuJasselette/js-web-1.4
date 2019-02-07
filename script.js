
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
      return true;
  } else {
      return false;
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

//arrays containing years, months, days ; used to fill each droplist content
let arrDay = [];
let arrMonth = [];
let arrYear = yearGen();

//code to generate an array of 12 month ; used in arrMonth
let monthGen = () => {
    arrMonth = [];
    for (let i = 0; i < 12 ; i ++){
        arrMonth.push(i+1);
    }
    monthList.style.display = 'block';
    return arrMonth;
}

//code to generate an array conaining 28 to 31 days ; used in arrDay
//To check
let dayGen = (month, year) => {
    arrDay = [];
    dayList.style.display = 'block';
    let shortMonth = [4, 6, 9, 11]
    if (month == 4 || month == 6 || month == 9 || month == 11){ //regular month of 30 days
        for (let i = 0; i < 30 ; i ++){
            arrDay.push(i+1);
        }
    } else if (month == 2) { //February
        if (isBissextil(year) == true) {//february - leap year
            for (let i = 0; i < 29 ; i ++){
                arrDay.push(i+1);
            }
        } else { //february + leap year
            for (let i = 0; i < 28 ; i ++){
                arrDay.push(i+1);
            }
        }
    } else { //regular month of 31 days
        for (let i = 0; i < 31 ; i ++){
            arrDay.push(i+1);
        }
    }
    return arrDay;
}

let yearList = document.getElementById("myYear")
//Create and append the options for yearList
for (let i = 0; i < arrYear.length; i++) {
    let option = document.createElement("option");
    option.value = arrYear[i];
    option.text = arrYear[i];
    yearList.appendChild(option);
}
yearList.addEventListener('click', () => {monthGen(); appendMonth()});

let monthList = document.getElementById("myMonth")
monthList.style.display = "none";
//Create and append the options for monthList ; must be in a fct to be called after the page loads
let appendMonth = () => {
    monthList.innerHTML = '';
    for (let i = 0; i < arrMonth.length; i++) {
    let option = document.createElement("option");
    option.value = arrMonth[i];
    option.text = arrMonth[i];
    monthList.appendChild(option);
  }
}
monthList.addEventListener('click', () => {dayGen(document.getElementById("myMonth").value, document.getElementById('myYear').value); appendDay()});

let dayList = document.getElementById("myDay")
dayList.style.display = "none";
// Create and append the options for dayList
let appendDay = () => {
    dayList.innerHTML = '';
    for (let i = 0; i < arrDay.length; i++) {
        let option = document.createElement("option");
        option.value = arrDay[i];
        option.text = arrDay[i];
        dayList.appendChild(option);
    }
}
dayList.addEventListener('click', () => {ageCalc()});

//code to calculate the age
let ageCalc = () => {
    let trueAge = 0;
    //code to acquire the input values with the droplists ; desired method
    let bDay = parseInt(document.getElementById("myDay").value);
    let bMonth = parseInt(document.getElementById("myMonth").value);
    let bYear = parseInt(document.getElementById("myYear").value);
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
