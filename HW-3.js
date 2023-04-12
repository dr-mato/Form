function validate(){
    if(document.getElementById('cpassword').value!==document.getElementById('password').value){
        alert("passwords don't match");
        return false;
    }
}

function updateTextInput(val){
    let output=document.getElementById('rangeValue');
    output.innerText=val;
}


