const imagenes = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal a");

let rutasImg = []; 
let imagenActiva = 13; 


//abrir la modal
imagenes.forEach((imagen,indice)=> {
    rutasImg.push(imagen.getAttribute("href"));
    imagen.addEventListener("click", function(algo){
        algo.preventDefault();
        imagenActiva = indice;
        imgModal.setAttribute("src",rutasImg[imagenActiva]);
        modal.classList.add("visible");
    });

});

modal.addEventListener("click", function(){
    this.classList.remove("visible");
});
for(let i = 0; i < flechas.length; i++){
    flechas[i].addEventListener("click", function(evento){
        evento.preventDefault();
        evento.stopPropagation();
        if( i == 0){
            imagenActiva = imagenActiva > 0 ? imagenActiva -1 : rutasImg.length -1;
        }else{
            imagenActiva = imagenActiva < rutasImg.length -1 ? imagenActiva + 1 :0;
        }
        imgModal.setAttribute("src",rutasImg[imagenActiva]);

    });
}