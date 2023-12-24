"use strict";

// document.querySelector('.button').addEventListener('click', function() {
//     const input = document.querySelector('.input').value;
//     if (!input) {
//         return;
//     }
//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

function submitForm() {
  const input = document.querySelector(".input").value;
  if (!input) {
    return;
  }
  document.querySelector(".panel").innerText = input;
  document.querySelector(".input").value = "";
  document
    .querySelector(".notification")
    .classList.remove("notification_hidden");
}

function inputChaged(e) {
  if (e.code == "Enter") {
    submitForm();
  }
};
