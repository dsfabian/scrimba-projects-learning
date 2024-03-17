/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

unitNumInput = document.getElementById('unit-number-input')
convertBtn = document.getElementById('convert-btn')

lengthParagraph = document.getElementById('length-p')
volumeParagraph = document.getElementById('volume-p')
massParagraph = document.getElementById('mass-p')

convertBtn.addEventListener('click', function(){
    
    const valueNum = Number(unitNumInput.value)
    
    //console.log(valueNum)
    
    const lengthText = `${valueNum} meters = ${(valueNum * 3.281).toFixed(2)} feet | ${valueNum} feet = ${(valueNum / 3.281).toFixed(2)} meters`
    const volumeText = `${valueNum} liters = ${(valueNum * 0.264).toFixed(2)} gallons | ${valueNum} gallons = ${(valueNum / 0.264).toFixed(2)} liters`
    const massText = `${valueNum} kilos = ${(valueNum * 2.204).toFixed(2)} pounds | ${valueNum} pounds = ${(valueNum / 2.204).toFixed(2)} kilos`
    
    //console.log(lengthParagraph)
    
    lengthParagraph.textContent = lengthText
    volumeParagraph.textContent = volumeText
    massParagraph.textContent = massText
    
})

