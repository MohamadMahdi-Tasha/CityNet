const plusBtn =  document.querySelectorAll('.plus-btn');
const minusBtn =  document.querySelectorAll('.minus-btn');

plusBtn.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.nextElementSibling;
        let currentValue  = Number(item.nextElementSibling.textContent);

        if (currentValue !== 9) {currentValue ++;}
        number.textContent = currentValue;
    })
})

minusBtn.forEach(item => {
    item.addEventListener('click', () => {
        const number = item.previousElementSibling;
        let currentValue  = Number(item.previousElementSibling.textContent);

        if (currentValue !== 0) {currentValue --;}
        number.textContent = currentValue;
    })
})

intractiveInputComponentCounterCounter.addEventListener('click', () => {
    const newBornNum = document.getElementById("new-born-num").textContent;
    const babyNum = document.getElementById("baby-num").textContent;
    const adultNum = document.getElementById("adult-num").textContent;
    const passengerNumber = document.getElementById('passenger-number');

    passengerNumber.textContent = Number(newBornNum) + Number(babyNum) + Number(adultNum);
})

document.getElementById('select-class').addEventListener('change', () => {
    const passengerType = document.getElementById('passenger-type');
    passengerType.textContent = document.getElementById('select-class').value;
})