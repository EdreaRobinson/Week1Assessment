console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const hasLowerCase= s => s.toUpperCase() != s;
const hasUpperCase= s => s.toLowerCase() != s;
function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

reader.question("Please enter the password.  It must be at 10 characters or more and contain: at least 1 upper case letter, at least 1 lower case letter, at least 1 number. ", function(input){

// console.log('password', input)

if ((input.length >= 10) && (hasUpperCase(input) === true) && (hasLowerCase(input) === true) && (stringContainsNumber(input) === true)) {
    console.log("Success!");
} else {
    console.log("Wrong!");
}
reader.close()

});
