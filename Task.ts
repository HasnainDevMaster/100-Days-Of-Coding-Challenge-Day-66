// 100 Days Of Coding Challenge!

/* Day-66 Task:
Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:

TypeScript Type System Concepts https://github.com/AsharibAli/100-days-of-code/blob/main/day-66/TS-Type-System-Concepts/README.md */

//-------------------------------------------------------------------------------------------------------------------------------------

/* 1. Union Types
Union types allow a variable to hold more than one type.
This is useful when a value can be one of several types.*/

let value: string | number;
value = "Hello"; // valid
value = 42; // also valid

// Function using union types
function printId(id: string | number) {
  console.log(`ID: ${id}`);
}

printId("ABC123"); // ID: ABC123
printId(123456); // ID: 123456

//--------------------------------------------------------------------------

/* 2. Literal Types
Literal types are specific values a variable can hold.
They are useful for defining exact values a variable can take.*/

type Direction = "North" | "South" | "East" | "West";

let move: Direction;
move = "North"; // valid
move = "Up"; // Error: Type '"Up"' is not assignable to type 'Direction'

// Function using literal types
function moveDirection(direction: Direction) {
  console.log(`Moving ${direction}`);
}

moveDirection("East"); // Moving East

//------------------------------------------------------------------------

/* 3. Nullable Types
Nullable types allow a variable to be a type or null or undefined.
This is useful for optional values.*/

let username: string | null = null;
username = "Alice"; // valid

// Function using nullable types
function greet(name: string | null) {
  if (name) {
    console.log(`Hello, ${username}`);
  } else {
    console.log("Hello, stranger");
  }
}

greet("Bob"); // Hello, Bob
greet(null); // Hello, stranger

//------------------------------------------------------------------------------

/* 4. Type Alias
Type aliases create a new name for a type.
They are useful for simplifying complex types and improving code readability.*/

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: "Stanley",
  age: 27,
};

// Function using type alias
function getUserInfo(user: User) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

getUserInfo(user); // Name: Stanley, Age: 27

//--------------------------------------------------------------------------------

/* 5. Intersection Type
Intersection types combine multiple types into one.
This is useful when a value must satisfy multiple type requirements.*/

type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

let staffMember: Staff = {
  name: "Jane",
  employeeId: 101,
};

// Function using intersection type
function getStaffDetails(staff: Staff) {
  console.log(`Name: ${staff.name}, Employee ID: ${staff.employeeId}`);
}

getStaffDetails(staffMember); // Name: Jane, Employee ID: 101
