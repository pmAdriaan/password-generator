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
  let length;

  do {
    length = prompt('How many characters would you like your password to have?');

    // Check if the user pressed "Cancel"
    if (length === null) {
      alert('Operation cancelled. Exiting...');
      break; // Exit the loop if the user pressed "Cancel"
    }

    length = parseInt(length);

    // Check if the input is a valid number within the specified range
    if (isNaN(length) || length < 8 || length > 128) {
      alert('Invalid input. Please enter a number between 8 and 128');
    }

  } while (isNaN(length) || length < 8 || length > 128);


  // Prompts the user if they want numbers, //
  // special characters, lower or upper case letters added to their password //

  // Initialize variables to store the user options
  let includeNumbers, includeSpecialChars, includeLowerCaseLetters, includeUpperCaseLetters;

  do {
    // Check if the user pressed "Cancel"
    if (length === null) {
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
    length: length,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars,
    includeLowerCaseLetters: includeLowerCaseLetters,
    includeUpperCaseLetters: includeUpperCaseLetters,
  }

}

// console.log(getPasswordOptions());

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  console.log(options);

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
