const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);  



const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers);  // Output: [1, 3, 5, 7, 9]

