// Variables
const homeFlightInnerPageToggler = document.querySelectorAll('.home-flight-inner-page-toggler');

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