// let name = 'Tad';
// console.log(name);


// let firstName = "Tad";
// let lastName = "Mura";
// console.log(firstName, lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate)

// // When I want a variable to not change use "const"
// const interestRate1 = 0.3; //interestRate is set to "0.3" and cannot be changed
// interestRate1 = 1;
// console.log(interestRate1)

// let name = "Tad"; // String
// let age = 30; // Number
// let isApproved = true // Boolean
// let firstName = undefined;
// let lastName = null;

// // Declare an object using properties above
// let person = {
//     name: "Tad",
//     age: 32,
//     isApproved: true,
//     firstName: "Tatsuya",
//     lastName: "Murao"
// };

// console.log(person)

// // Change name of that person
// // Dot Notation
// person.name = 'Ben';
// console.log(person);
// console.log(person.name);

// // Bracket Notation
// person['name'] = 'Mary';
// console.log(person);

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors);
// // Desplay first element in the list
// console.log(selectedColors[0]);

// // add green in the list
// selectedColors[2] = 'green';
// console.log(selectedColors);

// // add random number in the array
// selectedColors[3] = 19283;
// console.log(selectedColors);

// function greet() {
//     console.log('Hello World')
// }
// // Call the function 
// greet();

// function greet(nickName, firstName, lastName) {
//     console.log('Hello ' + nickName + firstName + lastName);
// }

// greet('John');
// greet('Tad', 'Tatsuya', 'Murao');

// Performing a task
// Calculate a value
// function square(number) {
//     return number * number;
// }

// let number = square(9);
// console.log(number);

// // OR

// console.log(square(9));

let employee = {
    baseSalary = 30000,
    overTime = 10,
    rate = 20,
    getWage: function() {
        return this.baseSalary + (this.overTime * this.rate);
    }
};

console.log(employee)