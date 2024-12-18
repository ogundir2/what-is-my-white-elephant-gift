answers = [[],[],[]]
let intentForm1 = document.querySelector("#intent-form-1 .form-div-1");
let intentForm2 = document.querySelector("#intent-form-2 .form-div-1");
let intentForm3 = document.querySelector("#intent-form-3 .form-div-1");
let form1Next = document.querySelector("#intent-form-1 .form-div-2 .next-button");
let form2Next = document.querySelector("#intent-form-2 .form-div-2 .next-button");
let form3Next = document.querySelector("#intent-form-3 .form-div-2 .next-button");
let form2Back = document.querySelector("#intent-form-2 .form-div-2 .back-button");
let form3Back = document.querySelector("#intent-form-3 .form-div-2 .back-button");
let form4Back = document.querySelector("#intent-form-4 .form-div-2 .back-button");

function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function getFormInputs(intentForm) {
    let checkedArray = [];
    intentForm.querySelectorAll("input").forEach(node => {
        if (node.checked) {
            checkedArray.push(1)
        } else {
            checkedArray.push(0)
        }
    })
    return checkedArray;
}

function validateIntent(arr) {
    if(arr[0][1] >= 1) {
        if(arr[1][0] >= 1) {
            if(arr[2][3] >= 1) {
                return true;
            }
        }
    }

    return false;
}

form1Next.addEventListener("mouseover", (e) => {
    checkedArray = getFormInputs(intentForm1);
    if (sum(checkedArray) != 0) {
        form1Next.classList.add("next-button-active");
    } else {
        form1Next.classList.remove("next-button-active")
    }
});

form2Next.addEventListener("mouseover", (e) => {
    checkedArray = getFormInputs(intentForm2);
    if (sum(checkedArray) != 0) {
        form2Next.classList.add("next-button-active");
    } else {
        form2Next.classList.remove("next-button-active")
    }
});

form3Next.addEventListener("mouseover", (e) => {
    checkedArray = getFormInputs(intentForm3);
    if (sum(checkedArray) != 0) {
        form3Next.classList.add("next-button-active");
    } else {
        form3Next.classList.remove("next-button-active")
    }
});

form1Next.addEventListener("click", (e) => {
    e.preventDefault();
    checkedArray = getFormInputs(intentForm1);

    if (sum(checkedArray) != 0) {
        answers[0] = checkedArray;
        document.querySelector("#intent-form-1").style.display = "none";
        document.querySelector("#intent-form-2").style.display = "block";
        document.querySelector("#intent-form-1 .form-div-1 h5").style.display = "none";
        console.log(answers)
    } else {
        document.querySelector("#intent-form-1 .form-div-1 h5").style.display = "block";
    }
});

form2Next.addEventListener("click", (e) => {
    e.preventDefault();
    checkedArray = getFormInputs(intentForm2);

    if (sum(checkedArray) != 0) {
        answers[1] = checkedArray;
        document.querySelector("#intent-form-2").style.display = "none";
        document.querySelector("#intent-form-3").style.display = "block";
        document.querySelector("#intent-form-2 .form-div-1 h5").style.display = "none";
        console.log(answers)
    } else {
        document.querySelector("#intent-form-2 .form-div-1 h5").style.display = "block";
    }
});

form3Next.addEventListener("click", (e) => {
    e.preventDefault();
    checkedArray = getFormInputs(intentForm3);

    if (sum(checkedArray) != 0) {
        answers[2] = checkedArray;

        if (validateIntent(answers)) {
            console.log(window.location);
            window.location.pathname = "puzzle.html";
        }
        document.querySelector("#intent-form-3").style.display = "none";
        document.querySelector("#intent-form-4").style.display = "block";
        document.querySelector("#intent-form-3 .form-div-1 h5").style.display = "none";
        console.log(answers)
    } else {
        document.querySelector("#intent-form-3 .form-div-1 h5").style.display = "block";
    }
});

form2Back.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#intent-form-2").style.display = "none";
    document.querySelector("#intent-form-1").style.display = "block";
});

form3Back.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#intent-form-3").style.display = "none";
    document.querySelector("#intent-form-2").style.display = "block";
});

form4Back.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#intent-form-4").style.display = "none";
    document.querySelector("#intent-form-3").style.display = "block";
});