// Example 1
function add (a, b, c){
    console.log (a + b + c);
}

add (2, 3, 5);

// Example 2
function newAdd (num1, num2, num3){
    return num1 + num2 + num3;
}

let sum = newAdd (5, 10, 5);
console.log (sum);

//1.  Why return is Used?
/*
The `return` statement in a function serves a crucial purpose: it allows a function to send a value or result back to the part of the program where the function was called. Here's why the `return` statement is essential:

i. **Output**: Functions often perform calculations or operations and produce a result. The `return` statement enables a function to communicate this result to the rest of the program.

ii. **Data Flow**: In a program, data flows between different parts. The `return` statement is a way for a function to contribute to this data flow. It allows functions to be used as building blocks, with their results contributing to larger computations.

iii. **Reusability**: Functions are designed to be reusable. By using `return`, a function can provide different results based on the input or conditions each time it's called. This reusability is a fundamental concept in programming.

iv. **Decision-Making**: The result returned by a function can be used to make decisions in your code. For example, if a function calculates a person's age based on their Birthdate, you can use the returned age to determine if they are eligible for certain services or discounts.

v. **Error Handling**: Functions can use `return` to indicate errors or exceptional conditions. For instance, a function might return `null` or a specific error code if it encounters a problem, allowing the caller to handle errors appropriately.
*/


//2. What happens if nothing is written after return?
/*
If a `return` statement is used in a function without specifying a value or expression to return, it will exit the function immediately, and it will effectively return `undefined` by default. Here's an example:
*/
function doSomething(a) {
  // No return value specified
}

const result = doSomething(2);
console.log(result); // Output: undefined

/*
In this example, the `doSomething` function does not specify a return value. When you call `doSomething()`, it exits the function without providing any explicit value to return, so it returns `undefined`.

It's important to note that even if you don't write a `return` statement in a function, JavaScript will automatically insert a `return undefined;` statement at the end of the function if there's no explicit `return` statement. This behavior ensures that all functions in JavaScript return something, even if it's just `undefined`.

So, if you intend for a function to return a specific value or result, you should use the `return` statement to specify that value. If you don't need to return anything, you can omit the `return` statement or simply write `return;`, which will also result in the function returning `undefined`.
*/


// 3. What can be written after return?
/*
After the return statement in a JavaScript function, you can write an expression or a value that you want the function to return. This value can be of any valid JavaScript data type, such as numbers, strings, objects, arrays, or even other functions. Here are some examples:*/
// Returning an Array:
function getEvenNumbers() {
    return [2, 4, 6, 8];
  }

// Returning Another Function:
function getGreeter(greeting) {
  return function (name) {
    return greeting + ", " + name + "!";
  };
}

// Returning null or undefined (indicating no value):
function doNothing() {
    return null; // or return undefined;
  }
  

// 3. The difference between function declaration and function expression

//Function Declaration:
/*
- What It Is:  It's like giving a name to a recipe.
- How It Looks: You start with the word "function", then give your function a name, and then write the recipe inside curly braces {}.
- When You Can Use It: You can use the function declaration anywhere in your code, even before you declare it (hoisting).
Example:
*/
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression:
/*
- What It Is: It's like putting a recipe in a container (like a variable).
- How It Looks: You create a variable and assign it a function (the recipe). The function doesn't have a name; it's inside the variable.
- When You Can Use It: You can only use the function expression after you create the variable, just like you can only use a cookie jar after you fill it with cookies.
- Example:
*/
const greet = function(name) {
    return "Hello, " + name + "!";
};

/*
In summary, function declarations give your function a name and can be used anywhere in your code, while function expressions store the function inside a variable and can only be used after you create the variable. Both allow you to create reusable pieces of code, but they are used in slightly different ways.
*/

//4. regular function vs arrow function

/*
Regular Function (Function Declaration or Function Expression):

What It Is: It's like a traditional chef who follows a recipe step by step.
How It Looks: You use the function keyword to create a function and give it a name, then write the recipe inside curly braces {}.
Usage: Regular functions are suitable for most situations and have been around in JavaScript for a long time.
this Keyword: Regular functions have their own this value, which can change depending on how they are called. This makes them versatile for various contexts.
Example of a regular function:
*/
function add(a, b) {
    return a + b;
  }

