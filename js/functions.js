function validaFormularioContato() {
    var number = document.getElementById("number").value;

    if(number.length < 8) {
        document.getElementById("success").innerHTML = ""
        document.getElementById("error").innerHTML = "Invalid fields.";
        document.getElementById("contactForm").reset();
        return false;
    } else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("success").innerHTML = "Thanks for your contact!"
        return true;
    }
}