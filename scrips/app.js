'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//caundo hago click en todos los puntos 
  //saber posicion ede los puntos
  //aplicar un transform translater al grande
  //quitar la calse activo dde todos los puntos
  //añadir la clase activo con un click
setInterval ((cadaGrande , i) => {
    let posicion = i
    let operacion = posicion * -50

    grande.style.transform = `translateX(${ operacion }%)`
    
   

},3000);
