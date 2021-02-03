import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cont-serv',
  templateUrl: './cont-serv.component.html',
  styleUrls: ['./cont-serv.component.css','../../../assets/css/admin.css']
})
export class ContServComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ocultar();
  }
  ocultar = () => {
    let header = document.getElementsByTagName("app-header")[0] as HTMLElement;
    let footer = document.getElementsByTagName("app-footer")[0] as HTMLElement;
    header.style.display = "none";
    footer.style.display = "none";
  }
  cargarStep = () => {
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
    slidePage.style.marginLeft = "-25%";
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
