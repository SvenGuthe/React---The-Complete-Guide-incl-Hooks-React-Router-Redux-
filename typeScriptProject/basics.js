// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters, ...
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
age = 12.1;
// age = "12.1"; -> Error
var userName;
userName = "Sven";
// userName = 12; -> Error
var isInstructor;
isInstructor = true;
// isInstructor = 1; -> Error
// More complex types: arrays, objects
var hobbies;
hobbies = ["Test", "Test2"];
var person;
// person = []; -> Error
person = { name: 'Max', age: 32 };
// person = { isEmployee: false }; -> Error
var people;
people = [{ name: "sven", age: 26 }];
// Type inference
var course = 'React - The Complete Guide';
// course = 12341; -> Error Type Inference
// Union Types
var course2 = 'TypeScript - The Complete Guide';
course2 = 12341;
// Function & types
function add(a, b) {
    var sum = a + b;
    return sum;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
