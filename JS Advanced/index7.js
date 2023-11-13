// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.
// a) Define a custom toString method for the Person object that will format and print
// their details
// b) Test your method by creating 2 different people using the below constructor function
// and printing them
// c) Create a new constructor function Student that uses call to inherit from Person and
// add an extra property cohort

// d) Add a custom toString for Student objects that formats and prints their details. Test
// with 2 students.

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    }
    const person1 = new Person('James Brown', 73, 'male')
    console.log('person1: '+person1) //prints person1: [object Object]

    const person1 = new Person('James Brown', 73, 'male')
const person2 = new Person('Kevin Hart', 48, 'male')  
console.log('Person 1: '+person1) 
console.log('Person 2: '+person2)

function Student(name, age, gender, cohort) { 
    this.cohort = cohort;
}

Student.prototype = Object.create(Person.prototype);  
Student.prototype.constructor = Student;
Student.prototype.toString = function() {
    return Person.prototype.call(this) + `, cohort=${this.cohort}`
}

const student1 = new Student('Jenna Ortega', 23, 'female', 'cohort 1')  
const student2 = new Student('vanessa hudgens', 27, 'female', 'cohort 2')

console.log(`Student 1: `+ student1)
console.log(`Student 2: `+ student2)

