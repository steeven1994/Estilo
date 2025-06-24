
document.addEventListener('DOMContentLoaded', () => {

    const miBoton = document.getElementById('miBoton');
    const elementoCambiar = document.getElementById('elementoCambiar');

   
    miBoton.addEventListener('click', () => {
       
        elementoCambiar.classList.toggle('color-cambiado');

    });
});