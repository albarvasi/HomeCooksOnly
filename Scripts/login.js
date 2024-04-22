function onlogin(){
    var password = document.getElementsByClassName("password")[0].value;
    var email = document.getElementsByClassName("email")[0].value;
    if(email === "" && password === "")
    {
        alert("Email and Password field cannot be empty! Please enter a value");
    }
    else if (email === "") {
        alert("Email cannot be empty! Please enter a valid email!!");
    }
    else if (email.indexOf('@') === -1) {
        alert("Email should contain @. Please enter a valid email");
    }
    else if (password === "")
    {
        alert("Password cannot be empty! Please enter a valid password");
    }
    else{
        alert("Database connection error!!");
    }
};