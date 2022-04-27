﻿
let toggleActive = (event) => event.target.parentNode.classList.toggle("active");

document.querySelectorAll(".textInput").forEach(input => {
    console.log(input);
    input.addEventListener("focusin", toggleActive);
    input.addEventListener("focusout", toggleActive);
});