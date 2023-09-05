//createElement : crea un nuevo elemeto (nodo) usando el tag name

const lista = document.querySelector('#lista');
console.log(lista);
const arrayFrutas = ["Manzana","Naranja","Kiwi"];



// arrayFrutas.forEach( fruta => {
//     const li = document.createElement('li');
//     li.textContent = fruta;
//     lista.appendChild(li);
//     console.log(fruta);
// });


//fragment para evitar reflow, porque no forma parte del DOM hasta que se inyecto con un appendChild

const fragment = document.createDocumentFragment(); //crea un fragmento, por asi decirlo un universo paralelo donde guardar cosas 
arrayFrutas.forEach( fruta => {
    const li = document.createElement('li');
    li.textContent = fruta;
    fragment.appendChild(li);
    console.log(fruta);
});

lista.appendChild(fragment); //cosas q me vuelan la cabeza 🤯