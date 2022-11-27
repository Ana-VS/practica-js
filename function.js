export function displayOptions (array) {
  for ( let index = 0; index < array.length ; index++) {
    console.log (array[index])}
  }

export function showNames (array) {
    for ( let index = 0; index < array.length ; index++) {
    console.log (array[index].name)
    }
}

export function calculateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

export function getGirls (array) {
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].gender === 'female') {
  console.log (array[index])
  }
  }
}

export function countBoysAndGirls (array) {
  let countBoys = 0
  let countGirls = 0
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].gender === 'male') {
      countBoys++
    } else {
      countGirls++
    }
  }
  return (countBoys + ' boys and ' + countGirls + ' girls')
}

export function getAges (array) {
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].age >= 20 && array[index].age <= 25 ) {
  console.log (array[index].name)
  }
  }
}

export function getTheYoungest (array) {
  let minAge = array[0].age
  position = 0
  for ( let index = 0; index < array.length ; index++) {
    if (array[index].age < minAge ) {
    minAge = array[index].age
    position = index
  }
  }
  return (array[position].name)
}

export function getGirlsAverageAge(array) {
  let girls 
  girls = array.filter (item => item.gender === 'female')
  
  let average = girls.reduce((sum, item) => sum + item.age, 0)/ girls.length
  
  return (average)
  } 
  
export function addScore(array) {
  for ( let index = 0; index < array.length ; index++) {
    let newScore = calculateRandomNumber(0,10)
    array[index].examScores.push(newScore)
  }
    return (array)
  } 