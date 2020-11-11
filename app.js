const inquirer = require("inquirer");
const fs = require("fs");

const args = process.argv.slice(2);
const passwordName = args[0];
const newPasswordValue = args[1];

const pwSafeJSON = fs.readFileSync("./db.json", "utf8");
let pwSafe = JSON.parse(pwSafeJSON);
let pw = pwSafe[passwordName];

console.log("Welcome to your Password Manager");
const loginPw = "0000";
const question = [
  {
    type: "password",
    name: "master_password",
    message: "Please enter the master password",
    mask: "*",

    validate: function (value) {
      if (value == loginPw) {
        return allowAccess();
      } else {
        console.error("You better leave NOW!👊");
      }
    },
  },
];
const showPassword = () => {
  if (passwordName) {
    console.log(`The password is ${pw}`), process.exit(1);
    return showPassword();
  } else {
    console.log("unknown password");
  }
};
const writePassword = () => {
  pwSafe[passwordName] = newPasswordValue;
  fs.writeFileSync("./db.json", JSON.stringify(pwSafe, null, 2));
};

const allowAccess = () => {
  if (newPasswordValue) {
    writePassword(),
      console.log("You have changed the password!"),
      process.exit(1);
  } else {
    showPassword(), process.exit(1);
  }
};

inquirer.prompt(question);
