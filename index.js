let form = document.getElementById("sign-up");
let submit = document.querySelector(".create");
let passWords = document.querySelectorAll(".password");
let errorMessage = document.querySelector(".error-message")
let succesMessage = document.querySelector(".success-message")

function showErrorMessage(){
    errorMessage.style.display = "block";
    succesMessage.style.display = "none";
}

function removeErrorMessage(){
    errorMessage.style.display = "none";
    succesMessage.style.display = "block";
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