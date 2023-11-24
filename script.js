// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength;

  do {
    passwordLength = prompt('How many characters would you like your password to have?');

    // Check if the user pressed "Cancel"
    if (passwordLength === null) {
      alert('Operation cancelled. Exiting...');
      break; // Exit the loop if the user pressed "Cancel"
    }

    passwordLength = parseInt(passwordLength);

    // Check if the input is a valid number within the specified range
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Invalid input. Please enter a number between 8 and 128');
    }

  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);


  // Prompts the user if they want numbers, //
  // special characters, lower or upper case letters added to their password //

  // Initialize variables to store the user options
  let includeNumbers,
      includeSpecialChars,
      includeLowerCaseLetters,
      includeUpperCaseLetters;

  do {
    // Check if the user pressed "Cancel"
    if (passwordLength === null) {
      break; // Exit the loop if the user pressed "Cancel"
    }

    // Prompt the user for the password options
    includeNumbers = confirm("Click OK to include numbers OR Cancel to exclude numbers.");
    includeSpecialChars = confirm("Click OK to include special characters OR Cancel to exclude special characters.");
    includeLowerCaseLetters = confirm("Click OK to include Lower Case Letters OR Click Cancel to exclude Lower Case Letters.");
    includeUpperCaseLetters = confirm("Click OK to include Upper Case Letters Click Cancel to exclude Upper Case Letters.");

    if (!includeNumbers && !includeSpecialChars && !includeLowerCaseLetters && !includeUpperCaseLetters) {
      alert("At least one option must be selected. Please try again.");
    }

  } while (!includeNumbers && !includeSpecialChars && !includeLowerCaseLetters && !includeUpperCaseLetters);

  // Return user password options (boolean values)
  return {
    passwordLength: passwordLength,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars,
    includeLowerCaseLetters: includeLowerCaseLetters,
    includeUpperCaseLetters: includeUpperCaseLetters,
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  // Get password options
  let passwordOptions = getPasswordOptions();

  // Initialize an array to store all possible characters
  let allChars = [];

  // Include lowercase letters if specified in options
  if (passwordOptions.includeLowerCaseLetters) {
    allChars = allChars.concat(lowerCasedCharacters);
  }

  // Include uppercase letters if specified in options
  if (passwordOptions.includeUpperCaseLetters) {
    allChars = allChars.concat(upperCasedCharacters);
  }

  // Include special characters if specified in options
  if (passwordOptions.includeSpecialChars) {
    allChars = allChars.concat(specialCharacters);
  }

  // Include numbers if specified in options
  if (passwordOptions.includeNumbers) {
    allChars = allChars.concat(numericCharacters);
  }

  // Initialize an array to store the password
  let password = [];

  // Ensure at least one character from each selected option is included
  if (passwordOptions.includeLowerCaseLetters) {
    password.push(getRandom(lowerCasedCharacters));
  }

  if (passwordOptions.includeUpperCaseLetters) {
    password.push(getRandom(upperCasedCharacters));
  }

  if (passwordOptions.includeSpecialChars) {
    password.push(getRandom(specialCharacters));
  }

  if (passwordOptions.includeNumbers) {
    password.push(getRandom(numericCharacters));
  }

  // Generate the remaining characters of the password
  for (let i = password.length; i < passwordOptions.passwordLength; i++) {
    password.push(getRandom(allChars));
  }

  // Shuffle the password to randomize the order of selected characters
  password = password.sort(function () {
    return Math.random() - 0.5;
  });

  // Convert the array of characters into a string and return the password
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
