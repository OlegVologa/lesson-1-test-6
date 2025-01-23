'use strict';

let numSecret = Math.floor(Math.random() * (100)) + 1;
let numMin;
let numMax;

console.log('Компьютер 1 загадал число: ' + numSecret);
console.log('');

function findNumSecret(numMin, numMax) {
  if ((numMin + 1 === numMax) && numMin != numSecret) {
    console.log('Компьютер 2:Пробую число ' + numMax + '.');
    console.log('Компьютер 1:Угадал!');
  } else {
    let numMedian = Math.floor((numMin + numMax) / 2);
    console.log('Компьютер 2:Пробую число ' + numMedian + '.');
    if (numMedian === numSecret) {
      console.log('Компьютер 1:Угадал!');
    } else if (numSecret < numMedian) {
      numMax = numMedian;
      console.log('Компьютер 1:Меньше.');
      console.log('');
      findNumSecret(numMin, numMax)
    } else if (numSecret > numMedian) {
      numMin = numMedian;
      console.log('Компьютер 1:Больше.');
      console.log('');
      findNumSecret(numMin, numMax)
    }
  }
}

findNumSecret(1, 100);

