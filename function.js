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
  }]
  
function showNames (array) {
    for ( let index = 0; index < array.length ; index++) {
    console.log (array[index].name)
    }
}

function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function getGirls (array) {
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].gender === 'female') {
  console.log (array[index])
  }
  }
}

function countBoysAndGirls (array) {
  let countBoys = 0
  let countGirls = 0
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].gender === 'male') {
      countBoys++
    } else {
      countGirls++
    }
  }
  console.log (countBoys + ' boys and ' + countGirls + ' girls')
}

function getAges (array) {
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].age >= 20 && array[index].age <= 25 ) {
  console.log (array[index].name)
  }
  }
}