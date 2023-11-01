// Question 3

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.


const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Cat', 'Dog')
console.log(animals)

animals.unshift('Rabbit', 'Bear')
console.log(animals)

animals.sort()
console.log(animals)

function replaceMiddleAnimal(newValue) {
    const middle = Math.floor(animals.length / 2);
    animals[middle] = newValue;
}

replaceMiddleAnimal('Gorilla')
console.log(animals)

function findMatchingAnimals(beginsWith) {
    const searchString = beginsWith.toLowerCase();
    return animals.filter(animal => 
        animal.toLowerCase().startsWith(searchString)
        );
}

console.log(findMatchingAnimals('g'))
console.log(findMatchingAnimals('T'))

