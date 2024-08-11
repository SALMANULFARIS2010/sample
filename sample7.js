// Creating an array
let fruits = ['Apple', 'Banana', 'Orange'];
// Using push() to add elements to the end of the array
fruits.push('Mango', 'Grapes');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']
// Using pop() to remove the last element from the array
let poppedFruit = fruits.pop();
console.log(poppedFruit); // Output: Grapes
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange', 'Mango']
// If you call pop() again, it will remove the new last element
poppedFruit = fruits.pop();
console.log(poppedFruit); // Output: Mango
console.log(fruits); // Output: ['Apple', 'Banana', 