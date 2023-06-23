const menu = document.querySelector(".hamburguesa");
const navegacion = document.querySelector(".navegacion")


document.addEventListener("DOMContentLoaded", ()=>{
  eventos()
})

const eventos = () =>{
  menu.addEventListener("click", abrirMenu)
}

const abrirMenu = () =>{
  navegacion.classList.remove("ocultar");
  botonCerrar();
}

const botonCerrar = () =>{
  const btnCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  overlay.classList.add("pantalla-completa");
  const body=document.querySelector("body");
  if(document.querySelectorAll(".pantalla-completa").length >0) return;
  body.appendChild(overlay);
  btnCerrar.textContent = "x";
  btnCerrar.classList.add("btn-cerrar");

  //while(navegacion.children[5]){
    //navegacion.removeChild(navegacion.children[5])
  //}
  console.log(navegacion.children)
  navegacion.appendChild(btnCerrar);
  cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu = (boton, overlay) =>{
  boton.addEventListener("click",()=>{
      navegacion.classList.add("ocultar");
      overlay.remove();
      boton.remove();
  });

  overlay.onclick = function(){
    overlay.remove();
    navegacion.classList.add('ocultar');  
    boton.remove();
}
}

function mensajeAleatorioMate(){
  let mensajeAleatorio = aleatorio(1,5)

  if (mensajeAleatorio  == 1) {
    mensaje = 'La magia ancestral de plasmar recuerdos'

  } else if (mensajeAleatorio  == 2) {
    mensaje = "A través de la artesanía, preservamos nuestra cultura y herencia."

  } else if (mensajeAleatorio  == 3) {
    mensaje = "Los recuerdos perduran en la delicadeza de la artesanía."

  } else if (mensajeAleatorio  == 4) {
    mensaje = "La artesanía es el puente que une nuestro pasado y nuestra herencia cultural."

  } else if (mensajeAleatorio == 5) {
    mensaje = "En cada pieza artesanal, se refleja la riqueza de nuestra cultura y herencia."

  } else {
    mensaje = "Los recuerdos se entrelazan con la artesanía, creando una herencia viva."
  }

  crearMensaje()
}


function crearMensaje(){
  let sectionMensajes = document.getElementById("mensajes");

  let parrafo= document.createElement("p")
  parrafo.innerHTML = mensaje

  sectionMensajes.appendChild(parrafo)
}


function aleatorio(min,max){return Math.floor(Math.random()*(max-min+1)+min)}

window.addEventListener('load', mensajeAleatorioMate)

/*boddy*/
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});