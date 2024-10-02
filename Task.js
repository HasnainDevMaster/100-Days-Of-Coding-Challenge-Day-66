"use strict";
// 100 Days Of Coding Challenge!
/* Day-66 Task:
Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:

TypeScript Type System Concepts https://github.com/AsharibAli/100-days-of-code/blob/main/day-66/TS-Type-System-Concepts/README.md */
//-------------------------------------------------------------------------------------------------------------------------------------
/* 1. Union Types
Union types allow a variable to hold more than one type.
This is useful when a value can be one of several types.*/
let value;
value = "Hello"; // valid
value = 42; // also valid
// Function using union types
function printId(id) {
    console.log(`ID: ${id}`);
}
printId("ABC123"); // ID: ABC123
printId(123456); // ID: 123456
let move;
move = "North"; // valid
move = "Up"; // Error: Type '"Up"' is not assignable to type 'Direction'
// Function using literal types
function moveDirection(direction) {
    console.log(`Moving ${direction}`);
}
moveDirection("East"); // Moving East
//------------------------------------------------------------------------
/* 3. Nullable Types
Nullable types allow a variable to be a type or null or undefined.
This is useful for optional values.*/
let username = null;
username = "Alice"; // valid
// Function using nullable types
function greet(name) {
    if (name) {
        console.log(`Hello, ${username}`);
    }
    else {
        console.log("Hello, stranger");
    }
}
greet("Bob"); // Hello, Bob
greet(null); // Hello, stranger
let user = {
    name: "Stanley",
    age: 27,
};
// Function using type alias
function getUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}
getUserInfo(user); // Name: Stanley, Age: 27
let staffMember = {
    name: "Jane",
    employeeId: 101,
};
// Function using intersection type
function getStaffDetails(staff) {
    console.log(`Name: ${staff.name}, Employee ID: ${staff.employeeId}`);
}
getStaffDetails(staffMember); // Name: Jane, Employee ID: 101
