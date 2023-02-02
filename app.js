const confirmPwdInput = document.getElementById("c-pwd");
const pwdInput = document.getElementById("pwd");

//on keyup return the values for pwd and c-pwd

confirmPwdInput.addEventListener("keyup", compare);

//if they are different and the class doesn't exist, add ".match-error" class to the c-pwd div
//if they are the same and .match-error exists then remove .match-error class

function compare(e) {
    console.log(pwdInput.value);
    console.log(e.target.value);
    console.log(e.target.classList.contains("match-error"))
    if (pwdInput.value == e.target.value && e.target.classList.contains("match-error")) {
        //remove error class
        console.log("remove class")
        confirmPwdInput.classList.remove("match-error");
        e.target.setCustomValidity("");
    } else if (pwdInput.value != e.target.value && !e.target.classList.contains("match-error")) {
        //add error class
        console.log("add class")
        confirmPwdInput.classList.add("match-error");
        e.target.setCustomValidity("The password fields don't match");
    } else {
        //do nothing
        console.log("return")
        return
    }
}

