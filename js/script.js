var spinnerNod = document.getElementById("spinner");

document.addEventListener("DOMContentLoaded", function(){
    spinnerNod.classList.add("is-shown");
});

setTimeout(function(){
    spinnerNod.classList.remove("is-shown");
}, 700);