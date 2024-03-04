
let email = "kurtdl133@gmail.com";
let password = "12345";

let subEmail, subPassword;

function verify(){
    subEmail = document.getElementById("email").value;
    subPassword = document.getElementById("password").value;


    if(subEmail == email){
        if(subPassword == password){
            document.getElementById("status").textContent = "Login Succesfully";
        }
        else{
            document.getElementById("status").textContent = "Wrong Password";

        }
    } else{
        document.getElementById("status").textContent = "Wrong Email";

    }
}
