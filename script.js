"use strict";

const buttonAdd = document.getElementById("btn-add");
const buttonClear = document.getElementById("btn-clear");
const container = document.getElementById("container");
const input = document.getElementById("input");

buttonAdd.addEventListener("click", function () {
  if (input.value !== "") {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "TASK: " + input.value;
    container.insertAdjacentElement("beforeend", paragraph);
    input.value = "";
  } else {
    alert("can't be empty!");
  }
});

buttonClear.addEventListener("click", function () {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});
