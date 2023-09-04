//createElement : crea un nuevo elemeto (nodo) usando el tag name

const lista = document.querySelector('#lista');
console.log(lista);
const arrayFrutas = ["Manzana","Naranja","Kiwi"];

arrayFrutas.forEach( fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    lista.appendChild(li);
    console.log(fruta);
});
