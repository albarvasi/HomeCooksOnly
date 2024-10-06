function clickFunction(){
    var firstname = document.getElementsByClassName("firstName-input")[0].value;
    var lastname = document.getElementsByClassName("lastName-input")[0].value;
    var email = document.getElementsByClassName("email-input")[0].value;
    const password = document.getElementsByClassName("Password-input")[0].value;
    var confirmpass = document.getElementsByClassName("confirmpass-input")[0].value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errorMessage = document.getElementById('error-message');

    if(firstname === ""|| lastname === ""|| email === ""|| password === ""|| confirmpass === "")
    {
        alert("All or some required fields are empty! Please enter valid values!!!");
    }
    else if(password !== confirmpass)
    {
        alert("Passwords do not match! Please check and re-enter valid values");
    }
    else if( password.length < 5)
    {

        alert("Password length less than 5. Add more characters");

    }
    else if(!emailPattern.test(email))
    {
        alert("Email format incorrect! Please enter a valid email address (e.g., abc@abc.com).")
    }
    else
    {
        alert("Database connection error");
    }
};

function clearFields(){
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input)
    {
        input.value = "";
    });
};