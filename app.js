"use strict";

function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
  //   document
  //     .querySelector(".notification")
  //     .classList.remove("notification_hidden");
  document.querySelector(".notification").getAttribute("class");
  document.querySelector(".notification").setAttribute("class", "notification");
}

function inputChaged(e) {
  if (e.code == "Enter") {
    submitForm();
  }
}

// console.log(document.querySelector(".one").innerText);
// console.log(document.querySelector(".one ~ div").innerText);

console.log(document.querySelectorAll('.one')[0].innerText);
console.log(document.querySelector("#two").innerText);
console.log(document.querySelector("[user-id='4']").innerText);
