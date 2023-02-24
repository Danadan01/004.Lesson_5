let userBirthYear = prompt("What's your year of birth?");

let currentYear = 2023;  
let userAge;

if (+userBirthYear >= 1900 && +userBirthYear <= currentYear){
  userAge = currentYear - parseInt(userBirthYear);
} else {
  alert("Шкода, що Ви не захотіли ввести свій рік народження");
  userAge = "невідомо скільки років!";
}

let userCity = prompt("What city do you live in?");
userCity = userCity === null? null : userCity.trim().toLowerCase();

switch(userCity) {       
    case ("київ"):
      userCity = "Ви живете у столиці України";      
    break;
  
    case ("вашингтон"):
      userCity = "Ви живете у столиці Америки";
    break;
    
    case ("лондон"):
      userCity = "Ви живете у столиці Великобританії";
    break;

    case (null):
    case(""):
      alert("Шкода, що Ви не захотіли ввести своє місто");
      userCity = "Ви не захотіли вводити місто!";           
    break;
  
    default:
      userCity = userCity.charAt(0).toUpperCase() + userCity.slice(1);
      userCity = `Ви живете у місті ${userCity}`;  
    break;
  }
 
let userFavSport = prompt("What is your favorite sport?");
userFavSport = userFavSport === null ? null : userFavSport.trim().toLowerCase();

switch(userFavSport) {
  case ("баскетбол"):
    userFavSport = "Круто! Хочеш стати Майклом Джорданом?";
  break;

  case ("футбол"):
    userFavSport = "Круто! Хочеш стати Кріштіану Роналду?";
  break;
  
  case ("бокс"):
    userFavSport = "Круто! Хочеш бути як Мухамед Алі?";
  break;

  case (null):
    case(""):
      alert("Шкода, що Ви не захотіли ввести свій вид спорту");
      userFavSport = "Ви не захотіли вводити ваш улюблений вид спорту!";           
    break;
  
  default:
    userFavSport = userFavSport.charAt(0).toUpperCase() + userFavSport.slice(1);
    userFavSport = `Ваш улюблений вид спорту це: ${userFavSport}`;
  break;
}

alert(`Вам ${userAge} 
${userCity} 
${userFavSport}`);
