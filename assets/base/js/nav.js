// Variables
const navToggler = document.getElementById('nav-toggler');
const darkBgNav = document.getElementById('dark-bg-of-nav');
const nav = document.getElementById('nav');
const navCloseBtn = document.getElementById('nav-close-btn');

// A Function That Sets Value Of Attribute Of 'data-opened' In Nav And Its Dark Bg To 'false'
function closeNav() {
    nav.setAttribute('data-opened', 'false')
    darkBgNav.setAttribute('data-opened', 'false')
    document.body.style.overflowY = 'visible'
}

// Adding Event Listener On Nav Toggle That Listens To Click And Sets Value Of Attribute Of 'data-opened' In Nav And Its Dark Bg To 'true'
navToggler.addEventListener('click', () => {
    nav.setAttribute('data-opened', 'true');
    darkBgNav.setAttribute('data-opened', 'true');
    document.body.style.overflowY = 'hidden'
})

// Adding Event Listener On Dark Bg And Close Button In Nav That They Listen To Click And Calls  'closeNav' Function
darkBgNav.addEventListener('click', () => closeNav())
navCloseBtn.addEventListener('click', () => closeNav())

window.addEventListener('keydown', (key) => {
    const clickedKey = key.key.toLowerCase();
    if (clickedKey === 'escape') {closeNav()}
})