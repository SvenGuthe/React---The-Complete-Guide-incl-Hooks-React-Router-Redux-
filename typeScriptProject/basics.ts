// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters, ...

// Primitives

let age: number;
age = 12;
age = 12.1;
// age = "12.1"; -> Error

let userName: string;
userName = "Sven";
// userName = 12; -> Error

let isInstructor: boolean;
isInstructor = true;
// isInstructor = 1; -> Error

// More complex types: arrays, objects

let hobbies: string[];
hobbies = ["Test", "Test2"];
// hobbies = "Test"; -> Error
// hobbies = { test: 'Test' }; -> Error

type personType = { name: string, age: number}

let person: personType;
// person = []; -> Error
person = { name: 'Max', age: 32 };
// person = { isEmployee: false }; -> Error

let people: personType[];
people = [{ name: "sven", age: 26 }]

// Type inference

let course = 'React - The Complete Guide';
// course = 12341; -> Error Type Inference

// Union Types

let course2: string | number = 'TypeScript - The Complete Guide';
course2 = 12341;

// Function & types

function add(a: number, b: number): number {
    const sum: number = a + b;
    return sum;
}

function printOutput(value: any): void {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray: T[] = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);

const stringArray = ['1', '2', '3'];
const updatedStringArray = insertAtBeginning(stringArray, '-1');