let button = document.getElementById("reveal-gift-button");
const rect = button.getBoundingClientRect()
let width = rect.width;
let height = rect.height;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}
function randomChoice(val1, val2) {
    return Math.random() > 0.5 ? val1 : val2;
}

button.addEventListener("mouseover", (e) => {
    let rect = button.getBoundingClientRect()
    console.log(rect);
    let newPos = [0,0];

    if (rect.x <= width + 5) {
        newPos[0] = windowWidth/20;
    } else if (rect.x >= (windowWidth - width - 5)) {
        newPos[0] = windowWidth/20;;
    } else {
        lower = (rect.x - width - 2)/10
        upper = (rect.x + width + 1)/10
        console.log(lower, upper);
        newPos[0] = randomChoice(lower, upper);
    }

    if (rect.y <= height + 5) {
        newPos[1] = windowHeight/20;
    } else if (rect.y >= (windowHeight - height - 5)) {
        newPos[1] = windowHeight/20;
    } else {
        lower = (rect.y - height - 2)/10
        upper = (rect.y + height + 1)/10
        console.log(lower, upper);
        newPos[1] = randomChoice(lower, upper);
    }
    button.style.left = newPos[0]+'rem';
    button.style.top = newPos[1]+'rem';
    rect = button.getBoundingClientRect()
    console.log(rect);
})

button.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.pathname = "gift.html";
})