/*
Arrow Function:

What It Is: It's like a modern chef who uses a shortcut recipe.
How It Looks: You use an arrow => to create a function without the function keyword. It's often shorter and more concise.
Usage: Arrow functions are commonly used in modern JavaScript, especially for simple functions or when you want to maintain a consistent this context.
this Keyword: Arrow functions don't have their own this value. Instead, they inherit the this value from the surrounding code. This can make them more predictable in some cases.
Example of an arrow function:
*/
const add = (a, b) => a + b;
/*
In summary, regular functions are versatile and have their own this context, while arrow functions are shorter and inherit this from the surrounding code. The choice between them often depends on your coding style, project requirements, and whether you need to deal with the this context extensively.
*/


// 5. What is the difference between function and loop?
/*
Functions and loops are both essential constructs in programming, but they serve different purposes and work in distinct ways. Here's a simple comparison between the two:

Function:
i.  Purpose:
   - A function is a reusable block of code that performs a specific task or set of tasks. It encapsulates a piece of functionality that can be called from different parts of a program.

ii. Usage:
   - Functions are used to organize code into modular and reusable chunks. They help avoid code duplication and make it easier to understand and maintain code.

iii. Execution:
   - Functions are executed when they are called (invoked) by name. They can take input values (arguments) and optionally return a result.

iv. Control Flow:
   - Functions do not control the flow of a program by themselves. They execute a set of instructions when called, but they don't repeat themselves like loops.

Loop:
i.  Purpose:
- A loop is used for repeating a set of instructions (block of code) multiple times based on a condition. It automates repetitive tasks.

ii.  Usage:
- Loops are used when you need to perform a specific action multiple times without writing the same code over and over.

iii. Execution:
- Loops repeatedly execute a block of code as long as a specified condition is true. They control the flow of a program by repeating a certain task.

iv. Control Flow:
- Loops directly control the flow of a program by executing the same code block iteratively until a condition is no longer met. They are used for iteration and cycling through data structures like arrays.

In summary, functions are reusable blocks of code that perform specific tasks, while loops are control structures used for repetitive execution of code based on a condition. Functions are typically used for modularizing code and making it more maintainable, while loops are used to automate repetitive tasks and iterate over data. You often use both functions and loops together in a program to achieve complex functionality.
*/

// 6. What is the difference between object and array?

/*
Objects and arrays are two fundamental data structures in JavaScript, but they serve different purposes and have distinct characteristics. Here's a simplified comparison between objects and arrays:

Objects:
i. Purpose:
   - Objects are used to store and organize data in key-value pairs. They are ideal for representing real-world entities and their properties.

ii. Structure:
   - Objects consist of key-value pairs, where keys are strings (or symbols in modern JavaScript), and values can be of any data type (e.g., strings, numbers, other objects, functions).

iii. Accessing Data:
   - You access data in objects using the keys. Each key is unique within an object, and it maps to a specific value.

iv. Use Cases:
   - Objects are commonly used to represent things with multiple characteristics. For example, you might use an object to represent a person with properties like "name," "age," and "address."

Arrays:
i. Purpose:
   - Arrays are used to store collections of data, typically of the same data type. They are suitable for ordered lists of items.

ii. Structure:
   - Arrays are ordered collections of values, and each value is assigned an index starting from 0. The values can be of any data type.

iii. Accessing Data:
   - You access data in arrays using numerical indices. Arrays are ordered, so you use the index to specify the position of the value you want to access.

iv. Use Cases:
   - Arrays are used when you need to work with a list of items, such as numbers, strings, or other objects. For instance, you might use an array to store a list of numbers for mathematical operations.

In summary, objects are used for organizing data into named properties (key-value pairs), while arrays are used for storing ordered collections of data with numerical indices. The choice between objects and arrays depends on the structure of your data and the requirements of your program. Often, you will use both objects and arrays in conjunction to represent complex data structures.
*/