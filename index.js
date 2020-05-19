// Your code here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = '*') {
  return function (adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

const Calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2
};

function actionApplyer(start, arr) {
  return arr.reduce((result, element) => element(result), start)
}