function sendInfo(){
    var firstname = document.getElementById("first").value
    var lastname = document.getElementById("last").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value

    console.log(firstname + " " + lastname + ", " + email + ", " + message);
};