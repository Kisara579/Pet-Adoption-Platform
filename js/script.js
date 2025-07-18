//login page valid 

function showMessage_Login(input,message,type){
    const msg = input.parentNode.querySelector(".small-login");
    msg.innerText = message;
    input.className = type ? "success-login" : "error-login";
    return type;
}

function showError_Login(input,message){
    return showMessage_Login(input,message,false);
}
function showSuccess_Login(input){
    return showMessage_Login(input,"",true);
}

function hasValue_Login(input,message){
    if(input.value.trim() === ""){
        return showError_Login(input,message);
    }
    return showSuccess_Login(input);
}

const login_form = document.getElementById("login-form");
const EMAIL_REQUIRED_LOGIN = "Please Enter Your Email";
const PASSWORD_REQUIRED_LOGIN = "Please Enter Your Password";

if(login_form){
    login_form.addEventListener("submit",function(event){
        event.preventDefault();

        const emailvalid = hasValue_Login(login_form.elements["login-email"],EMAIL_REQUIRED_LOGIN);
        const passwordvalid  = hasValue_Login(login_form.elements["login-password"],PASSWORD_REQUIRED_LOGIN);

        if(emailvalid && passwordvalid){
            alert("Login Successfully");
        }
    })
}