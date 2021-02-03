import { Component, OnInit } from '@angular/core';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css','../../../assets/css/cliente.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var cook = document.cookie;
    var cook = cook.replace("%40", "@");
    var separado = cook.split("=");
    var user = separado[1];
    var global;
    fetch('http://localhost:3000/users/'+user)
    .then(data =>{
      return data.json();
    })
    .then(resultado => {
      var nombre = document.getElementById('nombreusuario');
      var nombrecompleto = document.getElementById('nombrecompleto');
      var correo = document.getElementById('correo');
      var fechareg = document.getElementById('fechareg');
      var nombres = resultado[0].Nombres.split(" ");
      var apellidos = resultado[0].Apellidos.split(" ");
      nombre.textContent = nombres[0] + " " + apellidos[0];
      nombrecompleto.textContent = resultado[0].Nombres + " " + resultado[0].Apellidos;
      correo.textContent = resultado[0].Correo;
      fechareg.textContent = resultado[0].fechaC.split("T")[0];
    })
    fetch('http://localhost:3000/cliente/'+ user)
    .then(res =>{
      return res.json();
    })
    .then(clt => {
      var id = clt[0].Id_cliente;
      global = clt[0].Id_cliente;
      var id_cliente_anadir = document.getElementById('id_cliente_anadir');
      id_cliente_anadir.setAttribute('value', global);
      fetch('http://localhost:3000/res/'+id)
      .then(res1 => {
        return res1.json();
      })
      .then(final =>{
        var contenido = final[0].Contenido;
        var resena = document.getElementById('resenaContenido');
        resena.textContent = contenido;
        var textResena = document.getElementById('id_resena');
        textResena.setAttribute('value', final[0].Id_resena);
        var selectIdResena = document.getElementById('resenas');
        var option = document.createElement('option');
        option.textContent = final[0].Id_resena;
        option.setAttribute('value', final[0].Id_resena);
        selectIdResena.appendChild(option);
        var editarResena = document.getElementById('resenaeditada');
        editarResena.textContent = contenido;
        if(final[0].Id_resena > 0){
          var boton = document.getElementById('btnAdd');
          boton.style.display = 'none';
          var resenanueva = document.getElementById('resenanueva');
          resenanueva.textContent = "Ya posee una resena escrita!"
        }
      })
    })
    this.ocultar();
  }

  ocultar = () => {
    let header = document.getElementsByTagName("app-header")[0] as HTMLElement;
    let footer = document.getElementsByTagName("app-footer")[0] as HTMLElement;
    header.style.display = "none";
    footer.style.display = "none";
  }
}
