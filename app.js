/* 
<li class="list">
<b>Fruta</b>
<span class="text-primary"> Aquí va la fruta</span>
</li> 
*/

const lista = document.querySelector('#lista');
console.log(lista);
const arrayFrutas = ["Manzana","Naranja","Kiwi"];
const fragment = document.createDocumentFragment();


// arrayFrutas.forEach(fruta=>{
//   const li = document.createElement('li');
//   li.className = "list";

//   const b = document.createElement('b');
//   b.textContent = "Fruta: ";

//   const span = document.createElement('span');
//   span.className = "text-primary";
//   span.textContent = fruta;

//   li.appendChild(b);
//   li.appendChild(span);
  
// s
//   console.log(li);

//   fragment.appendChild(li);
  
// });

// lista.appendChild(fragment);