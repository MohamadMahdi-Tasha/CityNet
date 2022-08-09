// Creating Date pickers For Ids
const myDatePicker1 = MCDatepicker.create({el: '#first-date',})
const myDatePicker2 = MCDatepicker.create({el: '#second-date',})
const myDatePicker3 = MCDatepicker.create({el: '#third-date',})
const myDatePicker4 = MCDatepicker.create({el: '#fourth-date',})
const myDatePicker5 = MCDatepicker.create({el: '#fifth-date',})
const myDatePicker6 = MCDatepicker.create({el: '#six-date',})
const myDatePicker7 = MCDatepicker.create({el: '#seven-date',})
const myDatePicker8 = MCDatepicker.create({el: '#eight-date',})
const myDatePicker9 = MCDatepicker.create({el: '#nine-date',})
const myDatePicker10 = MCDatepicker.create({el: '#ten-date',})
const myDatePicker11 = MCDatepicker.create({el: '#eleven-date',})
const myDatePicker12 = MCDatepicker.create({el: '#twelve-date',})
const myDatePicker13 = MCDatepicker.create({el: '#thirteen-date',})

// Variables
const removeButtons = document.querySelectorAll('.remove-button.can-delete');
const addRouteBtn = document.querySelectorAll('.add-route-btn');
const moreWaysItem3 = document.getElementById('more-ways-item-3');
const moreWaysItem4 = document.getElementById('more-ways-item-4');

// Adding Event Listener On Each Remove Button That Can Replaces Class Name Of 'd-flex' To 'd-none';
removeButtons.forEach(item => item.addEventListener('click', () => item.parentElement.parentElement.classList.replace('d-flex', 'd-none')))

// Adding event Listener On Each Add Route Button That Listens To Click And If Third Item Which Is Invisible Contains Class Of 'd-none' Then Replace It With 'd-flex'
// And If Fourth Items Is Invisible Again Replace 'd-none' Of It To 'd-flex'
addRouteBtn.forEach(item => {
    item.addEventListener('click', () => {
        if (moreWaysItem3.classList.contains('d-none')) {moreWaysItem3.classList.replace('d-none', 'd-flex');}
        else if (moreWaysItem4.classList.contains('d-none')) {moreWaysItem4.classList.replace('d-none', 'd-flex');}
    })
})