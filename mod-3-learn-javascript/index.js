
// ====================================
// Number of clicks (Processing events)
// ====================================

const counterH2 = document.getElementById("counter")
let count = 0

const incrementBtn = document.getElementById('increment-btn')

incrementBtn.addEventListener('click', function(){
    count++
    
    if (count < 5) {
        counterH2.innerText = count + ' (low)'
    } else if (count < 10) {
        counterH2.innerText = count + ' (medium)'
    } else {
        counterH2.innerText = count + ' (high)'
    }
})


// ================================
// Adding HTML elements dynamically
// ================================

const newElementInput = document.getElementById('newelement-input')
const newElementButton = document.getElementById('newelement-btn')
const elementList = document.getElementById('element-list')

newElementButton.addEventListener('click', function(){

    elementList.innerHTML += `
        <li>
            ${newElementInput.value}
        </li>
    `

})

// ==============================
// Saving things to local storage
// ==============================

const localStorageSaveBtn = document.getElementById('localstorage-save-btn')
const localStorageClearBtn = document.getElementById('localstorage-clear-btn')
const localStorageDisplayBtn = document.getElementById('localstorage-display-btn')

const keyInput = document.getElementById('key-input')
const valueInput = document.getElementById('value-input')
const displayHeader = document.getElementById('display-h1')

localStorageSaveBtn.addEventListener('click', function(){
    console.log('saving values...')
    const keyText = keyInput.value
    const valueText = valueInput.value
    localStorage.setItem(keyText, valueText)
})

localStorageClearBtn.addEventListener('click', function(){
    localStorage.clear()
})

localStorageDisplayBtn.addEventListener('click', function(){
    
    const keyText = keyInput.value
    const displayValue = localStorage.getItem(keyText)

    displayHeader.textContent = displayValue
})


// ===================================================
// Saving Arrays to Local Storage and Pulling Them Out
// ===================================================

let arrayVals = []

const arrayInput = document.getElementById('array-add-input')
const arrayAddBtn = document.getElementById('array-add-btn')
const saveArrayBtn = document.getElementById('save-array-btn')
const parseArrayBtn = document.getElementById('parse-array-btn')
const parseArrayHeader = document.getElementById('parse-array-h1')

arrayAddBtn.addEventListener('click', function(){
    arrayVals.push(arrayInput.value)
    console.log(arrayVals)
})

saveArrayBtn.addEventListener('click', function(){
    localStorage.setItem("items", JSON.stringify(arrayVals))
})

parseArrayBtn.addEventListener('click', function(){
    
    let storageItems = JSON.parse(localStorage.getItem('items'))

    if(storageItems){ // CHECKS TO SEE IF THE VARIABLE IS NULL (FALSEY) OR NOT NULL (TRUTHY)
        parseArrayHeader.textContent = storageItems + ' -- ' + + typeof JSON.parse(localStorage.getItem('items'))
    } else {
        parseArrayHeader.textContent = 'no items in local storage'
    }
    
    console.log( JSON.parse(localStorage.getItem('items')) )
})

//localStorage.setItem("names", JSON.stringify(names));
//var storedNames = JSON.parse(localStorage.getItem("names"));



// =================================================
// Example of template string (like python fstrings)
// =================================================

const nameInput = document.getElementById('name-input')
const ageInput = document.getElementById('age-input')
const templateBtn = document.getElementById('showtemplate-btn')
const templateHeader = document.getElementById('displaytemplate-h1')

templateBtn.addEventListener('click', function(){
    const name = nameInput.value
    const age = ageInput.value

    templateHeader.textContent = `This is ${name} and he is ${age} years old!`
})
