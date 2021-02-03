import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css','../../../assets/css/admin.css']
})
export class EliminarComponent implements OnInit {

  constructor() { }
    
  ngOnInit(): void {
    this.inicial();
    this.llenarSelect();
  }

  llenarSelect = () => {
    fetch('http://localhost:3000/serv')
    .then( (resultado) => {
      return resultado.json();
    })
    .then( (data) => {
      let select = document.getElementById("servAElim");
      for (var  service of data){
          let option = document.createElement("option");
          option.setAttribute("value",service.Codigo);
          option.textContent = service.Titulo;
          select.appendChild(option);
        }
      })
    .catch( (error) => {
      console.log("Error ",error)
  
    })

  }

  inicial = () => {
    
const slidePage = document.querySelector(".slide-page");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  setTimeout(function(){
    alert("Tus cambios han sido anadidos de manera exitosa");
    location.reload();
  },800);
});

  } 
}
