
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//code pour saisir les inputs


//code pour avoir la date actuelle
let today = new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

//code pour savoir si l'année est bissextille
let isBissextil = (year) => {
  if((year%4 == 0 && year% 100 !== 0) || year%400 == 0) {
      return "Bissextil";
  } else {
      return "!Bissextil";
  }
}

//code pour caculer l'àge /fonctionne
let ageCalc = () => {
    let trueAge = 0;
    //code pour enregistrer les valeurs /Fonctionne
    let bDay = parseInt(document.getElementById("day").value);
    let bMonth = parseInt(document.getElementById("month").value);
    let bYear = parseInt(document.getElementById("year").value);
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

//code pour envoyer l'age Nb: doit se faire lorsque chaque droplist a une valeur.
//document.getElementById('ageButton').addEventListener('click', () => ageCalc(27, 1, 1988));//control version / fonctionne
document.getElementById('ageButton').addEventListener('click', () => ageCalc());//control version
