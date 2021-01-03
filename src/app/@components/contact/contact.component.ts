import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() texto: string;
  @Input() icono: string;
  @Input() texto1: string;
  @Input() texto2: string;
  constructor() { }

  ngOnInit(): void {
  }

}
