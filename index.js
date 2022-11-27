import readline from "readline"; 
import { displayOptions, showNames, calculateRandomNumber, getGirls, countBoysAndGirls, getAges, getRandomString, addNewStudent, availableGenders, getTheYoungest, getGirlsAverageAge, addScore } from "./function.js";
import { requirements,} from "./settings.js";



const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
},
{
  age: 26,
  examScores: [],
  gender: 'female',
  name: 'flor'
},
{
  age: 21,
  examScores: [],
  gender: 'male',
  name: 'juan'
},
]

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function isInt (str) {
    const number = Number.parseInt(str);
    return !Number.isNaN(number);
  }

function chooseOptionFromConsole () {
  const promise = new Promise ((resolve, reject) => {
    rl.question ('Please, choose an option: ', (num) => {
      rl.pause();
        if (isInt(num)) {
          num = Number.parseInt(num);
          resolve(num);
          } else {
            reject ('Your choice has to be a number');
          }
        });
    });
  return promise;
}

async function playGame() {
    let userOption;
    do {
      try {
        displayOptions (requirements)
        userOption = await chooseOptionFromConsole();
      } catch (error) {
        console.log(error);
        process.exit(0);
      }
      switch (userOption) {
        case 1:
          console.table (students)
          break;
        case 2:
          console.log (students.length)
          break;
        case 3:
          showNames (students)
          break;
        case 4:
          students.pop()
          console.log (students)
          break;
        case 5: 
          const randomIndex = calculateRandomNumber (0, students.length -1)
          students.splice (randomIndex, 1)
          console.log (students)
          break;
        case 6:
          getGirls (students)
          break;
        case 7:
          console.log (countBoysAndGirls (students))
          break;
        case 8:
          let areGirls = students.every (item => item.gender === 'female')
          console.log (areGirls)
          break;
        case 9:
          getAges (students)
          break;
        case 10:
          addNewStudent (students)
          console.log (students)
          break;
        case 11:
          console.log (getTheYoungest (students))
          break;
        case 12:
          let average = students.reduce((sum, item) => sum + item.age, 0)/ students.length
          console.log(average)
          break;
        case 13:
          console.log (getGirlsAverageAge (students))
          break;
        case 14:
          console.log (addScore (students))
          break;
        case 15:
          students.sort (function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
          console.log (students)
          break;
        default:
          console.log ('Bye!')
           }
          

    } while (userOption > 0 && userOption <= 15); 
  }

playGame();
