import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css','../../../assets/css/admin.css']
})
export class InfoCardComponent implements OnInit {
  @Input() icono: string;
  @Input() texto: string;
  @Input() valor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
