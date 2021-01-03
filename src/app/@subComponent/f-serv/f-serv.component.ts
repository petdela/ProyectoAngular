import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-serv',
  templateUrl: './f-serv.component.html',
  styleUrls: ['./f-serv.component.css']
})
export class FServComponent implements OnInit {
  @Input() icono: string;
  @Input() referencia: string;
  @Input() nombre: string;
  @Input() descripcion: string;
  constructor() { }

  ngOnInit(): void {
  }

}
