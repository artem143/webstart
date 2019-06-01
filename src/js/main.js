var button = document.querySelector("#button");
var modal = document.querySelector("#modal");
var close = document.querySelector("#close");

button.addEventListener("click", function() {
    modal.classList.add("modal_active");
})

close.addEventListener("click", function() {
    modal.classList.renove("modal_active");
})