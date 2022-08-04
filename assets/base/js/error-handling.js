// Variables
const oneWaySubmitBtn = document.getElementById('one-way-submit-btn');
const intractiveInputComponentTopSide1 = document.getElementById('intractive-input-component-top-side-1');
const intractiveInputComponentTopSide2 = document.getElementById('intractive-input-component-top-side-2');
const intractiveInputComponentTopSide3 = document.getElementById('intractive-input-component-top-side-3');
const intractiveInputComponentTopSide4 = document.getElementById('intractive-input-component-top-side-4');
const convertedDated = new Date(Date.parse(intractiveInputComponentTopSide3.lastElementChild.value.replace(/-/g, " ")))

// A Function That Checks If Given Date Is Before Today And Returns True Or False
const isDateBeforeToday = date => new Date(date.toDateString()) < new Date(new Date().toDateString());

// A Function That Adds Class Of 'errored' To First Given Element And Class Of 'show' To Second Given Element And
// Sets Content Of third Given Element To Given Text
function handleError(element, element2, element3, text) {
    element.classList.add('errored');
    element2.classList.add('show')
    element3.textContent = text
}

// Adding Event Listener To One Way Page Submit Button That Handles Errors If There Is Error, Otherwise Sends Data
oneWaySubmitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!intractiveInputComponentTopSide1.lastElementChild.classList.contains('selected-location')) {
        handleError(
            intractiveInputComponentTopSide1,
            intractiveInputComponentTopSide1.parentElement.nextElementSibling,
            intractiveInputComponentTopSide1.parentElement.nextElementSibling.firstElementChild,
            'مبدا الزامی می باشد'
        );
    }
    if (!intractiveInputComponentTopSide2.lastElementChild.classList.contains('selected-location')) {
        handleError(
            intractiveInputComponentTopSide2,
            intractiveInputComponentTopSide2.parentElement.nextElementSibling,
            intractiveInputComponentTopSide2.parentElement.nextElementSibling.firstElementChild,
            'مقصد الزامی می باشد'
        );
    }
    if (intractiveInputComponentTopSide1.lastElementChild.firstElementChild.textContent === intractiveInputComponentTopSide2.lastElementChild.firstElementChild.textContent)  {
        handleError(
            intractiveInputComponentTopSide1,
            intractiveInputComponentTopSide1.parentElement.nextElementSibling,
            intractiveInputComponentTopSide1.parentElement.nextElementSibling.firstElementChild,
            'مبدا و مقصد نمیتوانند یکی باشند'
        );
        handleError(
            intractiveInputComponentTopSide2,
            intractiveInputComponentTopSide2.parentElement.nextElementSibling,
            intractiveInputComponentTopSide2.parentElement.nextElementSibling.firstElementChild,
            'مبدا و مقصد نمیتوانند یکی باشند'
        );
    }
    if (isDateBeforeToday(convertedDated)) {
        handleError(
            intractiveInputComponentTopSide3,
            intractiveInputComponentTopSide3.nextElementSibling,
            intractiveInputComponentTopSide3.nextElementSibling.firstElementChild,
            "تاریخ قبل از امروز ؟"
        )
    }
    if (intractiveInputComponentTopSide3.lastElementChild.value === "") {
        handleError(
            intractiveInputComponentTopSide3,
            intractiveInputComponentTopSide3.nextElementSibling,
            intractiveInputComponentTopSide3.nextElementSibling.firstElementChild,
            "تاریخ  الزامی میباشد"
        )
    }
    if (Number(intractiveInputComponentTopSide4.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.textContent) > 9) {
        handleError(
            intractiveInputComponentTopSide4.firstElementChild,
            intractiveInputComponentTopSide4.nextElementSibling,
            intractiveInputComponentTopSide4.nextElementSibling.firstElementChild,
            "تعداد افراد نمیتواند بیش تر از 9 نفر باشد"
        )
    }
    if (Number(intractiveInputComponentTopSide4.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.textContent) === 0) {
        handleError(
            intractiveInputComponentTopSide4.firstElementChild,
            intractiveInputComponentTopSide4.nextElementSibling,
            intractiveInputComponentTopSide4.nextElementSibling.firstElementChild,
            "تعداد افراد نمیتواند 0 نفر باشد"
        )
    }
})