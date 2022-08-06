// Variables
const homeFlightInnerPageToggler = document.querySelectorAll('.home-flight-inner-page-toggler');
const topSidePageButtons = document.querySelectorAll('.top-side-page-buttons');

// Adding Event Listener On Each 'homeFlightInnerPageToggler's That Listens To Click And Reads Attribute Of 'data-target' Of It
// And Then Gets It By 'document.getElementById' Method. Then Replaces Class Of 'current' With 'd-none'  On Element That Have Class Of
// 'home-flight-inner-page current' And Then Replaces d-none With current Class Names In Clicked Item.
homeFlightInnerPageToggler.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const target = document.getElementById(targetId);
        document.querySelector('.home-flight-inner-page.current').classList.replace('current', 'd-none');
        target.classList.replace('d-none', 'current');
    })
})

// Adding Event Listener On Each Top Side Buttons That Listens To Click And Removes Active Class Name From Top Side Buttons That Have It
// Then Replaces 'current' ClassName With 'd-none' In Current Bottom Page That Is Showing And Replaces 'd-none' To 'current' In Target Of
// Clicked Button Then Adds Active To Clicked Button
topSidePageButtons.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        const target = document.getElementById(targetId);
        const activeTopSideButton = document.querySelector('.top-side-page-buttons.active');
        const bottomPageCurrent = document.querySelector('.bottom-page.current');

        activeTopSideButton.classList.remove('active');
        bottomPageCurrent.classList.replace('current', 'd-none');
        target.classList.replace('d-none', 'current');
        item.classList.add('active');
    })
})