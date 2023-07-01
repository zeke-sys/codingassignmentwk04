//Coding Assignment - Week 4

console.log('Coding Steps:');

console.log('1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //Ages array declared

console.log('a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.');
console.log('. Do not use numbers to reference to reference the last element, find it programmatically.');
console.log('. ages[7] - ages[0] is not allowed!');
console.log((ages[ages.length - 1]) - ages[0]); //Subtracting last first element from last element

console.log('b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).');
ages.push(85); //The push method will add an element at the end of the array
console.log(ages); //Reprinting the array to check that the new age was added
console.log((ages[ages.length - 1]) - ages[0]); //Subtraction step repeated between first and last element

console.log('c. Use a loop to iterate through the array and calculate the average age.');
let sum = 0; //initializing the sum variable to add all ages
for (let age of ages) { //looping through the numbers/ages and add each to the sum in the next line
    sum += age;
} console.log(sum / ages.length); //divide the sum of all ages by the number of ages in the array to find the average and printing it out

console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.");
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log('a. Use a loop to iterate through the array and calculate the average number of letters per name.');
let avgNumberOfLetters = 0; //initializing the average varialge to find the average number of letters per name
for (let {} of names) { //looping through the names and finding the average next
    avgNumberOfLetters = names.join('').length / names.length; //dividing the sum by the number of names by joining all strings/finding the total number of characters 
}
console.log(avgNumberOfLetters); //printing out the result as instructed

/*Another way to calculate the average number of letters in 2a by using the reduce method

let sumOfLetters = names.reduce(function (sum, name) {
    return sum + name.length;
}, 0);
avgNumberOfLetters = (sumOfLetters / names.length);
console.log(avgNumberOfLetters);
*/

console.log('b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.');
let joinedNames = 0; //initializing the concatenated names variable prior to the for loop
for (i = 0; i < names.length; i++) { //iterating through the array
    joinedNames = names.join(' '); //declaring the initialized variable joinedNames addind spaces between the names
} 
console.log(joinedNames); //printing out the result

console.log('3. How do you access the last element of any array?');
console.log("The last element of any array is located at index: arrayName.length - 1. For instance, the last element of the 'names' array above is:");
console.log(names[names.length -1]); //example of a last element of an array being printed

console.log('4. How do you access the first element of any array?');
console.log("The first element of any array is located at arrayName[0]. For instance, the first element of the 'names' array is:");
console.log(names[0]); //example of first element of an array being printed

console.log('5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array');
let nameLengths = []; //new array created 
for (let {} of names) { //setting for of loop
    nameLengths = names.map(function (name) { //using map to invoke a function for each element
        return name.length; //assigning the returned values to the newly created array
    });
}
console.log(nameLengths); //printing out the result


console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');
sum = 0; //initializing the sum variable for this code block since it's already been declared using let
for (let i = 0; i < nameLengths.length; i++) { //setting the for loop
    sum += nameLengths[i]; //totaling the elements in the array
}
console.log(sum); //printing out the result

console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e., if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello'");
function writeFunction(word, n) { //creating function that takes two parameters as arguments
    return word.repeat(n); //using the repeat method to repeat a string any given number of times
}
console.log(writeFunction('Hello', 3)); //printing out the result

console.log("8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
function createFullName(firstName, lastName) { //crating function that takes the two given parameters
    return firstName + " " + lastName; //combining the first and last name separated by a space
}
console.log(createFullName('Mickey', 'Mouse')); //printing out the result as an example for the given scenario

console.log('9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.');

let array = []; //Declaring the variable array prior to the function
sum = 0; //Reinitializing the variable sum since it was used in another answer scenario above 
function sumFunction(array) { //writing function that takes the previously declared array
    for (let element of array){ //iterating through the array 
        sum += element; //adding all elements in the array
        }
        console.log(sum); //printing out the sum for personal reasons to double check that the for loop and sum worked
        if (sum > 100) { //applying the condition given in the case scenario
            return true;
        } else {
            return false;
    }
}
console.log(sumFunction([24, 22, 23, 45])); //printing out the result by adding an example of an array


console.log('10. Write a function that takes an array of numbers and returns the average of all the elements in the array.')
array = [3, 4, 6, 7, 1, 9]; //redeclaring and applying values to the variable array
sum = 0; //reinitializing the variable sum
function findAverageFunction(array) { //writing the function that takes an array of numbers
    for (let element of array) { //iterating through the array
        sum += element; //adding all elements in the array
    } 
    let average = sum / array.length; //declaring a variable called average to find the average
    return average;
}
console.log(findAverageFunction(array)); //printing out the result


console.log('11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.')
let array1 = []; //declaring the first array
let array2 = []; //declaring the second array
let sum1 = 0; //declaring the first array total
let sum2 = 0; //declaring the second array total
function compareArrayFunction(array1, array2) { //setting up the function to compare the two arrays
    for (let element of array1) { //iterating through the first array
        sum1 += element; //adding all elements in the first array
    } console.log(sum1); //printing out the sum for personal reasons to double check that the for loop and sum worked
    for (let element of array2) { //iterating through the second array
        sum2 += element; //adding all elements in the second array
    } console.log(sum2); //printing out the sum for personal reasons to double check that the for loop and sum worked
    if ((sum1/array1.length) > (sum2/array2.length)) { //setting up the conditions given in the case scenario
        return true;
    } else {
        return false;
    }
}
console.log(compareArrayFunction([1, 3, 7, 9], [2, 4, 5, 6])); //printing out the result

console.log('12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.')
let isHotOutside = true; //declaring the variable isHotOutside that takes a boolean value
let moneyInPocket = 0; //declaring the varariable moneyInPocket that takes a number
function willBuyDrink (isHotOutside, moneyInPocket) { //setting up the function and parameters that will take in conditions given in the scenario
    if (isHotOutside == true && moneyInPocket > 10.50) { //applying the given conditions
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 20)); //printing out the result


console.log('13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.')
//Keeping it simple and creating a spy game involving cars, which I played as a kid.

console.log("Answer - Creating a spy game function wherein:");
console.log("a) if there is a red car, the function returns 'I spy a red car. I get one point'.");
console.log("b) if there's a yellow car, the function returns 'I spy a yellow car. I get two points'.");
console.log("c) if there's a car at all, the function returns 'I spy a different color car. No points.'");
console.log("d) if there's no car at all, the function returns 'There is no car. No points.'");

let car = true; //Declaring the parameters to be used in the function
let color = 0;
function spyGameFunction (car, color) { //setting up the function
    if (car == true && color === 'red') { //applying the first condition in a
        console.log('I spy a red car. I get one point.');
    } else if (car == true && color === 'yellow') { //applying the second condition in b
        console.log('I spy a yellow car. I get two points.');
    } else if (car == true) { //applying the third condition in c
        console.log('I spy a different color car. No points')
    } else { //applying the fourth condition in d
        console.log('There is no car. No points.');
    }
}
console.log(spyGameFunction(false, 'silver')); //printing out the result based on the values at hand