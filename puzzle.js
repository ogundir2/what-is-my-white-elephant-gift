function validatePuzzle() {
    let answers = document.querySelectorAll(".puzzle-div");
    valid = true;
    answers.forEach(ans => {
        if(ans.querySelector("input").value.toLowerCase() != ans.querySelector("input").name) {
            ans.querySelector("input").style.borderColor = "red";
            valid = false;
        } else {
            ans.querySelector("input").style.borderColor = "black";
        }
    })
    return valid;
}

document.querySelectorAll(".puzzle-div").forEach(elem => {
    console.log(elem);
    elem.querySelector("input").addEventListener("focus", (e) => {
        elem.querySelector("input").style.borderColor = "black";
    })
})

let submitPuzzleButton = document.querySelector("#puzzle button");
submitPuzzleButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validatePuzzle()) {
        document.querySelector("#puzzle h5").style.display = "none";
        window.location.pathname = "button.html";
        return
    } else {
        document.querySelector("#puzzle h5").style.display = "block";
    }
})