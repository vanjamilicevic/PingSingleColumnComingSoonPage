let email = document.getElementById("mail")
let error_text = document.getElementById("error-text")
let button = document.getElementById("button")

function validateEmail(mail) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
}

button.addEventListener("click", () => {
    if(!validateEmail(email.value)) {
        email.classList.add("error-class")
        error_text.classList.remove("not-visible")
    } else {
        email.classList.remove("error-class")
        error_text.classList.add("not-visible")
    }
})