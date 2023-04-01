//1
let days =["Понидельник","вторник","среда","четверг","пятница","суббота","воскресенье"]

let day = new Date()
let weekday =day.getDay()

for(let item of days){
 if( weekday == 1){
  console.log("Понидельник");
 }
 if( weekday == 2){
  console.log("вторник");
 }if( weekday == 3){
  console.log("среда");
 }if( weekday == 4){
  console.log("четверг");
 }if( weekday == 5){
  console.log("пятница");
}if( weekday== 6){
    console.log("суббота");
}if( weekday == 7){
  console.log("воскресенье");
 }
}


//2
let weekdays = ["Понидельник","вторник","среда","четверг","пятница","суббота","воскресенье"]
let num_day = 0
let start = new Date()
let dayy = start.getDay()

switch(dayy){
case 1:
    console.log(weekdays[day - 1]);
    break;
    case 2:
        console.log(weekdays[day - 1]);
        break;
        case 3:
            console.log(weekdays[day - 1]);
            break;
            case 4:
                console.log(weekdays[day - 1]);
                break;
                case 5:
                console.log(weekdays[day - 1]);
                break;
                case 6:
                console.log(weekdays[day - 1]);
                break;
                default:
                    console.log(weekdays[weekdays.length - 1]);





}


//3
// let week =["Понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"]

// let day = new Date()
// let w =day.getDay()
// console.log(w);
// switch (w) {
//     case 1  2  3  4  5  6  7:
//         console.log(week[w-1]);
//         break;
//         default:console.log(week[w-1]);
//         break;
// }

// if(w==1||2||3||4||5||6||7){
//     console.log(week[w-1]);
// }
// else{
//     console.log(week[w-1]);
// }