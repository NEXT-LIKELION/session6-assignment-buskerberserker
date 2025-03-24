const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

const squared = evenNumbers.map(function(num) {
  return num * num;
});

const total = squared.reduce(function(acc, cur) {
  return acc + cur;
}, 0);

console.log(total);
