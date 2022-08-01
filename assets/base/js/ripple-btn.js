// A Function That Creates Ripple Inside Clicked Button
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const ripple = button.getElementsByClassName("ripple")[0];

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    if (ripple) {ripple.remove();}
    button.appendChild(circle);
}

// Adding Event Listener Of Mousedown On Each Ripple Button That Calls createRipple Function On Button
document.querySelectorAll('.ripple-btn').forEach(btn => btn.addEventListener('mousedown', createRipple))