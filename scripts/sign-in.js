// form
const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});


// form validation
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px 0px 20px 0px";
    error_message.style.color = "red";

    var text;
    if (username.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (password.length < 8) {
        // return .test(password);
        text = "Please Enter valid password";
        error_message.innerHTML = text;
        return false;
    }
    alert("Successfully LogIn!");
    return true;
}

// fogot passwort
function fogot() {
    window.location.replace("contact.html");
}