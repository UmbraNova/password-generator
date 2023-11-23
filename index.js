const charLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const charNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

let checkNumbers = document.getElementById("numbers-el")
let checkLetters = document.getElementById("letters-el")

let inputArray = []
let passwordLength = 15


function copyPassword(choice) {
    let paragraphText = document.getElementById(choice).innerText;
    let textarea = document.createElement("textarea");
    textarea.value = paragraphText;
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}


function initPasswords() {
    if (checkNumbers.checked && checkLetters.checked) {
        inputArray = charNumbers.concat(charLetters)
    } else if (checkNumbers.checked) {
        inputArray = charNumbers
    } else if (checkLetters.checked) {
        inputArray = charLetters
    } else {
        inputArray = charLetters.concat(charNumbers, charSymbols)
    }
    
    passOne.textContent = generatePassword()
    passTwo.textContent = generatePassword()
}


function generatePassword() {
    let rndPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        rndPassword += inputArray[Math.floor(Math.random()*(inputArray.length-1))]
    }
    return rndPassword
}


function changeLength() {
    passwordLength = prompt("Enter the length of the password (max 16): ")
    if (passwordLength > 16) {
        passwordLength = 15
        alert("Maximum length is 16 characters")
    }
}

