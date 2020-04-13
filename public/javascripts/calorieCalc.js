function getInputValue() {
    var inputVal = document.getElementById("calInput").value;
    var calCount = document.getElementById("calRemain").value;
    if (!isNaN(inputVal)){
        var newVal = calCount - inputVal;
        document.getElementById("calRemain").value = (newVal); 
    } else {
        document.getElementById("calRemain").value = "error";
    }
}
