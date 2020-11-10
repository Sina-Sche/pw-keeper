const args = process.argv.slice(2);
const passwordName = args[0];
console.log(`You will get your ${passwordName} password`);

wifi = 5678;
bank = 1234;
if (passwordName === "wifi") {
  console.log(wifi);
} else {
  console.log("unknown password");
}

if (passwordName === "bank") {
  console.log(bank);
} else {
  console.log("unknown password");
}
// const inquirer = require("inquirer");
// inquirer.prompt([["?"], "What is your password?"]).then((answers) => {
//   alert("Yay! Welcome to the passwords!");
// });
