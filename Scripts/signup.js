function clickFunction(){
    var firstname = document.getElementsByClassName("firstName-input")[0].value;
    var lastname = document.getElementsByClassName("lastName-input")[0].value;
    var email = document.getElementsByClassName("email-input")[0].value;
    var password = document.getElementsByClassName("Password-input")[0].value;
    var confirmpass = document.getElementsByClassName("confirmpass-input")[0].value;

    if(firstname === ""|| lastname === ""|| email === ""|| password === ""|| confirmpass === "")
    {
        alert("You missed a field! Please enter valid values!!!");
    }
    else if(password !== confirmpass)
    {
        alert("Passwords do not match! Please check and re-enter valid values");
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