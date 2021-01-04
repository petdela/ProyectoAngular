import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargarJson();
  }
  
  cargarJson = () => {

  fetch('https://raw.githubusercontent.com/RicardoVilcacundo/ProyectoDAWM/main/BizLand/assets/json/disenopoliticas.json')
  .then( (resultado) => {
    return resultado.json();
  })
  .then( (data) => {
    console.log(data);
    let sectiontitle = document.createElement('div');
    sectiontitle.setAttribute('class', 'section-title');
    let title = document.createElement("h3");
    let Tspan = document.createElement("span");
    Tspan.textContent = "Políticas Generales";
    title.appendChild(Tspan)
    let pgenerales = document.createElement('p');
    pgenerales.textContent = data.politicas.generales;
    title.appendChild(pgenerales);
    sectiontitle.appendChild(title);

    let sectiondepartamentales = document.createElement('div');
    sectiondepartamentales.setAttribute('class', 'section-title');
    let titledep = document.createElement('h3');
    let Tspandep = document.createElement("span");
    Tspandep.textContent = "Políticas Departamentales";
    titledep.appendChild(Tspandep);
    let pdef = document.createElement('p');
    pdef.textContent = data.politicas.departamentales.definicion;
    let listtitle = document.createElement('h3');
    listtitle.textContent = "Tipos";
    let ul = document.createElement('ul');
    for(var tipo of data.politicas.departamentales.tipos){
        let li = document.createElement("li");  
        li.textContent = tipo;
        ul.appendChild(li);
    }
    sectiondepartamentales.appendChild(titledep);
    sectiondepartamentales.appendChild(pdef);
    let seccionlista = document.createElement('div');
    seccionlista.setAttribute('class', 'section-lista')
    seccionlista.appendChild(listtitle);
    seccionlista.appendChild(ul);


    let sectionespec = document.createElement('div');
    sectionespec.setAttribute('class', 'section-title');
    let titleespec = document.createElement("h3");
    let Tspanespec = document.createElement("span");
    Tspanespec.textContent = "Políticas Específicas";
    titleespec.appendChild(Tspanespec)
    let pespec = document.createElement('p');
    pespec.textContent = data.politicas.especificas;
    titleespec.appendChild(pespec);
    sectionespec.appendChild(titleespec);

    let contenedor = document.getElementsByClassName("contAudi")[0];
    contenedor.appendChild(sectiontitle);
    contenedor.appendChild(sectiondepartamentales);
    contenedor.appendChild(seccionlista);
    contenedor.appendChild(sectionespec);




   })
  .catch( (error) => {
    console.log("Error ",error)

  })
}
}
