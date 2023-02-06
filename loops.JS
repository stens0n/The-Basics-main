1 // Q: What is a loop in JavaScript and why is it useful?

/*
A loop in JS is a control structure that allows you to repeatedly execute a block of code until a certain condition is met. Loops are
useful for performing repetitive tasks, such a processing arrays, generating sequences of numbers, or performing some action a specified 
number of times. By using Loops, you can automate the process of repeating a task, avoiding the need to write the same code multiple times. 
This makes your code more efficient, readable, and maintainable.
*/




2 // Q: What are the different components of a for loop?

/* 
There are three components of a for loop: initialization, condition, and increment.

Initialization: 

The initialization component is executed only once, at the beginning of the loop. It is used to
set up the initial value of a counter variable that will be used to control the loop.

Condition:

The condition component is evaluated before each iteration of the loop. If the condition is true, the
code withing the loop will be executed. If the condition is false, the loop will terminate.


Increment:

The increment component is executed afeter each iteration of the loop. It is used to increment the value of the counter
variable, which is then tested against the condition in the next iteration.

*/

for (initialization; condition; increment) {
    //code to be executed
}

// Her is an ex of a for loop that iterates over an array and prints each element:

const array = [1, 2 , 3, 4, 5 ]

for (let i=0; i< array.length; i++){
    console.log(array[i])
}

/* 

This Loop iterates over the array and prints each element using the "console.log()" function. The loop starts with
and index of "0" and continues until the index is no longer less than the length of the array.


The "let" keyword allows you to declare a block-scoped variable, which is a good practice for avoiding variable shadowing 
and other unexpected behavior. In this case, the variable 'i' is only accessible withing the loop block. 
*/





4 // What is the difference between for and forEach loop in JavaScript?

/* 

"for" and "forEach" loops are two different ways to iterate over arrays in JS. 

"for" loop allows you to iterate over an array by incrementing an index value and accessing the 
elements of the array using that index. It provides more control over the iteration process, as it allows you
to specifiy a start and end value for the index, as well as to change the index value in the body of the loop.

"forEach" loop is a higher-order function that takes a callack function as an argument and calls it once for each element
in the array. It provides a more concise and functional way to iterate over an array and it does not allow you to specify a 
start and end value for the index, nor does it allow you to change the index value in the body of the loop.

Here's and example of using a "forEach" loop:
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

/*
Output:
1
2
3
4
5
*/






5 // How to use the while loop in JavaScript?

while (condition) {
    //code to be executed
}

/*

The "condition" expression is evaluated before each iteration of the loop. If the condition evalutes to "true", the 
code inside the loop is executed. Once the condition evaluates to "false", the loop terminates and execution continues
with the code that follows the loop.

Here is an ex using a "while" loop to print the numbers 1-5:
*/

let i = 1;
while (i <= 5){
    console.log(i);
    i++;
}

/*
Output:
1
2
3
4
5


Important to note that if the condition in a "while" loop never becomes "false", the loop will run forever, creating an infinite loop.
It's essential to ensure that the condition eventually becomes "false" in order to avoid infinite loops.
*/