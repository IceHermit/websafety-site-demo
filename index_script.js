function update_form(){
    if (document.getElementById("hs-cover-with-gradient-form-name-1").value != "")
        document.getElementById("proceed").disabled = false;
    else
        document.getElementById("proceed").disabled = true;
}

function load_main(){
    window.location.href = "main.html";
}