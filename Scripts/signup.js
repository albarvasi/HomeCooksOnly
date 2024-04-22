function clickFunction(){
    alert("Database connection error");
};

function clearFields(){
    var inputs = document.querySelectorAll("input");
    inputs.forEach(function(input)
    {
        input.value = "";
    });
};

// function phoneNumber(){
//     var phoneNumber = document.getElementsByClassName("phone-input");
//     if(phoneNumber === "+1")
//     {
//         alert("It is an American Phone Number");
//     }
// };