let userBirthYear = prompt("What's your year of birth?");

let currentYear = 2023;
let replyYear;

if (userBirthYear === null || userBirthYear.trim() === "" || isNaN(+userBirthYear) === true) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження");
  replyYear = "Ви не захотіли вводити рік вашого народження!";
} else {
  let userAge;
  if (+userBirthYear >= 1900 && +userBirthYear <= currentYear) {
    userAge = currentYear - parseInt(userBirthYear);
  } else {
    alert("Шкода, що Ви не захотіли ввести свій СПРАВЖНІЙ рік народження");
    userAge = "невідомо скільки років";
  }
  replyYear = `Вам ${userAge}`;
}

let userCity = prompt("What city do you live in?");
let replyCity;

switch(true) {
  case (userCity === null || userCity.trim() === "" || !isNaN(+userCity)):
    alert("Шкода, що Ви не захотіли ввести своє місто");
    replyCity = "Ви не захотіли вводити місто!";
  break;

  case (userCity.toLowerCase() === "київ"):
    replyCity = "Ти живеш у столиці України";
  break;

  case (userCity.toLowerCase() === "вашингтон"):
    replyCity = "Ти живеш у столиці Америки";
  break;
  
  case (userCity.toLowerCase() === "лондон"):
    replyCity = "Ти живеш у столиці Великобританії";
  break;

  default:
    replyCity = `Tи живеш у місті ${userCity}`;
  break;
}

let userFavSport = prompt("What is your favorite sport?");
let replySport;

switch(true) {
  case (userFavSport === null || userFavSport.trim() === "" || !isNaN(+userFavSport)):
    alert("Шкода, що Ви не захотіли ввести свій вид спорту");
    replySport = "Ви не захотіли вводити ваш улюблений вид спорту!";
  break;

  case (userFavSport.toLowerCase() === "баскетбол"):
    replySport = "Круто! Хочеш стати Майклом Джорданом?";
  break;

  case (userFavSport.toLowerCase() === "футбол"):
    replySport = "Круто! Хочеш стати Кріштіану Роналду?";
  break;
  
  case (userFavSport.toLowerCase() === "бокс"):
    replySport = "Круто! Хочеш бути як Мухамед Алі?";
  break;
  
  default:
    replySport = `Ваш улюблений вид спорту це: ${userFavSport}`;
  break;
}

alert(`${replyYear}, 
${replyCity}, 
${replySport}`);