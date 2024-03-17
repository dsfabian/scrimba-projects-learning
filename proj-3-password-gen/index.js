const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 0
let passwordOne = ''
let passwordTwo = ''

let passOneElement = document.getElementById('pass-option-one')
let passTwoElement = document.getElementById('pass-option-two')
let lengthElement = document.getElementById('password-length-input')

function generatePasswords() {
    
    passwordLength = lengthElement.value // store this runs length, can change across runs
    // resetting both password variables in case user runs multiple times
    passwordOne = '' 
    passwordTwo = ''
    // resetting both password boxes in case user runs multiple times
    passOneElement.textContent = ''
    passTwoElement.textContent = ''
    
    for(let i = 0; i < passwordLength; i++){
        let randomIndexOne = Math.floor( Math.random() * characters.length )
        let randomIndexTwo = Math.floor( Math.random() * characters.length )
        
        passwordOne += characters[randomIndexOne]
        passwordTwo += characters[randomIndexTwo]
    }
    
    passOneElement.textContent = passwordOne
    passTwoElement.textContent = passwordTwo
    
}


