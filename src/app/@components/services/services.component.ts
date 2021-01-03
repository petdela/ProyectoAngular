import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() texto: string;
  @Input() icono: string;
  @Input() referencia: string;
  @Input() nombre: string;
  @Input() descripcion: string;
  constructor() { }

  ngOnInit(): void {
  }

}
