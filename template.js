const lista = document.getElementById("lista");
const liTemplate = document.getElementById("liTemplate");

const clone = liTemplate.content.cloneNode(true);//clonando template

const span = clone.querySelector(".text-primary");

span.textContent = "agregado a través de un template";

console.log(clone);
