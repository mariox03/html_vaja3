let catt = "";
function cat() {
catt = document.getElementById("catt").value;
}

function rezultat() {
    if (catt == "macka") {
        document.getElementById("rezultat").innerText = "wtf";
    }
}