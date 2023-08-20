"use stric";

const mq = matchMedia("(max-width: 500px)");

//Es equivalente a hacer un media query
console.log(mq);

//En caso que la dimension del vizualizador concuerde con las propiedades definidas devuelve true
console.log(mq.matches);

mq.addEventListener("change", ()=>{
    console.log("Resolucion cambiada");
});