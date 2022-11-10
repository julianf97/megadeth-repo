
// ESTE ARCHIVO JAVASCRIPT NO CUENTA PARA EL PROYECTO FINAL

const iconoBarras = document.getElementById("iconobarras");
const iconoCarrito = document.getElementById("iconocarrito");
const contenedorMenuStore = document.getElementById("contenedormenustore");
const bodyStore = document.getElementById("bodystore");

iconoBarras.addEventListener("click", () => {
    
    contenedorMenuStore.classList.toggle('open-menu-store');

})

const salirMenuStore = () => {
    document.addEventListener('click', (event) => {
        const boolIsOutside3 = document.getElementById("contenedormenustore").isSameNode(event.target);

        if (boolIsOutside3) {
            contenedorMenuStore.classList.remove('open-menu-store');
        }
    })
}


salirMenuStore();
