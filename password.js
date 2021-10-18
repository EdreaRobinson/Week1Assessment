console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter the password ", function(input){
	password = input.split(' ');

console.log('password', password)

if (password.length >= 10){
    console.log("Success!");
} else {
    console.log("Wrong!");
}
reader.close()

});
