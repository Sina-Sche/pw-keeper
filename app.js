const inquirer = require("inquirer");
const fs = require("fs");

console.log("Welcome to your Password Manager");

const showPassword = () => {
  const args = process.argv.slice(2);
  const passwordName = args[0];

  console.log(`Here is your password for your ${passwordName} account`);

  const pwSafeJSON = fs.readFileSync("./db.json", "utf8");

  const pwSafe = JSON.parse(pwSafeJSON);
  const pw = pwSafe[passwordName];
  if (passwordName) {
    console.log(`The password is ${pw}`), process.exit(1);
    return;
  } else {
    console.log("unknown password");
  }
};
const loginPw = "0000";
const question = [
  {
    type: "password",
    name: "master_password",
    message: "Please enter the master password",
    mask: "*",

    validate: async function (value) {
      if (value == loginPw) {
        return "Correct Password", await showPassword();
      } else {
        console.error("You better leave NOW!👊");
      }
    },
  },
];

inquirer.prompt(question);
