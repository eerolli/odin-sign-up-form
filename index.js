let form = document.getElementById("sign-up");
let submit = document.querySelector(".create");
let passWords = document.querySelectorAll(".password");
let errorMessage = document.querySelector(".error-message")

function showErrorMessage(){
    if (errorMessage.style.display === "none") {
        errorMessage.style.display = "block";
    }
}

function removeErrorMessage(){
    if (erroMessage.style.display === "block") {
        errorMessage.style.display = "none"
    }
}

function checkPswd(){
    let passWordOne = document.getElementById("password1").value;
    let passWordTwo = document.getElementById("password2").value;

    if (passWordTwo != passWordOne) {
        passWords.forEach(item => {
            item.classList.remove("success")
            item.classList.add("error");
        });

        showErrorMessage();
    }
    else if (passWordTwo == passWordOne) {
        passWords.forEach(item => {
            item.classList.remove("error")
            item.classList.toggle("success")
        })
        removeErrorMessage();
    }
}

submit.addEventListener('click', checkPswd);