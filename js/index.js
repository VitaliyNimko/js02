// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have x, y attributes. Circle objects have center which is a Point, 
//and radius, which is a number.

// Write a function calculating circumference of a Circle.

// Tests round answers to 6 decimal places.

function circleCircumference(circle) {
const pi = 3.14159265358979323846;
return 2 * pi * circle.radius;
}


// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes 
// in very handy quite a lot so is a good one to know.

function maps(x){
return x.map(value => value * 2);
}

// The new operator in JavaScript creates objects by following these three steps:

// 1. First, it creates a new empty object. (Already done for you here.)
// 2. Next, it sets the new object’s .__proto__ property to match the prototype 
// property of the function being invoked.
// 3. Finally, the operator invokes the function and passes the new object as 
// the “this” reference.

// Use this understanding of the new operator to create an instance of the
// object MyObject, but do so without calling "new MyObject()".

// Note: Currently there is no way to prevent you from passing this kata
// just by typing "var myObj = new MyObject();". 
// However, I will scrunch my eyebrows when I see your solution 
// and make quiet remarks to myself about how you don't understand what this
// kata is trying to teach you.

var myObj = new MyObject();