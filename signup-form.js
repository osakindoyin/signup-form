let firstName = document.getElementById('firstName');
let lastName = "";
let email = "";
let password = "";

document.querySelector('.btn').addEventListener("click", function(event){
    buttonClick(event.target.innerText);
})

function buttonClick(value){
    console.log(value != null);
    if (value != null) {
        validateForm();
    } else {
        return
    }
}

function validateForm() {
    console.log("now here")
    if (firstName === "") {  
        alert("Please provide your name");
        console.log('here')
        return false;
    }
}