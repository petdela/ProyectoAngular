document.addEventListener('DOMContentLoaded', function() {
    cargarJson();
})

let cargarJson = () => {

  fetch('https://raw.githubusercontent.com/RicardoVilcacundo/ProyectoDAWM/main/BizLand/assets/json/consultoria.json')
  .then( (resultado) => {
    return resultado.json();
  })
.then((data)=>{
    
    let stitle = document.createElement("div");
    stitle.setAttribute('class', 'section-title')
    let title = document.createElement("h3");
    let Tspan = document.createElement("span");
    Tspan.textContent = "Financiera";
    title.appendChild(Tspan)
    for ( texto of data.consultoria.financiera.descripcion){
        let Tp= document.createElement("p");   
        Tp.textContent = texto;
        title.appendChild(Tp)
    }
    stitle.appendChild(title)    

    let stitle2 = document.createElement("div");
    stitle2.setAttribute('class', 'section-title')
    let title2 = document.createElement("h3");
    let Tspan2 = document.createElement("span");
    Tspan2.textContent = "Tributaria";
    title2.appendChild(Tspan2)
    for ( texto2 of data.consultoria.tributaria.descripcion){
        let Tp= document.createElement("p");   
        Tp.textContent = texto2;
        title2.appendChild(Tp)
    }
    stitle2.appendChild(title2)

    let stitle3 = document.createElement("div");
    stitle3.setAttribute('class', 'section-title')
    let title3 = document.createElement("h3");
    let Tspan3 = document.createElement("span");
    Tspan3.textContent = "Laboral";
    title3.appendChild(Tspan3)
    for ( texto3 of data.consultoria.laboral.descripcion){
        let Tp= document.createElement("p");   
        Tp.textContent = texto3;
        title3.appendChild(Tp)
    }
    stitle3.appendChild(title3)

    let contenedor = document.getElementsByClassName("consult")[0];
    contenedor.appendChild(stitle);
    contenedor.appendChild(stitle2);
    contenedor.appendChild(stitle3);


})

  .catch( (error) =>{
    console.log("Error", error)
  })
}