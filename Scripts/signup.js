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