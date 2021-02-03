import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css','../../../assets/css/admin.css']
})
export class ConsultaComponent implements OnInit {

  constructor() { }
    
  ngOnInit(): void {
    this.inicial();
  }

  inicial = () => {
    
const slidePage = document.querySelector(".slide-page") as HTMLElement;
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  var contenedor = document.getElementsByClassName('contenedorAdministrarContenido')[0] as HTMLElement;
  contenedor.style.height = "650px;"
  slidePage.style.marginLeft = "-25%";
  var fieldtext = document.getElementsByTagName('textarea')[0];
  fieldtext.style.minHeight = "190px;"
  fieldtext.style.maxHeight = "200px;"
  //fieldtext.style = "margin-bottom: 20px;"
  var field = document.getElementById('fieldText');
  field.style.height = "200px;"
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
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

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
  }
}
