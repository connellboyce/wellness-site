function getInputValue() {
    var inputVal = document.getElementById("calorieInput").value;
    var calCount = document.getElementById("caloriesRemaining").value;
    if (!isNaN(inputVal)){
        var newVal = calCount - inputVal;
        document.getElementById("caloriesRemaining").value = (newVal); 
    } else {
        document.getElementById("caloriesRemaining").value = "error";
    }
}
