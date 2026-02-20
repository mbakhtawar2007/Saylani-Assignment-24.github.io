// Exercise 20-1
// Combine first and last names.

document.write("<h2>Chapter 20</h2>");
document.write("<h3>Exercise 20-1</h3>");

var firstNames = ["John", "Mark"];
var lastNames = ["Smith", "Jones"];

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        document.write(firstNames[i] + " " + lastNames[j] + "<br>");
    }
}


// Exercise 20-2
// Find matching values in two arrays.

document.write("<h3>Exercise 20-2</h3>");

var arr1 = ["Ali", "Ahmed", "Sara"];
var arr2 = ["Sara", "Zain", "Ali"];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            document.write("Match found: " + arr1[i] + "<br>");
        }
    }
}



document.write("<h2>Chapter 21</h2>");

// Exercise 21-1
// Convert string to uppercase.

document.write("<h3>Exercise 21-1</h3>");

var text1 = "hello world";
document.write("Uppercase: " + text1.toUpperCase() + "<br>");


// Exercise 21-2
// Convert string to lowercase.

document.write("<h3>Exercise 21-2</h3>");

var text2 = "JAVASCRIPT";
document.write("Lowercase: " + text2.toLowerCase() + "<br>");



document.write("<h2>Chapter 22</h2>");

// Exercise 22-1
// Find length of a string.

document.write("<h3>Exercise 22-1</h3>");

var message = "JavaScript";
document.write("Length: " + message.length + "<br>");


// Exercise 22-2
// Access characters using loop.

document.write("<h3>Exercise 22-2</h3>");

for (var i = 0; i < message.length; i++) {
    document.write(message[i] + "<br>");
}



document.write("<h2>Chapter 23</h2>");

// Exercise 23-1
// Find index of a word.

document.write("<h3>Exercise 23-1</h3>");

var sentence = "I love JavaScript programming";
var index = sentence.indexOf("JavaScript");
document.write("Index of 'JavaScript': " + index + "<br>");


// Exercise 23-2
// Check if word exists.

document.write("<h3>Exercise 23-2</h3>");

if (sentence.indexOf("love") !== -1) {
    document.write("'love' found in sentence<br>");
}



document.write("<h2>Chapter 24</h2>");

// Exercise 24-1
// Replace word in string.

document.write("<h3>Exercise 24-1</h3>");

var newSentence = sentence.replace("JavaScript", "JS");
document.write("Updated Sentence: " + newSentence + "<br>");


// Exercise 24-2
// Replace all occurrences.

document.write("<h3>Exercise 24-2</h3>");

var textReplace = "apple apple apple";
var updatedText = textReplace.replace(/apple/g, "orange");
document.write(updatedText + "<br>");


document.write("<h2>Chapter 25</h2>");

// Exercise 25-1
// Round number.

document.write("<h3>Exercise 25-1</h3>");

var num = 4.7;
document.write("Rounded: " + Math.round(num) + "<br>");


// Exercise 25-2
// Round down and up.

document.write("<h3>Exercise 25-2</h3>");

var num2 = 4.3;
document.write("Floor: " + Math.floor(num2) + "<br>");
document.write("Ceil: " + Math.ceil(num2) + "<br>");