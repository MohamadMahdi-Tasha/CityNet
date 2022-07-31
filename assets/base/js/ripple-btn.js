// A Function That Creates Inner Span In Ripple Buttons And Makes Ripple Effect
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

    if (ripple) {ripple.remove()}

    button.appendChild(circle);
}

// Adding Event Listener On Each Button With Class Of ripple-button That Listens For Click And Calls createRipple Function
document.querySelectorAll('button.ripple-button').forEach(btn => btn.addEventListener("mousedown", createRipple))