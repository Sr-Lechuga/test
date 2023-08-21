"use stric";

const mq = matchMedia("(max-width: 700px)");
let caja = document.querySelector(".caja");

//Es equivalente a hacer un media query
// console.log(mq);

//En caso que la dimension del vizualizador concuerde con las propiedades definidas devuelve true
// console.log(mq.matches);

mq.addEventListener("change", ()=>{
    console.log("Resolucion cambiada");
    if(mq.matches){
        caja.classList.replace("caja","responsive-caja");
        caja = document.querySelector(".responsive-caja")
    }
    else{
        caja.classList.replace("responsive-caja","caja");
        caja = document.querySelector(".caja");
    }
});