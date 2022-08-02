const plusBtn =  document.querySelectorAll('.plus-btn');
const minusBtn =  document.querySelectorAll('.minus-btn');
const intractiveInputComponentCounter = document.querySelectorAll('.intractive-input-component.counter');

// Adding Event Listener Of Click To Each Component That Holds Counter That Listens To Click And Then  Adds Class Of 'focused' To Component
intractiveInputComponentCounter.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('focused');
    })
})

// Adding Event Listener On Each Plus Button That Listens To Click And Then Checks If Value Is Not 9.
// If Its Not Then Adds 1 To Number On Every Click And Shows Content Of It.
plusBtn.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.nextElementSibling;
        let currentValue  = Number(item.nextElementSibling.textContent);

        if (currentValue !== 9) {currentValue ++;}
        number.textContent = currentValue;
    })
})

// Adding Event Listener On Each Minus Button That Listens To Click And Then Checks If Value Is Not 0.
// If Its Not Then Reduces 1 from Number On Every Click And Shows Content Of It.
minusBtn.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.previousElementSibling;
        let currentValue  = Number(item.previousElementSibling.textContent);

        if (currentValue !== 0) {currentValue --;}
        number.textContent = currentValue;
    })
})

// Adding EventListener On Counter That Listens To Click And Adds Given Numbers In Counter To Each Other And Shows Total In Component Of It.
intractiveInputComponentCounterCounter.addEventListener('click', () => {
    const newBornNum = document.getElementById("new-born-num").textContent;
    const babyNum = document.getElementById("baby-num").textContent;
    const adultNum = document.getElementById("adult-num").textContent;
    const passengerNumber = document.getElementById('passenger-number');

    passengerNumber.textContent = Number(newBornNum) + Number(babyNum) + Number(adultNum);
})

// Adding Event Listner Of 'change' Which Is Simply When Element Changes (Mostly Value Of It) Then Shows Value Of Select
// Input Of Counter In Component
document.getElementById('select-class').addEventListener('change', () => {
    const passengerType = document.getElementById('passenger-type');
    passengerType.textContent = document.getElementById('select-class').value;
})