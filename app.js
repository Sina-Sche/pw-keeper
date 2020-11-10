process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

const args = process.argv.slice(2);
args[0];

wifi = 5678;
console.log(wifi);
bank = 1234;
console.log(bank);

const inquirer = require("inquirer");
inquirer.prompt([["?"], "What is your password?"]).then((answers) => {
  alert("Yay! Welcome to the passwords!");
});
