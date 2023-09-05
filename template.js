const lista = document.getElementById("lista");
const liTemplate = document.getElementById("liTemplate");
// const clone = liTemplate.content.cloneNode(true);//clonando template
const arrayFrutas = ["Manzana","Naranja","Kiwi"];
const fragment = document.createDocumentFragment();



arrayFrutas.forEach(fruta => {

    const clone = liTemplate.content.cloneNode(true)
    clone.querySelector(".text-primary").textContent = fruta;
    fragment.appendChild(clone);

});

lista.appendChild(fragment);
