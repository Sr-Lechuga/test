"use stric";
const cajas = document.querySelectorAll(".caja");

verifyVisibility = (entries) => {
    // const entry = entries[0];
    // console.log(entry.isIntersecting);

    // There could be many entries since could be observing multiple elements in the page
    for(entry of entries){
        if(entry.isIntersecting) console.log(`Se esta viendo la caja ${entry.target.textContent}`)
    }
}

const observer = new IntersectionObserver(verifyVisibility);

// observer.observe(caja03);

//Each caja es a reference to an html element of class caja
for (const caja of cajas){
    //Set the observer, to observe each one of the boxes
    observer.observe(caja);
}